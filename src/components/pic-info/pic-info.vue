<template>
    <div class="pic-info">
        <div class="pic-info-img">
            <img :src="img">
        </div>
        <div class="pic-info-body">
            <p class="pic-info-title">{{title}}</p>
            <div class="pic-info-content">
                <span class="pic-sub-title">{{subTitle}}</span>
                <span>{{unit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pic-info",
        props:{
            img:String,
            title:[String,Number],
            subTitle:[String,Number],
            unit:[String,Number],

        }
    }
</script>

