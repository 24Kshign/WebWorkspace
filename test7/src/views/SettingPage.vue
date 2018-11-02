<template>
<div class="wrapper">
  <div class="titleBar">
    <img src="../assets/icon_back.png" class="backImg" />
    <p class="forgetPwdTxt">设置</p>

    <TextAndArrow v-for="item in item_list" :key="item" :itemInfo="item" />
  </div>
</div>
</template>

<script>
import TextAndArrow from '../components/TextAndArrow'
export default {
  name: 'App',
  components: {
    TextAndArrow
  },
  data() {
    return {
      item_list: [{
          title: '自定义仓库位'
        },
        {
          title: '自定义操作'
        },
        {
          title: '修改密码'
        }
      ]
    }
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

.titleBar {
  width: 100%;
  height: 56px;
  position: relative;
  background: #6C94F7;
}

.backImg {
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  top: 13px;
  left: 15px;
}

.forgetPwdTxt {
  color: #fff;
  width: 100%;
  height: 56px;
  line-height: 56px;
  text-align: center;
}
</style>
