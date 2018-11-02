<template>
<div>
  <div class="row">
    <div class="contentDiv">
      <p class="leftTxt">{{itemInfo.title}}</p>
      <div class="inputDiv">
        <img src="../assets/icon_close.png" :class="['closeImg',isActive ? 'closeImgEnable' : 'closeImgDisable']" />

        <!-- <img src="../assets/icon_close.png" class="closeImg" /> -->

        <input type="text" :placeholder="itemInfo.placeholder" class="inputPwd" v-model="inputPwd"/>
      </div>
    </div>
    <span class="line" />
  </div>
</div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive: function() {
      return Boolean(this.inputPwd)
    }
  },
  data() {
    return {
      inputPwd: ''
    }
  }
}
</script>

<style scoped>
.row {
  height: 60px;
  background-color: #fff;
  border-bottom: #eee;
  display: flex;
  flex-direction: column;
}

.contentDiv {
  height: 59px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.line {
  height: 1px;
  background-color: #eeeeee;
  width: 100%;
  margin-left: 15px;
}

.leftTxt {
  height: 22px;
  width: 110px;
  font-size: 16px;
}

.inputDiv {
  width: 100%;
  height: 59px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.inputPwd {
  width: 100%;
  height: 50px;
  border: none;
  padding: 0 10px;
  font-size: 16px;
}

.closeImg {
  width: 20px;
  height: 20px;
  margin-right: 15px;
  margin-left: 10px;
}

.closeImgEnable {
  display: block;
}

.closeImgDisable {
  display: none;
}
</style>
