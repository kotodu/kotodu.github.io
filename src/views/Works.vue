<template>
    <div class="works">
        <main>
            <!-- 主な制作物 -->
            <section>
                <!-- ヘッダー -->
                <div class="text-center my-5">
                    <h1>主な制作物</h1>
                    <p class="read">
                        ことづの制作した主な作品・アプリケーションについて
                    </p>
                </div>

                <!-- 作品カード群 -->
                <!-- PCからだと4つまで横に並ぶ。モバイルは1つずつ -->
                <div class="container my-5">
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
                </div>
            </section>

            <!-- その他制作物 -->
            <section
            class="my-5 py-3 mx-auto text-center w-75 border-top">
                <!-- ヘッダー -->
                <div class="mx-auto">
                    <h1>その他制作物</h1>
                    <p class="read">自作スクリプトや試作アプリケーションなど</p>
                </div>

                <!-- リスト -->
                <div class="w-75 mx-auto">
                    <work-list
                    :lists="otherWorks"
                    />
                </div>
            </section>
        </main>
        <footer class="text-center my-5">
            <a
            href="https://github.com/kotodu"
            class="text-decoration-none">
                <button
                type="button"
                class="btn btn-dark btn-lg px-5 my-2"
                >
                    全てのコードをGitHubで確認する
                </button>
            </a>
        </footer>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
import { component } from 'vue/types/umd';

// コンポーネントのインポート
import WorkCard from '@/components/WorkCard.vue';
import WorkList from '@/components/WorkList.vue'

// 本当はクラスを別に作成した方が良い
/**
 * worklistの引数配列型
 */
type WorkInfo = {
    name:String,
    description:String,
    url:String
};

export default defineComponent({
    setup(){
        /**
         * worklistの引数に使う配列
         */
        const otherWorks = Array<WorkInfo>(
            {
                name:"illustrator-Line-Offset",
                description:"illustratorで線をオフセットできるスクリプト",
                url:"https://github.com/kotodu/illustrator-Line-Offset"
            },
            {
                name:"ことづ個人サイト(本サイト)",
                description:"BootstrapとVue.jsの練習として作成した個人サイト",
                url:"https://github.com/kotodu/kotodu.github.io"
            }
        );
        return {
            otherWorks
        }
    },
    components:{
        WorkCard,
        WorkList
    }
})
</script>