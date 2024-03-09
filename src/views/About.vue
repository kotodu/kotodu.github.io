<template>
  <div class="about">
    <main>
      <!-- 自己紹介セクション -->
      <section class="my-5 w-75 mx-auto text-center">
        <h1>ことづ</h1>
        <h6 class="read">@Kotodu</h6>

        <!-- 段落数分増やす -->
        <p v-for="text in introduceText" :key="text" v-text="text" />

        <!-- worksへのボタン -->
        <router-link to="/works" class="text-decoration-none">
          <button type="button" class="btn btn-dark btn-lg px-5 my-3">制作実績</button>
        </router-link>
      </section>

      <!-- スキル紹介セクション -->
      <section class="my-5 py-3 mx-auto w-75 border-top">
        <!-- ヘッダー -->
        <div class="text-center">
          <h1>スキル</h1>
          <p class="read">得意とする言語やライブラリなど</p>
        </div>

        <!-- コンテンツ -->
        <div class="w-lg-75 mx-auto py-2">
          <digest-box
            v-for="(content, i) in digestBoxContents"
            :title="content.title"
            :description="content.description"
            :imgSrc="content.imgSrc"
            :list="content.list"
          />
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import DigestBox from '@/components/DigestBox.vue'

//images
import imgPerson from '@/assets/img/bootstrap/bi-person-badge.svg'
import imgAward from '@/assets/img/bootstrap/bi-award.svg'
import imgFileCode from '@/assets/img/bootstrap/bi-file-code.svg'
import imgBoxSeam from '@/assets/img/bootstrap/bi-box-seam.svg'
import imgTools from '@/assets/img/bootstrap/bi-tools.svg'
import imgHdd from '@/assets/img/bootstrap/bi-hdd.svg'
import imgMap from '@/assets/img/bootstrap/bi-map.svg'

const certifications = [
  'ITパスポート試験',
  '基本情報技術者試験',
  'Java SE 7/8 Bronze',
  '情報セキュリティマネジメント試験',
  '応用情報技術者試験'
]
const skills = ['Webアプリケーション制作', 'Adobe Illustrator']
const langs = ['JavaScript / TypeScript', 'CSS, SASS(SCSS)', 'Illustrator Scripts', 'VB.NET']
const fws = ['Vue.js', 'Leaflet.js', 'Bootstrap', 'Express.js', 'React.js']
const envs = ['Node.js', 'Visual Studio Code', 'Visual Studio', 'Git / GitHub', 'Adobe Illustrator']
const dbs = ['MongoDB', 'Microsoft SQL Server']
const gis = ['OpenStreetMap']
const introduceText = [
  '東京都在住。SIer勤務、システムエンジニア見習い。',
  '大学時代のバスマップ制作経験を通して、交通とITの関わりに興味を持つ。',
  '何でも意欲的に取り組むのが自慢。',
  '現在は、個人でのWebアプリケーション開発や、資格取得に挑戦している。',
  '読書、まちあるき、弁当作りが趣味。'
]

type digestBoxProps = {
  title: string
  description: string
  imgSrc: string
  list: string[]
}

const digestBoxContents = Array<digestBoxProps>(
  {
    title: '全般',
    description: '得意とするスキル全般',
    imgSrc: imgPerson,
    list: skills
  },
  {
    title: '資格',
    description: 'これまでに取得した資格',
    imgSrc: imgAward,
    list: certifications
  },
  {
    title: '言語',
    description: '主に得意とする言語。この他にも経験あり',
    imgSrc: imgFileCode,
    list: langs
  },
  {
    title: 'フレームワーク・ライブラリ',
    description: '主に使用しているフレームワーク・ライブラリ',
    imgSrc: imgBoxSeam,
    list: fws
  },
  {
    title: 'ツール・環境',
    description: '主に使用しているツールや環境',
    imgSrc: imgTools,
    list: envs
  },
  {
    title: 'データベース',
    description: '主に使用しているデータベース',
    imgSrc: imgHdd,
    list: dbs
  },
  {
    title: '地図・地理情報',
    description: '主に触れてきたGISシステムや地図など',
    imgSrc: imgMap,
    list: gis
  }
)

export default defineComponent({
  setup() {
    return {
      digestBoxContents,
      introduceText
    }
  },
  components: {
    DigestBox
  }
})
</script>
