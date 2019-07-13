<template>
  <transition appear name="fade">
    <div class="btn-shape">
      <div v-if="type === 'muti' || type === 'cicle'" class="shape cicle"></div>
      <div v-if="type === 'muti' || type === 'rect'" class="shape rect"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Item',
  props: ['type']
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

.btn-shape {
  width: 100%;
  height: 100%;
  position: relative;
  animation: breathe 1s ease-in-out both infinite alternate;
  transform-style: preserve-3d;
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
  transform: translate(-50%, -50%);
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
  transform-style: preserve-3d;
  border: 1px solid #fefcb2;
  box-shadow: 0px 0px 1px 1px #fefcb2;
}

.rect::after {
  transform: rotate(45deg);
}

.cicle::after {
  border-radius: 50%;
}
</style>
