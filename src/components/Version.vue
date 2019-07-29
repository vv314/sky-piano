<template>
  <span
    class="version"
    :class="{ 'version--active': isAutoPlaying }"
    @click="playMidi"
    >{{ version }}</span
  >
</template>

<script>
import config from '../config'
import eventBus from '../lib/events'

export default {
  inject: ['getPlayer'],
  data() {
    return {
      isAutoPlaying: false
    }
  },
  computed: {
    version() {
      return 'v' + config.version
    }
  },
  mounted() {
    eventBus.on('player:play', () => {
      this.isAutoPlaying = true
    })

    eventBus.on('player:sleep', () => {
      this.isAutoPlaying = false
    })
  },
  methods: {
    playMidi() {
      this.getPlayer()
        .then(player => {
          if (player.isPlaying()) {
            return player.pause()
          }

          if (!player.getState().isEnd) {
            return player.play()
          }

          player.loadUrl('star.mid').then(player => player.play())
        })
        .catch(e => {
          console.log('player err', e)
        })
    }
  }
}
</script>

<style lang="scss">
.version {
  &--active {
    color: #fefcb2;
    text-shadow: 0 0 2px #fefcb2;
  }

  position: absolute;
  right: 15px;
  bottom: 5px;
  opacity: 0.8;
  color: #fff;
}
</style>
