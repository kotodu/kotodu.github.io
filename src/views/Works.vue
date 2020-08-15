<template>
    <div class="works">
        <header class="text-center my-5">
            <h1>作品</h1>
        </header>
        <main class="container">
            <div class="row g-5">
                <work-card
                title="PrivateTextTool"
                description="私的な置換ツールです。TypeScript+Vue.js"
                imgSrc="/img/qiita.svg"
                demoURL="https://kotodu.io/privateTextTool"
                githubURL="https://github.com/busroutemap/privateTextTool"
                />
                <work-card
                title="PrivateTextTool"
                description="私的な置換ツールです。TypeScript+Vue.js"
                imgSrc="/img/qiita.svg"
                demoURL="https://kotodu.io/privateTextTool"
                githubURL="https://github.com/busroutemap/privateTextTool"
                />
                <work-card
                title="PrivateTextTool"
                description="私的な置換ツールです。TypeScript+Vue.js"
                imgSrc="/img/qiita.svg"
                demoURL="https://kotodu.io/privateTextTool"
                githubURL="https://github.com/busroutemap/privateTextTool"
                />
                <work-card
                title="PrivateTextTool"
                description="私的な置換ツールです。TypeScript+Vue.js"
                imgSrc="/img/qiita.svg"
                :lists="l1"
                />
                <work-card
                title="PrivateTextTool"
                description="私的な置換ツールです。TypeScript+Vue.js"
                imgSrc="/img/qiita.svg"
                />
            </div>
        </main>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
import { component } from 'vue/types/umd';

import WorkCard from '@/components/WorkCard.vue'

export default defineComponent({
    setup(){
        const l1 = ["a","b"];
        return {
            l1
        }
    },
    components:{
        WorkCard
    }
})
</script>