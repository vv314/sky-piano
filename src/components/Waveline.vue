<template>
  <div ref="waveform"></div>
</template>

<script>
import Stopwatch from '../lib/Stopwatch'
import SiriWave from '../lib/SiriWave'
import wintip from '../lib/wintip'

export default {
  props: ['amplitude', 'speed', 'width', 'height'],
  data() {
    return {
      wave: null,
      rateTimer: 2000,
      currentSpeed: 0,
      stopwatch: new Stopwatch()
    }
  },
  mounted() {
    this.attachSiriWave()
  },
  watch: {
    width() {
      this.$emit('wave:resize')
    }
  },
  methods: {
    attachSiriWave() {
      // Setup the "waveform" animation.
      const wave = new SiriWave({
        container: this.$refs.waveform,
        width: this.width,
        height: 80,
        cover: true,
        color: '#fefcb2',
        speed: this.speed || 0.02,
        amplitude: this.amplitude,
        frequency: 2
        // lerpSpeed: 1
      })

      const bind = name => wave[name].bind(wave)

      this.$on('wave:start', bind('start'))
      this.$on('wave:stop', bind('stop'))
      this.$on('wave:setSpeed', bind('setSpeed'))
      this.$on('wave:stop', bind('setAmplitude'))

      // Update the height of the wave animation.
      // These are basically some hacks to get SiriWave.js to do what we want.
      this.$on('wave:resize', () => {
        const { width } = this
        const height = 80

        wave.height = height
        wave.height_2 = height / 2
        wave.MAX = wave.height_2 - 4
        wave.width = width
        wave.width_2 = width / 2
        wave.width_4 = width / 4
        wave.canvas.height = height
        wave.canvas.width = width
        wave.container.style.margin = -(height / 2) + 'px auto'
      })
    },
    start() {
      this.$emit('wave:start')

      // 开启心跳监测，计算点击速率
      this.initRateRecord()
    },
    stop() {
      this.$emit('wave:stop')
    },
    setSpeed(val) {
      // 节流
      if (this.currentSpeed === val) return

      this.$emit('wave:setSpeed', val)
      this.currentSpeed = val
    },
    setAmplitude(val) {
      this.$emit('wave:setAmplitude', val)
    },
    touch(amplitude) {
      const fps = this.stopwatch.tick().checkBeats('fps', 5)
      const speedRatio = this.heartRate(fps)

      this.setSpeed(this.speed * speedRatio)
    },
    initRateRecord() {
      this.stopwatch.start()

      setInterval(() => {
        const fps = this.stopwatch.emptyFrame().checkBeats('fps', 5)
        const speedRatio = this.heartRate(fps)

        this.setSpeed(this.speed * speedRatio)

        console.log('fps', fps, 'wave', speedRatio)
        wintip.$('rate')('fps', fps, 'wave:', speedRatio)
      }, this.rateTimer)
    },
    heartRate(fps) {
      const maxFps = 5
      const limitVal = 3.5

      if (fps > maxFps) return limitVal

      const val = ((limitVal - 1) / maxFps) * fps + 1

      // range 1 ~ limitVal
      return Number(val.toFixed(3))
    }
  }
}
</script>
