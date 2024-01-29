<template>
  <div id="app">
   <Trunk></Trunk>
  </div>
</template>

<script>
import Trunk from './pages/trunk.vue';
export default {
  components: {
    Trunk
  }
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
