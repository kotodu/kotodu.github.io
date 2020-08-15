<template>
    <div class="works">
        <header class="text-center my-5">
            <h1>制作物</h1>
            <p class="read">
                ことづの制作した主な作品・アプリケーションについて
            </p>
        </header>
        <main class="container">
            <div class="row g-5">
                <work-card
                title="ttrmap"
                description="鳥取の交通マップと地図を重ね合わせるWebアプリ。"
                imgSrc="/img/qiita.svg"
                demoURL="https://kotodu.io/ttrmap"
                githubURL="https://github.com/kotodu/ttrmap"
                />
                <work-card
                title="鳥取＊busmap"
                description="これまでに制作した、鳥取についてのバスマップシリーズ。"
                imgSrc="/img/qiita.svg"
                demoURL="https://kotodu.io/tottori"
                />
                <work-card
                title="卒業研究"
                description="GTFSを元に、バス停向けの簡易バス系統図を出力するシステム。"
                imgSrc="/img/qiita.svg"
                githubURL="https://github.com/kotodu/Bus-Stops-Information-from-GTFS"
                />
                <work-card
                title="illustrator-to-MapTiles"
                description="フォルダごとにマップタイル画像を出力するIllustratorスクリプト。"
                imgSrc="/img/qiita.svg"
                githubURL="https://github.com/kotodu/illustrator-to-MapTiles"
                />
            </div>
        </main>
        <footer class="text-center my-5">
            <a
            href="https://github.com/kotodu"
            class="text-decoration-none">
                <button
                type="button"
                class="btn btn-dark btn-lg px-5 my-2"
                >
                    その他のコードをGitHubで確認する
                </button>
            </a>
        </footer>
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