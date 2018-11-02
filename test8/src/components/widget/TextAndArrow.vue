<template lang="html">
  <div>
    <div class="row">
      <div class="contentDiv" @click="jumpItem">
        <img src="../../assets/images/icon_arrow_right.png" class="rightArrow" />
        <p class="leftTxt">{{itemInfo.title}}</p>
      </div>
      <span class="line"/>

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
  methods:{
    jumpItem(){
      this.$emit('jumpItem',this.itemInfo.title_en)
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: column;
  height: 60px;
  background-color: #fff;
}

.contentDiv {
  height: 59px;
  display: flex;
  flex-direction: row-reverse;
  margin-left: 15px;
  align-items: center;
}

.leftTxt {
  height: 22px;
  width: 100%;
  font-size: 16px;
}

.rightArrow {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

.line {
  height: 1px;
  background-color: #eeeeee;
  width: 100%;
  margin-left: 15px;
}
</style>
