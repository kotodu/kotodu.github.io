<template>
    <div class="col-lg text-center">
        <a
        :href="link.aHref"
        class="text-decoration-none"
        >
            <img
            :src="link.imgSrc"
            width="50"
            height="50"/>
            <p
            class="text-center link-dark"
            v-text="link.pText"
            />
        </a>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, ref, computed } from "@vue/composition-api";
type Props = {
    aHref: String,
    imgName:String,
    pText : String
};
export default defineComponent({
    props:{
        aHref:{
            type:String
        },
        imgName:{
            type:String
        },
        pText:{
            type:String
        }
    },
    setup(props:Props){
        const link = ref({
            aHref : props.aHref,
            imgSrc : props.imgName,
            pText : props.pText
        });
        return {
            link
        }
    }
})
</script>