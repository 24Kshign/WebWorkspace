<template>
  <div class="wrapper">
    <button @click="JumpSetting">首页</button>

    <input type="button" value="按钮" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {
    JumpSetting() {
      console.log(this.$router);
      this.$router.push('/HomePage')
    }
  }
}
</script>

<style scoped>

</style>
