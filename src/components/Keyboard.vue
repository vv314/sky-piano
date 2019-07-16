<template>
  <div class="main">
    <ul class="keyboard">
      <li
        v-for="item in list"
        @mousedown="tap(item, $event)"
        @mouseup="tapEnd(item, $event)"
        @touchstart="tap(item, $event)"
        @touchend="tapEnd(item, $event)"
      >
        <Item :ref="'n_' + item.index" :type="item.shape" />
      </li>
    </ul>
    <Waveline
      ref="waveline"
      :amplitude="amplitude"
      :speed="waveSpeed"
      :width="stageWidth"
    />
  </div>
</template>

<script>
import Item from './Item.vue'
import Waveline from './Waveline.vue'
import SmapleLibrary from '../lib/Tonejs-Instruments'
import Stopwatch from '../lib/Stopwatch'
import wintip from '../lib/wintip'

const conf = {
  total: 15,
  tone: 4,
  shapes: ['muti', 'rect', 'cicle'],
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
}

export default {
  name: 'Keyboard',
  props: ['stageWidth'],
  components: {
    Item,
    Waveline
  },
  data() {
    return {
      hasTouchEvt: false,
      amplitude: 0.5,
      waveSpeed: 0.01,
      rateTimer: 3500,
      stopwatch: new Stopwatch(),
      list: createKeyboard(conf)
    }
  },
  created() {
    console.table(createKeyboard(conf))
  },
  mounted() {
    this.synth = SmapleLibrary.load({
      instruments: 'piano'
    }).toMaster()

    // 开启心跳监测，计算点击速率
    this.initRateRecord()
    this.$refs.waveline.start()
  },
  methods: {
    play(note) {
      this.synth.triggerAttackRelease(note, '1n')
    },
    // 不要使用 prevent 阻止事件传播，以确保 click 能正常触发
    // touchstart -> touchend -> mousedown -> mouseup -> click
    tap({ index, note }, evt) {
      const isTouchEvt = evt.type === 'touchstart'

      if (isTouchEvt) {
        this.markTouchScreen()
      }

      if (this.hasTouchEvt && !isTouchEvt) return

      this.getNoteIns(index).tapdown()
      this.setWave(0.5 + (index + 1) / 5, this.heartRate())
      this.play(note)

      const log = [
        isTouchEvt ? 'tap' : 'click',
        `{${evt.target.className}}`,
        note
      ]
      console.log.apply(console, log)
      wintip.$('event').apply(null, log)
    },
    tapEnd({ index }, evt) {
      const isTouchEvt = evt.type === 'touchend'

      if (this.hasTouchEvt && !isTouchEvt) return

      this.getNoteIns(index).tapup()
    },
    markTouchScreen() {
      this.hasTouchEvt = true
    },
    getNoteIns(index) {
      return this.$refs[`n_${index}`][0]
    },
    initRateRecord() {
      this.stopwatch.start()

      setInterval(() => {
        this.setWave(0.5, this.heartRate())
      }, this.rateTimer)
    },
    heartRate() {
      const rate = this.stopwatch.tick().checkBeats('fps', 5)
      const maxRate = 5
      const limitVal = 5

      if (rate > maxRate) return limitVal

      const val = ((limitVal - 1) / maxRate) * rate + 1

      // range 1 ~ limitVal
      return Number(val.toFixed(3))
    },
    setWave(amplitude, speedRatio = 1) {
      const waveline = this.$refs.waveline
      const speed = this.waveSpeed * speedRatio

      if (!waveline) return

      waveline.setSpeed(speed)

      console.log('wave beats', amplitude, speedRatio)
      wintip.$('wave')('amp:', amplitude, 'speed:', speedRatio)
    }
  }
}

function createKeyboard({ total, tone, notes, shapes }) {
  const first = shapes[0]
  const rest = shapes.slice(1)
  const nlen = notes.length
  let currLv = tone - 1

  return [...Array(total)].map((e, i) => {
    const shape = i % nlen == 0 ? first : rest[i % rest.length]
    const note = notes[i % nlen]

    if (note === notes[0]) currLv++

    return { shape, note: note + currLv, index: i }
  })
}
</script>

<style>
.main {
  user-select: none;
  margin-top: 2%;
}

.keyboard {
  height: 68vmin;
  max-height: 380px;
  width: calc(68vmin / 3 * 5);
  max-width: calc(380px / 3 * 5);
  list-style: none;
  margin: 0 auto;
  /*outline: 1px dashed #fff;*/
}

.keyboard::before,
.keyboard::after {
  display: block;
  content: '';
  clear: both;
}

.keyboard li {
  width: calc(100% / 5);
  height: calc(100% / 3);
  float: left;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.pipline {
  height: 100px;
}
</style>
