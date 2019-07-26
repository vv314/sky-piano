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

    <span class="version" @click="autoplay">v{{ version }}</span>
  </div>
</template>

<script>
import Keyboard from './keyboard/Layout.vue'
import Droparea from './Droparea.vue'
import Waveline from './Waveline.vue'
import SetBg from './SetBg.vue'
import { fixOrientation } from '../lib/clientSize'
import midiPlayer from '../lib/midiPlayer'
import defaultBgUrl from '../assets/bg.jpg'
import wintip from '../lib/wintip'
import config from '../config'

export default {
  name: 'app',
  components: {
    Droparea,
    Keyboard,
    Waveline,
    SetBg
  },
  data() {
    return {
      stageSize: fixOrientation(),
      version: config.version,
      bgUrl: defaultBgUrl,
      tracks: 0
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
    this.registMidiPlayerEvent()

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
    autoplay() {
      if (midiPlayer.isPlaying()) {
        midiPlayer.pause()
      } else {
        midiPlayer.play()
        console.log('play')
      }
    },
    registMidiPlayerEvent() {
      midiPlayer.on('fileLoaded', player => {
        this.tracks = player.tracks.length
        console.log('tracks', this.tracks)
      })

      midiPlayer.on('midiEvent', e => {
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

      midiPlayer.on('endOfFile', e => {
        this.keyboard.release()
      })

      midiPlayer.on('pause', e => {
        this.keyboard.release()
      })

      // 确保在事件监听之后调用，以免错过时机
      midiPlayer.load()
    },
    onDropMidi(res) {
      midiPlayer.stop()
      this.keyboard.release()

      if (res.code === 0) {
        midiPlayer.load(res.data)
        console.log('play', res.file)
        midiPlayer.play()
      }
    }
  }
}
</script>
