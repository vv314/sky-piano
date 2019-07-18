<template>
  <div>
    <form class="bg-btn">
      <svg
        class="bg-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"
          p-id="7970"
          fill="#fefcb2"
        ></path>
        <path
          d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"
          p-id="7971"
          fill="#fefcb2"
        ></path>
      </svg>
      <input
        type="file"
        ref="fileInput"
        accept="image/gif,image/jpeg,image/jpg,image/png"
        @change="getImg"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: []
    }
  },
  methods: {
    getImg() {
      const img = this.$refs.fileInput.files[0]
      const reader = new FileReader()

      if (!img) return

      // 图片读取成功回调函数
      reader.onload = e => {
        const base64Url = e.target.result

        this.$emit('get-bg', base64Url)
      }

      reader.readAsDataURL(img)
    }
  }
}
</script>

<style>
.bg-btn {
  position: relative;
  height: 32px;
  width: 32px;
  border: 0px solid #fefcb2;
  /*border-radius: 50%;*/
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0.2);
}

.bg-btn:active {
  background-color: rgba(0, 0, 0, 0.4);
}

.bg-btn input {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
}

.bg-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  text-align: center;
  opacity: 0.8;
  transform: translate(-50%, -50%);
}
</style>
