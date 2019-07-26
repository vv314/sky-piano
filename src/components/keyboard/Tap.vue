<template>
  <div
    class="tap"
    @click="click"
    @mousedown="tapdown"
    @mouseup="tapup"
    @touchstart="tapdown"
    @touchend="tapup"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      hasTouchEvt: false
    }
  },
  methods: {
    // 不要使用 prevent 阻止事件传播，以确保 click 能正常触发
    // touchstart -> touchend -> mousedown -> mouseup -> click
    tapdown(e) {
      const isTouchEvt = e.type === 'touchstart'

      if (isTouchEvt) {
        this.markTouchScreen()
      }

      if (this.hasTouchEvt && !isTouchEvt) return

      this.$emit('tapdown', this.msg)
    },
    tapup(e) {
      const isTouchEvt = e.type === 'touchend'

      if (this.hasTouchEvt && !isTouchEvt) return

      this.$emit('tapup', this.msg)
    },
    click(e) {
      console.log('click', e)
    },
    markTouchScreen() {
      this.hasTouchEvt = true
    }
  }
}
</script>

<style scoped>
.tap {
  height: 100%;
  width: 100%;
}
</style>
