<template>
  <div id="App">
    <BlockGame></BlockGame>
  </div>
</template>

<script>
import BlockGame from './components/BlockGame.vue'

export default {
  name: 'App',
  components: {
    BlockGame
  }
}
</script>

<style>
body {
  background-color: #ddd;
}
</style>
