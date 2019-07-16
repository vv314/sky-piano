<template>
  <div id="waveform"></div>
</template>

<script>
import SiriWave from '../lib/SiriWave'

export default {
  props: ['amplitude', 'speed', 'width', 'height'],
  data() {
    return {
      wave: null
    }
  },
  mounted() {
    // Setup the "waveform" animation.
    this.wave = new SiriWave({
      container: document.getElementById('waveform'),
      width: this.width,
      height: 80,
      cover: true,
      color: '#fefcb2',
      speed: this.speed || 0.02,
      amplitude: this.amplitude,
      frequency: 2
      // lerpSpeed: 1
    })
  },
  watch: {
    width() {
      this.resize()
    }
  },
  methods: {
    // Update the height of the wave animation.
    // These are basically some hacks to get SiriWave.js to do what we want.
    resize() {
      const { width } = this
      const height = 80

      this.wave.height = height
      this.wave.height_2 = height / 2
      this.wave.MAX = this.wave.height_2 - 4
      this.wave.width = width
      this.wave.width_2 = width / 2
      this.wave.width_4 = width / 4
      this.wave.canvas.height = height
      this.wave.canvas.width = width
      this.wave.container.style.margin = -(height / 2) + 'px auto'
    },
    start() {
      this.wave.start()
    },
    stop() {
      this.wave.stop()
    },
    setSpeed(val) {
      this.wave.setSpeed(val)
    },
    setAmplitude(val) {
      this.wave.setAmplitude(val)
    }
  }
}
</script>
