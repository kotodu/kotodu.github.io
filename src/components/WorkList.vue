<template>
  <div class="worklist">
    <ul class="list-group-flush px-0 mx-0">
      <li class="list-group-item" v-for="(work, i) in works" :key="i">
        <!-- ヘッダー -->
        <!-- 2行で済ませたいので、タイトルの隣にリンクを配置 -->
        <h3>
          {{ work.name }}
          <a :href="work.url" class="text-decoration-none">
            <img width="32" height="32" class="py-0 my-0 mx-auto" :src="githubSvg" />
          </a>
        </h3>

        <!-- 作品の1行説明 -->
        <p class="" v-text="work.description" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import githubSvg from '@/assets/img/github.svg'

type WorkInfo = {
  name: string
  description: string
  url: string
}

export default defineComponent({
  props: {
    lists: Array<WorkInfo>
  },
  setup(props) {
    const works = computed(() => {
      return props.lists
    })
    return {
      works,
      githubSvg
    }
  }
})
</script>
