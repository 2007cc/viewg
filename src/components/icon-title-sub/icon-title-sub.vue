<template>
    <div class="icon-title-sub">
        <Row>
            <Col span="12">
                <img class="img-icon" :src="imgUrl">
            </Col>
            <Col span="12">
                <p class="title">{{title}}</p>
                <p class="subTitle">{{subTitle}}</p>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "icon-title-sub",
        props:{
            imgUrl:String,
            title:[String, Number],
            subTitle:[String, Number],
        }
    }
</script>

