<template>
  <div class="keyboard">
    <ul class="container">
      <li
        class="item"
        v-for="item in list"
        :ref="'k_' + item.index"
        @mousedown="tap(item, $event)"
        @touchstart="tap(item, $event)"
        @touchend="tapEnd(item, $event)"
      >
        <div class="item__content">
          <Item :type="item.shape" />
        </div>
      </li>
    </ul>
    <div class="pipline"></div>
  </div>
</template>

<script>
import Item from './Item.vue'
import SmapleLibrary from '../lib/Tonejs-Instruments'

const conf = {
  total: 15,
  tone: 4,
  shapes: ['muti', 'rect', 'cicle'],
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
}

export default {
  name: 'Keyboard',
  components: {
    Item
  },
  data() {
    return {
      hasTouchEvt: false,
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
    play(note) {
      this.synth.triggerAttackRelease(note, '1n')
    },
    // 不要使用 prevent 阻止事件传播，以确保 click 能正常触发
    tap(item, evt) {
      const isTouchEvt = evt.type === 'touchstart'

      // 标识触屏
      if (isTouchEvt) {
        this.hasTouchEvt = true
      }

      // if (this.hasTouchEvt && !isTouchEvt) return

      if (this.hasTouchEvt) {
        // 触屏下接收但忽略 click 事件处理
        if (!isTouchEvt) return

        const el = this.$refs[`k_${item.index}`][0]

        el.classList.add('item--active')
      }

      console.log(isTouchEvt ? 'tap' : 'click', item.note)
      this.play(item.note)
    },
    tapEnd(item) {
      const el = this.$refs[`k_${item.index}`][0]
      el.classList.remove('item--active')
    }
  }
}

function random(max = 1, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min)
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
  user-select: none;
}

.container {
  list-style: none;
  display: grid;
  margin-top: 40px;
  grid-template-columns: repeat(5, 60px);
  grid-template-rows: repeat(3, 60px);
  justify-content: center;
  grid-gap: 20px;
}

.item {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  transform-style: preserve-3d;
  background-color: rgba(0, 0, 0, 0.2);
}

.item__content {
  width: 100%;
  height: 100%;
}

.item:active,
.item--active {
  transform: scale(0.8);
  transition: transform 0.1s;
}

.item:active .item__content,
.item--active .item__content {
  transform: rotateY(360deg);
  transition: transform 0.25s;
}

.pipline {
  height: 100px;
}
</style>
