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
import getClientSize from '../../lib/clientSize'
import wintip from '../../lib/wintip'
import config from '../../config'

export default {
  name: 'app',
  components: {
    Keyboard
  },
  data() {
    return {
      innerHeight: 0,
      innerWidth: 0,
      version: config.version
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
      const clientSize = getClientSize()

      if (
        orientation === 'portrait-secondary' ||
        orientation === 'portrait-primary'
      ) {
        this.forceLandscape(clientSize)
      } else {
        this.autoOrientation(clientSize)
      }

      // screenInfo()
    },
    forceLandscape(clientSize) {
      this.innerHeight = clientSize.width
      this.innerWidth = clientSize.height
      console.log(
        'force landscape:',
        'height',
        this.innerHeight,
        'width',
        this.innerWidth
      )
      wintip.$('size')(
        'force landscape:',
        'height',
        this.innerHeight,
        'width',
        this.innerWidth
      )
    },
    autoOrientation(clientSize) {
      const size = [clientSize.height, clientSize.width].sort((a, b) => a - b)

      this.innerHeight = size[0]
      this.innerWidth = size[1]
      console.log(
        'auto orientation:',
        'height',
        this.innerHeight,
        'width',
        this.innerWidth
      )
      wintip.$('size')(
        'auto orientation:',
        'height',
        this.innerHeight,
        'width',
        this.innerWidth
      )
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
