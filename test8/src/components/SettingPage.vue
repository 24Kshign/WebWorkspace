<template>
<div class="wrapper">
  <TitleBar titleContent="设置" isShowBackImg="true" />
  <TextAndArrow v-for="(item,index) in item_list" :key="index" :itemInfo="item" @jumpItem="handleJumpItem" />
</div>
</template>

<script>
import TextAndArrow from '../components/widget/TextAndArrow'
import TitleBar from '../components/widget/TitleBar'
export default {
  components: {
    TextAndArrow,
    TitleBar
  },
  methods: {
    handleJumpItem(title_en) {
      if (title_en === 'modify_pwd'){
        this.$router.push('ForgetPwd')
      } else if (title_en === 'custom_operation') {
        this.$router.push('TestVue')
      }
    }
  },
  data() {
    return {
      item_list: [{
          title: '自定义仓库位',
          title_en: 'custom_warehouse'
        },
        {
          title: '自定义操作',
          title_en: 'custom_operation'
        },
        {
          title: '修改密码',
          title_en: 'modify_pwd'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
