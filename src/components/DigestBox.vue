<template>
  <div class="card w-lg-75 container my-3">
    <div class="row">
      <div class="col-lg-4 text-center">
        <img :src="src" class="w-50 my-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body">
          <h3 v-text="title" />
          <p class="card-text" v-text="summary" />
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="object in objects" :key="object" v-text="object" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    list: Array<String>,
    imgSrc: String,
    title: String,
    description: String
  },
  setup(props) {
    const objects = computed(() => {
      return props.list
    })
    const src = computed(() => {
      return props.imgSrc
    })
    const head = computed(() => {
      return props.title
    })
    const summary = computed(() => {
      return props.description
    })
    return {
      objects,
      src,
      head,
      summary
    }
  }
})
</script>
