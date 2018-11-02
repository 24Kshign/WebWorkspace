<template>
<div class="wrapper">
    <TitleBar titleContent="测试" isShowBackImg="true" />
    <span>价格：{{money | formatMoney}}</span>
</div>

</template>

<script>
import TitleBar from '../components/widget/TitleBar'
export default {
    components: {
        TitleBar
    },
    data () {
        return {
            money: 9
        }
    },
    filters : {
        formatMoney: function (value) {
            return '¥ ' + value.toFixed(2)
        }
    },
    methods: {
    }
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.titleBar {
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #6C94F7;
}

.backImg {
  width: 30px;
  height: 30px;
  margin-left: 15px;
}

.forgetPwdTxt {
  color: #fff;
  font-size: 18px;
  align-content: center;
  flex: 1;
}
</style>
