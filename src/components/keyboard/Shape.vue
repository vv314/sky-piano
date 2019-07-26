<template>
  <div class="shape">
    <svg
      v-if="shape === 'rect'"
      width="100%"
      height="100%"
      version="1.1"
      :style="rotate"
    >
      <rect
        :stroke-dasharray="length"
        :stroke-dashoffset="length"
        :style="styleObj"
        ref="path"
        x="0"
        y="0"
        width="100%"
        height="100%"
        class="path"
      />
    </svg>
    <svg v-else width="100%" height="100%" version="1.1" :style="rotate">
      <circle
        :stroke-dasharray="length"
        :stroke-dashoffset="length"
        :style="styleObj"
        ref="path"
        cx="50%"
        cy="50%"
        r="50%"
        class="path"
      />
    </svg>
  </div>
</template>

<script>
import createKeyframes from '../../lib/createKeyframes'
import getSvgPathLength from '../../lib/getSvgPathLength'
import { random } from '../../lib/util'

export default {
  props: ['shape'],
  data() {
    return {
      length: 0,
      styleObj: {
        animationName: 'dash'
      },
      angle: 0
    }
  },
  computed: {
    rotate() {
      if (this.shape === 'rect') {
        this.angle = 45 + 90 * random(3)
      } else {
        this.angle = 45 * random(7)
      }

      return {
        transform: `rotateZ(${this.angle}deg) rotateY(${180 * random(1)}deg)`
      }
    }
  },
  mounted() {
    const shape = this.shape || 'circle'
    const path = this.$refs.path

    this.length = Math.ceil(getSvgPathLength(shape, path))

    window.addEventListener(
      'resize',
      () => {
        this.length = Math.ceil(getSvgPathLength(shape, path))
      },
      false
    )

    this.styleObj.animationName = createKeyframes(
      `shape-${shape}-${this.length}`,
      `0% {
        opacity: 0;
        stroke-dashoffset: ${this.length};
      }
      50% {
        opacity: .8;
        stroke-dashoffset: ${this.length / 2};
      }
      100% {
        opacity: 1;
        stroke-dashoffset: 0;
      }`
    )
  }
}
</script>

<style>
.shape {
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  float: left;
  overflow: hidden;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shape::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle closest-side,
    transparent 15%,
    rgba(255, 252, 183, 0.3) 55%,
    transparent 85%
  );
  opacity: 0;
  animation: fadeIn 3s ease 1s;
  animation-fill-mode: forwards;
}

.shape svg {
  height: 100%;
  width: 100%;
  transform-origin: center;
  backface-visibility: visible;
  /*filter: drop-shadow(0px 0px 1px #fefcb2);*/
}

.path {
  stroke-width: 2;
  stroke: #fefcb2;
  fill: transparent;
  opacity: 0;
  /* 使用缩放控制大小，确保边框不被剪裁 */
  transform: scale(0.5);
  transform-origin: center;
  animation: dash 2s linear 0.5s;
  animation-fill-mode: forwards;
  /*animation-iteration-count: infinite;
  animation-direction: alternate;*/
}

@keyframes dash {
  from {
    opacity: 0;
    stroke-dashoffset: 120;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
