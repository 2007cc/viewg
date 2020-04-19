<template>
    <div class="rect-card">
        <div class="img-rect">
            <img :src="imgUrl" :style="{'height':imgSize+'px'}">
        </div>
        <p class="rect-card-title" :style="{'font-size':subTitleSize+'px'}">{{title}}</p>
        <p class="rect-card-sub-title">{{subTitle}}</p>
    </div>
</template>

<script>
    export default {
        name: "rect-card",
        props:{
            imgUrl:String,
            title:[String, Number],
            subTitle:[String, Number],
            titleOffset:{
                type:Number,
                default:38
            },
            subTitleSize:{
                type:Number,
                default:16
            },
            imgSize:{
                type:Number,
                default:80
            }
        }
    };
</script>

