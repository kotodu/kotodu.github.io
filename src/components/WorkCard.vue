<template>
  <div class="col-lg-3">
    <div class="card mx-auto h-100">
      <img :src="links.img" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title" v-text="text.head" />
        <p class="card-text" v-text="text.body" />
      </div>
      <div class="card-footer bg-transparent border-white">
        <!-- 両方ある場合 -->
        <div class="btn-group" v-if="links.demo !== undefined && links.github !== undefined">
          <a :href="links.demo" v-show="links.demo !== undefined" class="btn btn-primary">DEMO</a>
          <a :href="links.github" v-show="links.github !== undefined" class="btn btn-dark"
            >GitHub</a
          >
        </div>

        <!-- 片方しかない場合 -->
        <div v-else>
          <a :href="links.demo" v-show="links.demo !== undefined" class="btn btn-primary">DEMO</a>
          <a :href="links.github" v-show="links.github !== undefined" class="btn btn-dark"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    imgSrc: String || null,
    title: String,
    description: String,
    githubURL: String || null,
    demoURL: String || null
  },
  setup(props) {
    const links = ref({
      img: props.imgSrc,
      github: props.githubURL,
      demo: props.demoURL
    })
    const text = ref({
      head: props.title,
      body: props.description
    })
    return {
      links,
      text
    }
  }
})
</script>
