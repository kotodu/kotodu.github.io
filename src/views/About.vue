<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="w-50 mx-auto">
            <digest-box
            title="全般"
            description="得意とするスキル全般"
            imgSrc="/img/qiita.svg"
            :lists="skills"
            />
            <digest-box
            title="資格"
            description="これまでに取得した資格"
            imgSrc="/img/qiita.svg"
            :lists="certifications"
            />
            <digest-box
            title="言語"
            description="主に得意とする言語。この他にも経験あり"
            imgSrc="/img/qiita.svg"
            :lists="langs"
            />
            <digest-box
            title="フレームワーク"
            description="主に使用しているフレームワーク"
            imgSrc="/img/qiita.svg"
            :lists="fws"
            />
            <digest-box
            title="ツール・環境"
            description="主に使用しているツールや環境"
            imgSrc="/img/qiita.svg"
            :lists="envs"
            />
            <digest-box
            title="データベース"
            description="主に使用しているデータベース"
            imgSrc="/img/qiita.svg"
            :lists="dbs"
            />
            <digest-box
            title="地図・地理情報"
            description="主に触れてきたGISシステムや地図など"
            imgSrc="/img/qiita.svg"
            :lists="gis"
            />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
import { component } from 'vue/types/umd';

import DigestBox from '@/components/DigestBox.vue'

export default defineComponent({
    setup(){
        const certifications = [
            "ITパスポート",
            "基本情報技術者試験",
            "Java SE 7/8 Bronze Online"
        ];
        const skills = [
            "Webアプリケーション制作",
            "Adobe Illustrator"
        ];
        const langs = [
            "JavaScript/TypeScript",
            "CSS, SASS(SCSS)",
            "Illustrator Scripts",
            "VB.NET"
        ];
        const fws = [
            "Vue.js",
            "Leaflet.js",
            "Express.js"
        ];
        const envs = [
            "Node.js",
            "Visual Studio Code",
            "Visual Studio",
            "Git / GitHub"
        ];
        const dbs = [
            "MongoDB",
            "SQLserver"
        ];
        const gis = [
            "OpenStreetMap"
        ];
        return {
            certifications,
            skills,
            langs,
            fws,
            envs,
            dbs,
            gis
        }
    },
    components:{
        DigestBox
    }
})
</script>
<style lang="scss" scoped>
</style>