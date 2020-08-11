<template>
    <div class="home">
        <home-header/>
        <div class="text-center">
            <a
            href="#h1"
            class="text-decoration-none">
                <button
                type="button"
                class="btn btn-dark btn-lg px-5"
                >
                    ことづについて
                </button>
            </a>
        </div>
        <div
        id="icons"
        class="text-center container d-flex w-50"
        >
            <div class="row g-5 text-center my-auto">
                <icon-sns-link
                aHref="https://github.com/kotodu"
                imgName="/img/github.svg"
                pText="GitHub : @kotodu"
                />
                <icon-sns-link
                aHref="https://twitter.com/kotodu"
                imgName="/img/Twitter_Social_Icon_Rounded_Square_Color.svg"
                pText="Twitter : @kotodu"
                />
                <icon-sns-link
                aHref="https://qiita.com/kotodu"
                imgName="/img/qiita.svg"
                pText="Qiita : @kotodu"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import HomeHeader from '@/components/HomeHeader.vue'
import IconSnsLink from '@/components/IconSnsLink.vue'
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
import { component } from 'vue/types/umd';
export default defineComponent({
    setup(){
        return {
        }
    },
    components:{
        HomeHeader,
        IconSnsLink
    }
})
</script>
<style lang="scss" scoped>
</style>