<template>
    <div class="border-title-wrapper">
        <span :style="{'border-color':color}">{{title}}</span>
        <strong class="tool-btn">{{subTitle}}</strong>
    </div>
</template>

<script>
    export default {
        name: "border-title",
        props:{
            title:String,
            subTitle:[String,Number],
            color:
                {
                    type:String,
                    default:'#fff'
                },
        }
    };
</script>

