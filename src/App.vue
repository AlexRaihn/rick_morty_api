<script setup lang="ts">
import NavBar from '../src/components/NavBar.vue'
</script>

<template>
  <div>
    <NavBar/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
