<template>
  <div
    id="app"
    :style="{ height: innerHeight + 'px', width: innerWidth + 'px' }"
  >
    <Keyboard />
    <span class="version">v{{ version }}</span>
  </div>
</template>

<script>
import Keyboard from '~/components/Keyboard.vue'

export default {
  name: 'app',
  components: {
    Keyboard
  },
  data() {
    return {
      innerHeight: 0,
      innerWidth: 0,
      version: '0.1.0'
    }
  },
  created() {
    this.fixOrientation()

    window.addEventListener('resize', this.fixOrientation.bind(this), false)
  },
  mounted() {},
  methods: {
    fixOrientation() {
      const orientation =
        screen.msOrientation ||
        screen.mozOrientation ||
        (screen.orientation || {}).type

      if (
        orientation === 'portrait-secondary' ||
        orientation === 'portrait-primary'
      ) {
        this.forceLandscape()
      } else {
        this.autoOrientation()
      }
    },
    forceLandscape() {
      this.innerHeight = window.innerWidth
      this.innerWidth = window.innerHeight
      console.log('force landscape')
    },
    autoOrientation() {
      const size = [window.innerHeight, window.innerWidth].sort((a, b) => a - b)

      this.innerHeight = size[0]
      this.innerWidth = size[1]
      console.log('auto orientation')
    }
  }
}
</script>

<style>
body,
ul {
  padding: 0;
  margin: 0;
}

body {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

#app {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  text-align: center;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: url(../../assets/bg.jpg) no-repeat center/100%;
  background-size: cover;
}

.version {
  position: absolute;
  right: 15px;
  bottom: 5px;
  font-size: 14px;
  color: white;
}

@media screen and (orientation: portrait) {
  #app {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
