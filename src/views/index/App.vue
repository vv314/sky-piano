<template>
  <div id="app" :style="frameStyle">
    <Keyboard :stageSize="stageSize" />
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
      stageSize: fixOrientation(),
      version: config.version,
      bgUrl: defaultBgUrl
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
    }
  }
}
</script>

