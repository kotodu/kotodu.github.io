<template>
    <div class="my-5">
        <div
        class="text-center">
            <img
            src="/img/topIconKotodu.png"
            width="200"
            height="200"/>
        </div>
        <div
        class="my-5 text-center">
            <h1 id="h1"
            class="font-weight-bold"
            v-text="headerText.name"
            />
            <p
            class="font-weight-bold">
            {{headerText.role}}<br>
            {{headerText.words}}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
export default defineComponent({
    setup(){
        const headerText = ref({
            name:"Kotodu",
            role:"システムエンジニア見習い",
            words:"Keywords : JavaScript, Vue.js, Leaflet.js"
        });
        return {
            headerText
        }
    }
})
</script>