<template>
    <div class="col-lg-3">
        <div
        class="card mx-auto h-100"
        >
            <img
            :src="links.img"
            class="card-img-top"
            >
            <div class="card-body">
                <h3
                class="card-title"
                v-text="text.head"/>
                <p
                class="card-text"
                v-text="text.body"/>
                <ul
                class="list-group list-group-flush"
                v-show="items !== undefined"
                >
                    <li
                    class="list-group-item"
                    v-for="item in items"
                    :key="item"
                    v-text="item"
                    />
                </ul>
            </div>
            <div
            class="card-footer bg-transparent border-white"
            >
                <!-- 両方ある場合 -->
                <div
                class="btn-group"
                v-if="links.demo !==undefined && links.github !==undefined">
                    <a
                    :href="links.demo"
                    v-show="links.demo !==undefined"
                    class="btn btn-primary">DEMO</a>
                    <a
                    :href="links.github"
                    v-show="links.github !==undefined"
                    class="btn btn-dark">GitHub</a>
                </div>
                
                <!-- 片方しかない場合 -->
                <div
                v-else>
                    <a
                    :href="links.demo"
                    v-show="links.demo !==undefined"
                    class="btn btn-primary">DEMO</a>
                    <a
                    :href="links.github"
                    v-show="links.github !==undefined"
                    class="btn btn-dark">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
import { component } from 'vue/types/umd';
type Props = {
    lists: Array<String>,
    imgSrc:String,
    title:String,
    description : String,
    githubURL:String,
    demoURL:String
};
export default defineComponent({
    props:{
        lists:{
            type:Array
        },
        imgSrc:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        githubURL:{
            type:String,
        },
        demoURL:{
            type:String,
        }
    },
    setup(props:Props){
        const links = ref({
            img:props.imgSrc,
            github:props.githubURL,
            demo:props.demoURL
        });
        const text = ref({
            head:props.title,
            body:props.description
        });
        const items = props.lists;
        return {
            links,
            text,
            items
        }
    }
})
</script>