<template>
  <div class="home">
    <home-header />
    <!-- aboutへのボタン -->
    <section class="text-center">
      <router-link to="/about" class="text-decoration-none">
        <button type="button" class="btn btn-dark btn-lg px-5">ことづについて</button>
      </router-link>
    </section>

    <!-- SNSリスト -->
    <section id="icons" class="container d-flex w-50 row g-5 my-auto text-center">
      <icon-sns-link
        :aHref="snsLink.aHref"
        :imgName="snsLink.imgName"
        :pText="snsLink.pText"
        v-for="(snsLink, i) in snsLinks"
        :key="i"
      />
    </section>
  </div>
</template>

<script lang="ts">
import HomeHeader from '@/components/HomeHeader.vue'
import IconSnsLink from '@/components/IconSnsLink.vue'

// images
import svgGithub from '@/assets/img/github.svg'
import svgTwitter from '@/assets/img/Twitter_Social_Icon_Rounded_Square_Color.svg'
import svgQiita from '@/assets/img/qiita.svg'

import { defineComponent } from 'vue'

type SnsLink = {
  aHref: string
  imgName: string
  pText: string
}

const snsLinks = Array<SnsLink>(
  {
    aHref: 'https://github.com/kotodu',
    imgName: svgGithub,
    pText: 'GitHub : @kotodu'
  },
  {
    aHref: 'https://twitter.com/kotodu',
    imgName: svgTwitter,
    pText: 'Twitter : @kotodu'
  },
  {
    aHref: 'https://qiita.com/kotodu',
    imgName: svgQiita,
    pText: 'Qiita : @kotodu'
  }
)

export default defineComponent({
  setup() {
    return {
      snsLinks
    }
  },
  components: {
    HomeHeader,
    IconSnsLink
  }
})
</script>
