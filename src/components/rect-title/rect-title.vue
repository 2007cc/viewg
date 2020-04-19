<template>
    <div class="label-content rect-title-boder" >
        <span :style="{'font-size':size+'px'}">{{title}}</span>
    </div>
</template>
<script>
    export default{
        name:'rect-title',
        props:{
            title:String,
            size:{
                type:String,
                default:22
            }
        }
    }
</script>

