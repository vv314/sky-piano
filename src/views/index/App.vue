<template>
  <div id="app">
    <Keyboard :stageWidth="stageWidth" />
    <span class="version">v{{ version }}</span>
  </div>
</template>

<script>
import Keyboard from '~/components/Keyboard.vue'
import { fixOrientation } from '../../lib/clientSize'
import wintip from '../../lib/wintip'
import config from '../../config'

export default {
  name: 'app',
  components: {
    Keyboard
  },
  data() {
    return {
      stageWidth: fixOrientation().width,
      version: config.version
    }
  },
  mounted() {
    window.addEventListener(
      'resize',
      () => {
        this.stageWidth = fixOrientation().width
      },
      false
    )
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
  transform-style: preserve-3d;
  perspective: 900px;
}

#app {
  float: left;
  height: 100vmin;
  width: 100vmax;
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
  opacity: 0.8;
}

@media screen and (orientation: portrait) {
  #app {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
