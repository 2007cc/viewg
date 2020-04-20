<template>
    <div>
        <Row :gutter="10">
            <Col span="8" v-for="item in iconArr">
                <icon-title-sub :img-url="item.imgUrl"
                            :title="item.mainTitle"
                            :sub-title="item.subTitle"/>
            </Col>
        </Row>
    </div>
</template>

<script>

    export default {
        components: {

        },
        name: "icon-group",
        props:{
            iconArr:{
                type:Array,
                default:[]
            },
            col:{
                type:Number,
                default:8
            }
        },
        data(){
            return {

            }
        },
        mounted(){
        },
        methods:{

        }
    }
</script>


