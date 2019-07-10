<template>
  <div id="app">
    <Logo />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Logo from '../../components/Logo.vue'
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    Logo,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
</style>
