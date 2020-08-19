<template>
    <div class="worklist">
        <ul class="list-group-flush px-0 mx-0">
            <li
            class="list-group-item"
            v-for="(work,i) in works"
            :key="i"
            >
                <!-- ヘッダー -->
                <!-- 2行で済ませたいので、タイトルの隣にリンクを配置 -->
                <h3>
                    {{work.name}}
                    <a
                    :href="work.url"
                    class="text-decoration-none">
                        <img
                        width="32"
                        height="32"
                        class="py-0 my-0 mx-auto"
                        src="/img/github.svg"
                        />
                    </a>
                </h3>

                <!-- 作品の1行説明 -->
                <p
                class=""
                v-text="work.description"
                />
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
import { component } from 'vue/types/umd';

// 引数が特別な配列のため、型を指定
// 本来はクラスを別に作成した方が良い
/**
 * WorkListの引数配列
 */
type WorkInfo = {
    name:String,
    description:String,
    url:String
};

// 引数型の明示
type Props = {
    lists: Array<WorkInfo>
};
export default defineComponent({
    props:{
        lists:{
            type:Array
        },
    },
    setup(props:Props){
        // 引数をそのまま取り込む
        const works = computed(()=>{
            return props.lists;
        });
        return {
            works
        }
    }
})
</script>