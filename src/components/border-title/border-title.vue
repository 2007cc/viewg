<template>
    <div class="border-title-wrapper">
        <span :style="{'border-color':color}">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "border-title",
        props:{
            title:String,
            color:
                {
                    type:String,
                    default:'#fff'
                },
        }
    };
</script>


