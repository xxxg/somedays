<script setup>
import { ref, onMounted, unref, onUnmounted } from 'vue'

import data from '../constants'

const listBanner = ref(data)
const props = defineProps({
  listBanner: {
    type: Array,
    default: () => data
  },
  interval: {
    type: Number,
    default: 3000
  },
  autoSwitch: {
    type: Boolean,
    default: true
  },
  setHeight: {
    type: Number,
    default: 400
  }
})

    let tiemr = ref(null);
    const switchIndex = ref(0);
    const rotationRef = ref();
    const indicatorRef = ref();
    const description = ref(null); //图片描述
    let height = unref(props.setHeight);

    //banner播放方式
    const addTimer = () => {
      if (props.autoSwitch === true) {
        //自动播放
        tiemr = setInterval(() => {
          switchBanner("right");
        }, props.interval);
      }
    };

    // 清除定时器
    const stopInterval = () => {
      clearInterval(tiemr);
    };

    //banner文字提示（非必须）
    const switchDescription = () => {
      if (props.listBanner) {
        props.listBanner.map((item, index) => {
          if (index === switchIndex.value) {
            description.value = item.description;
          }
        });
      }
    };

    //鼠标进入停止自动播放（非必须）
    const mouseenterEvent = () => {
      stopInterval();
      switchDescription();
    };

    //鼠标离开自动播放（非必须）
    const mouseleaveEvent = () => {
      addTimer();
    };

    //上一张和下一张图片透明度切换
    const changePicture = (num) => {
      for (let i of rotationRef.value) {
        i.style.opacity = "0";
      }
      toBannerBar(num);
      if (rotationRef.value.length !== 0) {
        rotationRef.value[num].style.opacity = "1";
      }
    };

    //底部小横条颜色切换
    const toBannerBar = (val) => {
      for (let i of indicatorRef.value) {
        i.style.backgroundColor = "rgba(221, 221, 221, 0.541)";
      }
      if (indicatorRef.value.length !== 0) {
        indicatorRef.value[val].style.backgroundColor = "#ffffff";
      }
    };

    //左右切换banner
    const switchBanner = (value) => {
      if (value === "right") {
        switchIndex.value++;
        if (switchIndex.value === props.listBanner.length) {
          switchIndex.value = 0;
        }
      } else {
        switchIndex.value--;
        if (switchIndex.value === -1) {
          switchIndex.value = props.listBanner.length - 1;
        }
      }
      changePicture(switchIndex.value);
      switchDescription();
    };

    //底部横条切换banner
    const swatchIndicator = (value) => {
      switchIndex.value = value;
      changePicture(switchIndex.value);
      switchDescription();
    };

    //banner链接跳转（非必须）
    const bannerLink = () => {
      if (props.listBanner) {
        props.listBanner.map((item, index) => {
          if (index === switchIndex.value && item.url !== "" && item.url !== null && item.url !== undefined) {
            window.location.href = item.url;
          }
        });
      }
    };

    onMounted(() => {
      addTimer();
    });
    onUnmounted(() => {
      stopInterval();
    });
</script>

<template>
  <div
    class="banner-container"
    :style="{ height: height + 'px' }"
    @mouseenter="mouseenterEvent"
    @mouseleave="mouseleaveEvent"
  >
    <ul class="fade-banner">
      <li
        class="rotation-banner"
        ref="rotationRef"
        :style="{ height: height + 'px' }"
        v-for="(item, index) in listBanner"
        :key="index"
      >
        <img class="banner-img" @click="bannerLink" :src="item.img" :title="description" />
      </li>
    </ul>

    <span class="left-button" @click="switchBanner('left')">
      <g-symbol>chevron_left</g-symbol >
    </span>
    <span class="right-button" @click="switchBanner('right')">
      <g-symbol>chevron_right</g-symbol >
    </span>

    <ul class="banner-indicator">
      <span
        v-for="index in listBanner.length"
        :key="index"
        class="barExternal"
        @click="swatchIndicator(index - 1)"
      >
        <li
          ref="indicatorRef"
          class="default-indicator"
          :class="{ 'active-indicator': index - 1 === 0 }"
        ></li>
      </span>
    </ul>
  </div>
</template>

<style lang="less" scoped src="./index.less">

</style>