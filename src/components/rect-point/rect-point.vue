<template>
    <div class="rect-point" :class="{'rect-point-active':selected}" v-on:click="clickHandler">
        <p class="rect-point-title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "rect-point",
        props:{
            selected:[Boolean],
            title:[String]
        },
        methods:{
            clickHandler:function (evt) {
                this.$emit('click',this);
            }
        }
    }
</script>


