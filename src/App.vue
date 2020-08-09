<template>
    <div id="app">
        <!-- <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/works">Works</router-link>
        </nav> -->
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

</style>
