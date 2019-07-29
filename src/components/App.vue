<template>
  <div id="app" :style="frameStyle">
    <Droparea class="main" @drop="onDropMidi" accept="audio/midi">
      <Keyboard ref="keyboard" @play="onPlay" />
    </Droparea>

    <Waveline
      ref="waveline"
      amplitude="0.5"
      speed="0.01"
      :width="stageSize.width"
    />

    <SetBg class="set-bg" @get-bg="changeBg" />

    <Version />
  </div>
</template>

<script>
import Keyboard from './keyboard/Layout.vue'
import Droparea from './Droparea.vue'
import Waveline from './Waveline.vue'
import Version from './Version.vue'
import SetBg from './SetBg.vue'
import { fixOrientation } from '../lib/clientSize'
import defaultBgUrl from '../assets/bg.jpg'
import eventBus from '../lib/events'
import wintip from '../lib/wintip'

export default {
  name: 'app',
  components: {
    Droparea,
    Keyboard,
    Waveline,
    Version,
    SetBg
  },
  data() {
    return {
      stageSize: fixOrientation(),
      bgUrl: defaultBgUrl,
      tracks: 0
    }
  },
  provide() {
    return {
      getPlayer: this.getPlayer
    }
  },
  computed: {
    frameStyle() {
      const { width, height } = this.stageSize

      return {
        backgroundImage: `url(${this.bgUrl})`,
        height: height + 'px',
        width: width + 'px'
      }
    }
  },
  created() {
    const bgUrl = localStorage.getItem('bgUrl')

    if (bgUrl) {
      this.bgUrl = bgUrl
    }
  },
  mounted() {
    this.keyboard = this.$refs.keyboard
    this.initWaveLine()

    window.addEventListener(
      'resize',
      () => {
        this.stageSize = fixOrientation()
      },
      false
    )
  },
  methods: {
    changeBg(url) {
      this.bgUrl = url
      localStorage.setItem('bgUrl', url)
    },
    initWaveLine() {
      this.$refs.waveline.start()
    },
    onPlay(note) {
      this.$refs.waveline.touch()
    },
    getPlayer() {
      if (this._playerPromise) {
        return this._playerPromise
      }

      this._playerPromise = import('../lib/midiPlayer')
        .then(mod => mod.default)
        .then(player => {
          return player.setEventProxy(eventBus)
        })

      eventBus.on('player:fileLoaded', ctx => {
        this.tracks = ctx.tracks.length
      })

      eventBus.on('player:midiEvent', e => {
        const note = e.noteName

        if (e.name === 'Note on') {
          if (e.velocity > 0) {
            this.keyboard.tapdown(note, e.channel)
          } else {
            this.keyboard.tapup(note)
          }
        } else if (e.name === 'Note off') {
          this.keyboard.tapup(note)
        }
      })

      eventBus.on('player:play', () => {
        console.log('[player] play')
      })

      eventBus.on('player:sleep', () => {
        this.keyboard.release()
        console.log('[player] sleep')
      })

      console.log('[player] regist')

      return this._playerPromise
    },
    onDropMidi(res) {
      this.getPlayer().then(player => {
        player.stop()

        if (res.code === 0) {
          player.load(res.data, res.file).play()

          console.log('play', res.file)
        }
      })
    }
  }
}
</script>
