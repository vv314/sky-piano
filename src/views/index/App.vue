<template>
  <div id="app" :style="{ backgroundImage: `url(${bgUrl})` }">
    <Keyboard :stageWidth="stageWidth" />
    <SetBg class="set-bg" @get-bg="changeBg" />
    <span class="version">v{{ version }}</span>
    <div></div>
  </div>
</template>

<script>
import Keyboard from '~/components/Keyboard.vue'
import SetBg from '~/components/SetBg.vue'
import { fixOrientation } from '../../lib/clientSize'
import defaultBgUrl from '../../assets/bg.jpg'
import wintip from '../../lib/wintip'
import config from '../../config'

export default {
  name: 'app',
  components: {
    Keyboard,
    SetBg
  },
  data() {
    return {
      stageWidth: fixOrientation().width,
      version: config.version,
      bgUrl: defaultBgUrl
    }
  },
  created() {
    const bgUrl = localStorage.getItem('bgUrl')

    if (bgUrl) {
      this.bgUrl = bgUrl
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
  },
  methods: {
    changeBg(url) {
      this.bgUrl = url
      localStorage.setItem('bgUrl', url)
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
  font-size: 14px;
  color: white;
  transform: translate(-50%, -50%);
  position: relative;
  text-align: center;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #333;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 1s;
}

.set-bg {
  position: absolute;
  right: 20px;
  top: 20px;
}

.version {
  position: absolute;
  right: 15px;
  bottom: 5px;
  opacity: 0.8;
}

@media screen and (orientation: portrait) {
  #app {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
