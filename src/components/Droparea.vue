<template>
  <div class="droparea" @dragenter="showDragPanel = true">
    <slot></slot>

    <!-- 触发 drop 事件需阻止 dragover 默认行为 -->
    <!-- 这里使用一个空内容的 div 作为放置区域，避免内部元素干扰 -->
    <transition name="fade-drop">
      <div
        class="drop-panel"
        v-if="showDragPanel"
        @dragover.prevent="onDragover"
        @dragleave="showDragPanel = false"
        @drop="onDrop"
      ></div>
    </transition>
  </div>
</template>

<script>
/**
 * 获取文件 base64 内容
 */
import readAsDataURL from '../lib/readAsDataURL'

export default {
  props: ['accept'],
  data() {
    return {
      acceptList: [],
      showDragPanel: false
    }
  },
  created() {
    document.ondragover = e => e.preventDefault()
    document.ondrop = e => e.preventDefault()
  },
  mounted() {
    this.acceptList = (this.accept && this.accept.split(',')) || []
  },
  methods: {
    validate(type) {
      return this.acceptList.indexOf(type) > -1
    },
    onDrop(e) {
      const file = e.dataTransfer.files[0]

      this.showDragPanel = false

      if (!this.validate(file.type)) {
        return this.$emit('drop', { code: 1, data: '', msg: 'type error' })
      }

      readAsDataURL(file).then(data => {
        this.$emit('drop', { code: 0, data, file, msg: 'success' })
      })
    },
    onDragover(e) {
      e.dataTransfer.dropEffect = 'copy'
    }
  }
}
</script>

<style scoped>
.droparea {
  display: inline-block;
  position: relative;
}

.drop-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: copy;
  outline: 2px dashed #fefcb2;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
