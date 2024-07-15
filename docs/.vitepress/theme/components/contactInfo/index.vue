<!-- .vitepress/theme/components/ContactInfo.vue -->
<template>
    <section class="contact">
            <div class="content">
                <!--
                <h2 >{{ data.title }} </h2>
                -->
                <p>{{ data.text }}</p>
            </div>
            <div class="container">
                <div class="contactInfo">
                    <div class="box box1">
                        <div class="icon">
                            <g-symbol align-text family="rounded" fill weight="400" grade="0" size="46">location_on</g-symbol>
                        </div>
                        <div class="text">
                            <h3>{{ data.title_add }}</h3>
                            <p>{{ data.address }}</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <g-symbol align-text family="rounded" fill weight="400" grade="0" size="46">call</g-symbol>
                        </div>
                        <div class="text">
                            <h3>{{ data.title_tel }}</h3>
                            <p>{{ data.phoneNumber }}</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon">
                            <i class="fa-solid fa-envelope"></i>
                            <g-symbol align-text family="rounded" fill weight="400" grade="0" size="46">mail</g-symbol>
                        </div>
                        <div class="text">
                            <h3>{{ data.title_mail }}</h3>
                            <p>{{ data.mail }}</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script setup>
const props = defineProps({
  data: Object, // 定义 prop 的类型
})
</script>

<style scoped>
.content h2{
    text-align: center;
    font-size: 2.5rem;
}
.box{
  align-items: center; /* 垂直居中 */ 
}
.box1{
  display: inline-flex;
}
.icon{
    width:4rem;
    height:4rem;
    font-size:3rem;
    color:#0068b7;
    display: inline-block;
    border-radius: 50%; 
    /* background: black; */
    text-align: center;
    justify-content: center; /* 水平居中 */
    /* align-items: center; 垂直居中 */
}
.box .text{
    margin-left:1rem;
    display: inline-block;
}
</style>
