<template>
  <div class="works">
    <main>
      <!-- 主な制作物 -->
      <section>
        <!-- ヘッダー -->
        <div class="text-center my-5">
          <h1>主な制作物</h1>
          <p class="read">ことづの制作した主な作品・アプリケーションについて</p>
        </div>

        <!-- 作品カード群 -->
        <!-- PCからだと4つまで横に並ぶ。モバイルは1つずつ -->
        <div class="container my-5">
          <div class="row g-5">
            <work-card
              :title="work.title"
              :description="work.description"
              :imgSrc="work.imgSrc"
              :demoURL="work.demoURL"
              :githubURL="work.githubURL"
              v-for="(work, i) in mainWorks"
              :key="i"
            />
          </div>
        </div>
      </section>

      <!-- その他制作物 -->
      <section class="my-5 py-3 mx-auto text-center w-75 border-top">
        <!-- ヘッダー -->
        <div class="mx-auto">
          <h1>その他制作物</h1>
          <p class="read">自作スクリプトや試作アプリケーションなど</p>
        </div>

        <!-- リスト -->
        <div class="w-lg-75 mx-auto">
          <work-list :lists="otherWorks" />
        </div>
      </section>
    </main>
    <footer class="text-center my-5">
      <a href="https://github.com/kotodu" class="text-decoration-none">
        <button type="button" class="btn btn-dark btn-lg px-5 my-2">
          全てのコードをGitHubで確認する
        </button>
      </a>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

// コンポーネントのインポート
import WorkCard from '@/components/WorkCard.vue'
import WorkList from '@/components/WorkList.vue'

// WorkImages
import workImageBSI from '@/assets/img/works/bsi.png'
import workImageI2M from '@/assets/img/works/i2M.png'
import workImageTottori from '@/assets/img/works/tottori.png'
import workImageTTRMAP from '@/assets/img/works/ttrmap.png'

type WorkListInfo = {
  name: string
  description: string
  url: string
}

type WorkCardInfo = {
  title: string
  description: string
  imgSrc?: string
  githubURL?: string
  demoURL?: string
}

const mainWorks = Array<WorkCardInfo>(
  {
    title: 'ttrmap',
    description: '鳥取の交通マップと地図を重ね合わせるWebアプリケーション',
    imgSrc: workImageTTRMAP,
    demoURL: 'https://kotodu.io/ttrmap',
    githubURL: 'https://github.com/kotodu/ttrmap'
  },
  {
    title: '鳥取＊busmap',
    description: 'これまでに制作した、鳥取についてのバスマップシリーズ',
    imgSrc: workImageTottori,
    demoURL: 'https://kotodu.io/tottori'
  },
  {
    title: '卒業研究',
    description: 'GTFSを元に、バス停向けのバス運行系統図を出力するシステム',
    imgSrc: workImageBSI,
    githubURL: 'https://github.com/kotodu/Bus-Stops-Information-from-GTFS'
  },
  {
    title: 'illustrator-to-MapTiles',
    description: 'フォルダごとにマップタイル画像を出力するIllustratorスクリプト',
    imgSrc: workImageI2M,
    githubURL: 'https://github.com/kotodu/illustrator-to-MapTiles'
  }
)

const otherWorks = Array<WorkListInfo>(
  {
    name: 'illustrator-Line-Offset',
    description: 'illustratorで線をオフセットできるスクリプト',
    url: 'https://github.com/kotodu/illustrator-Line-Offset'
  },
  {
    name: 'ことづ個人サイト(本サイト)',
    description: 'BootstrapとVue.jsの練習で作成した個人サイト',
    url: 'https://github.com/kotodu/kotodu.github.io'
  },
  {
    name: 'illustrator-Path-Join',
    description: '交点を補完して2つのパスを結合するillustrator拡張機能',
    url: 'https://github.com/kotodu/illustrator-path-join'
  }
)

export default defineComponent({
  setup() {
    return {
      mainWorks,
      otherWorks
    }
  },
  components: {
    WorkCard,
    WorkList
  }
})
</script>
