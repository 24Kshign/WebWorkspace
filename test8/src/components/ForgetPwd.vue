<template>
<div class="wrapper">
  <TitleBar titleContent="忘记密码" isShowBackImg="true" />
  <InputAndText v-for="(item,index) in item_list" :key="index" :itemInfo="item" />

  <input class="confirmBtn" type="button" value="确定修改" @click="confirmModify" />
</div>
</template>

<script>
import InputAndText from '../components/widget/InputAndText'
import TitleBar from '../components/widget/TitleBar'
export default {
  components: {
    InputAndText,
    TitleBar
  },
  methods: {
    confirmModify: function() {
      
    }
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

<style scoped>

.confirmBtn {
  width: 90%;
  height: 50px;
  background-color: #6C94F7;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 18px;
  color: #fff;
  border-radius: 4px;
}
</style>
