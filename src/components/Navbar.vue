<template>
    <div>
    <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <span class="navbar-brand px-5">kotodu.io</span>
        <button
        class="navbar-toggler" 
        type="button"
        data-toggle="collapse"
        data-target="#n"
        aria-controls="n"
        aria-expanded="false"
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
        class="collapse navbar-collapse"
        id="n">
            <ul class="navbar-nav">
            <li class="nav-item mx-2">
                <router-link
                class="nav-link active"
                to="/"
                v-if="$route.path==='/'"
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link1"/>
                </router-link>
                <router-link
                class="nav-link"
                to="/"
                v-else
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link1"/>
                </router-link>
            </li>
            <li class="nav-item mx-2">
                <router-link class="nav-link active"
                to="/about"
                v-if="$route.path==='/about'"
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link2"/>
                </router-link>
                <router-link class="nav-link"
                to="/about"
                v-else
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link2"/>
                </router-link>
            </li>
            <li class="nav-item mx-2">
                <router-link class="nav-link active"
                to="/works"
                v-if="$route.path==='/works'"
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link3"/>
                </router-link>
                <router-link class="nav-link"
                to="/works"
                v-else
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link3"/>
                </router-link>
            </li>
            </ul>
        </div>
    </div>
    </nav>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
export default defineComponent({
    setup(){
        const linksText = ref({
            link1:"Home",
            link2:"About",
            link3:"Works"
        });
        return {
            linksText
        }
    }
})
</script>