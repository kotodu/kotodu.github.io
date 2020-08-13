<template>
    <div class="card w-lg-75 container my-3">
        <div class="row">
            <div class="col-lg-4 text-center">
                <img
                :src="imgSrc"
                class="w-50 my-5"
                >
            </div>
            <div class="col-lg-8">
                <div class="card-body">
                    <h3
                    v-text="title"/>
                    <p
                    class="card-text"
                    v-text="description"
                    />
                    <ul class="list-group list-group-flush">
                        <li
                        class="list-group-item"
                        v-for="object in lists"
                        :key="object"
                        v-text="object"
                        />
                    </ul>
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
    description : String
};
export default defineComponent({
    props:{
        lists:{
            type:Array
        },
        imgSrc:{
            type:String
        },
        title:{
            type:String
        },
        description:{
            type:String
        }
    },
    setup(props:Props){
        const lists = props.lists;
        const imgSrc = props.imgSrc;
        const title = props.title;
        const description = props.description;
        return {
            lists,
            imgSrc,
            title,
            description
        }
    },
    components:{
    }
})
</script>
<style lang="scss" scoped>
</style>