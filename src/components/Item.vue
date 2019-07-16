<template>
  <div class="note" :class="activeClass">
    <div class="note_content">
      <transition appear name="fade">
        <div class="note_shape">
          <div
            v-if="type === 'muti' || type === 'cicle'"
            class="shape cicle"
          ></div>
          <div
            v-if="type === 'muti' || type === 'rect'"
            class="shape rect"
          ></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Stopwatch from '../lib/Stopwatch'

export default {
  name: 'Item',
  props: ['type'],
  data() {
    return {
      isAni: false,
      isActive: false,
      stopwatch: new Stopwatch()
    }
  },
  computed: {
    activeClass() {
      return {
        'note--active': this.isActive,
        'note--ani': this.isAni
      }
    }
  },
  methods: {
    tapdown() {
      // 触屏下 :active 无法处理多点触摸，因此使用 js 控制
      this.isActive = true
      this.isAni = true

      this.stopwatch.start()

      // 防止点击过快，保证动画完整性
      setTimeout(() => {
        this.isAni = false
      }, 250)
    },
    tapup() {
      const ms = this.stopwatch.check()
      const duration = 120

      // 防止点击过快，保证动画完整性
      if (ms < duration) {
        setTimeout(() => {
          this.isActive = false
        }, duration - ms)
      } else {
        this.isActive = false
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.note {
  height: 100%;
  width: 100%;
  padding: 10%;
  box-sizing: border-box;
}

.note_content {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0.2);
}

.note_shape {
  width: 100%;
  height: 100%;
  position: relative;
  animation: breathe 1s ease-in-out both infinite alternate;
  transform-style: preserve-3d;
  backface-visibility: visible;
}

.note--active .note_content {
  transform: scale(0.8);
  transition: transform 0.1s;
}

.note--ani .note_shape {
  animation: rotateY 0.3s;
}

@keyframes rotateY {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

@keyframes breathe {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
}

.shape {
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  float: left;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle closest-side,
    transparent 15%,
    rgba(255, 252, 183, 0.3) 55%,
    transparent 85%
  );
}

.shape::after {
  content: '';
  border: 1px solid rgba(51, 51, 51, 0.5);
  box-shadow: 0px 0px 1px 1px rgba(51, 51, 51, 0.5);
  display: block;
  width: 50%;
  height: 50%;
  box-sizing: border-box;
  border: 1px solid #fefcb2;
  box-shadow: 0px 0px 2px 0px #fefcb2;
}

.rect::after {
  transform: rotate(45deg);
}

.cicle::after {
  border-radius: 50%;
}
</style>
