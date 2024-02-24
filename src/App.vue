<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Navbar
  }
})
</script>
