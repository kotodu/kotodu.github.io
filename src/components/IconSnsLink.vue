<template>
  <div class="col-lg text-center">
    <a :href="aHref" class="text-decoration-none">
      <img :src="imgName" width="50" height="50" />
      <p class="text-center link-dark" v-text="pText" />
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    aHref: String,
    imgName: String,
    pText: String
  },
  setup(props) {
    const { aHref, imgName, pText } = toRefs(props)
    return {
      aHref,
      imgName,
      pText
    }
  }
})
</script>
