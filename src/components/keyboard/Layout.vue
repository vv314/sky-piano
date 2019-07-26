<template>
  <div class="keyboard">
    <ul class="keyboard_wrap">
      <li v-for="item in list">
        <!-- 封装点击与触摸 -->
        <Tap :msg="item.note" @tapdown="tapdown" @tapup="tapup">
          <Note :ref="'n_' + item.note" :type="item.shape" />
        </Tap>
      </li>
    </ul>
  </div>
</template>

<script>
import Note from './Note.vue'
import Tap from './Tap.vue'
import SmapleLibrary from '../../lib/Tonejs-Instruments'
import wintip from '../../lib/wintip'

const conf = {
  total: 15,
  tone: 4,
  shapes: ['muti', 'rect', 'circle'],
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
}

export default {
  name: 'Keyboard',
  components: {
    Note,
    Tap
  },
  data() {
    return {
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
  },
  methods: {
    play(noteName) {
      this.synth.triggerAttackRelease(noteName)
      this.$emit('play', noteName)
    },
    tapdown(noteName, track = 1) {
      this.play(noteName)
      this.tapNote(noteName, 'down')

      console.log('tap', noteName, 'track', track)
    },
    tapup(noteName) {
      this.tapNote(noteName, 'up')
    },
    tapNote(noteName, action) {
      const ins = this.$refs[`n_${noteName}`]

      if (!ins || !ins[0]) return

      if (action === 'down') {
        ins[0].tapdown()
      } else {
        ins[0].tapup()
      }
    },
    reset() {
      this.list.forEach(e => this.tapNote(e.note, 'up'))
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
.keyboard {
  height: 68vmin;
  max-height: 380px;
  width: calc(68vmin / 3 * 5);
  max-width: calc(380px / 3 * 5);
  position: relative;
}

.keyboard_wrap {
  width: 100%;
  height: 100%;
  list-style: none;
  user-select: none;
}

.drop-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: copy;
  outline: 2px dashed #fefcb2;
  background-color: rgba(255, 255, 255, 0.2);
}

.keyboard_wrap::before,
.keyboard_wrap::after {
  display: block;
  content: '';
  clear: both;
}

.keyboard_wrap li {
  width: calc(100% / 5);
  height: calc(100% / 3);
  float: left;
  padding: 1.5%;
  overflow: hidden;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
