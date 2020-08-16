<template>
    <div>
    <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand px-5">kotodu.io</span>
        <button
        class="navbar-toggler" 
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item mx-2">
                <a
                class="nav-link active"
                href="/"
                v-if="$route.path==='/'"
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link1"/>
                </a>
                <a
                class="nav-link"
                href="/"
                v-else
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link1"/>
                </a>
            </li>
            <li class="nav-item mx-2">
                <a class="nav-link active"
                href="/about"
                v-if="$route.path==='/about'"
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link2"/>
                </a>
                <a class="nav-link"
                href="/about"
                v-else
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link2"/>
                </a>
            </li>
            <li class="nav-item mx-2">
                <a class="nav-link active"
                href="/works"
                v-if="$route.path==='/works'"
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link3"/>
                </a>
                <a class="nav-link"
                href="/works"
                v-else
                >
                    <span class="d-lg-none font-weight-bold"> > </span>
                    <span v-text="linksText.link3"/>
                </a>
            </li>
            </ul>
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