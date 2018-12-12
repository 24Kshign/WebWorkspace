<template>
  <div class="root">
    <button @click="handleSwiperClick(1)">跳转到Swiper轮播页面</button>
    
    <button @click="handleSwiperClick(2)">跳转到Blur高斯模糊页面</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    handleSwiperClick: function(flag) {
      if (flag === 1) {
        this.$router.push("/SwiperTest");
      } else {
        this.$router.push("/BlurTest");
      }
    }
  }
};
</script>

<style scoped>
</style>
