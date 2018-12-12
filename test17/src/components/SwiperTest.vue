<template>
  <div class="root">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in imageList" :key="index">
        <img :src="item">
      </swiper-slide>
    </swiper>
    <div class="swiper-bg">
      <img src="../assets/icon_swipe_bg.png">
    </div>
  </div>
</template>

<script>
import "../style/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "SwiperTest",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        slidesPerView: 5,
        disableOnInteraction: true,
        centeredSlides: true,
        spaceBetween: 25
      },
      imageList: [
        require("../assets/icon_swipe_1.png"),
        require("../assets/icon_swipe_2.png"),
        require("../assets/icon_swipe_3.png"),
        require("../assets/icon_swipe_4.png"),
        require("../assets/icon_swipe_5.png")
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.root {
  width: 100%;
  height: 443px;
  position: relative;
}

.swiper-container {
  width: 1098px;
  height: 443px;
  background-color: #e1e1e1;
}

.swiper-slide {
  width: 192px;
  height: 400px;
}

.swiper-bg {
  height: 443px;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 573px;
}

.swiper-bg img {
  height: 443px;
  width: 221px;
  display: block;
}

.swiper-container .swiper-wrapper .swiper-slide {
  height: 400px;
  margin-top: 30px;
}

.swiper-container .swiper-wrapper .swiper-slide-active {
  height: 418px;
  margin-top: 10px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>