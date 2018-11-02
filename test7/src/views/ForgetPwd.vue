<template>
<div class="wrapper">
  <div class="titleBar">
    <img src="../assets/icon_back.png" class="backImg" />
    <p class="forgetPwdTxt">忘记密码</p>

    <InputAndText v-for="item in item_list" :key="item" :itemInfo="item" />
  </div>
</div>
</template>

<script>
import InputAndText from '../components/InputAndText'
export default {
  name: 'App',
  components: {
    InputAndText
  },
  data() {
    return {
      item_list: [{
          title: '原密码',
          placeholder: '请输入原密码'
        },
        {
          title: '新密码',
          placeholder: '请输入新密码'
        },
        {
          title: '重复新密码',
          placeholder: '请重复输入原密码'
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
