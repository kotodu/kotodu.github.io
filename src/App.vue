<template>
    <div id="app">
        <Navbar/>
        <router-view/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Navbar from "./components/Navbar.vue";
export default Vue.extend({
    name:'App',
    components:{
        Navbar
    }
})
</script>
<style lang="scss">
// 全体へbootstrapを適用
@import "~bootstrap/scss/bootstrap";
</style>
