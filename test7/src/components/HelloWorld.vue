<template>
<div class="hello">
  <button @click="JumpSetting">设置</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  methods: {
    JumpSetting: function() {
      console.log(this.$router)
      this.$router.push('/SettingPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
