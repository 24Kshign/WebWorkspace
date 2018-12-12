<template>
  <div class="root">
    <ul class="functionNav">
      <li v-for="(item, index) in functionList" :key="index">
        <ul class="functionSubNav">
          <li
            v-for="(subItem, index) in item"
            :class="[(currentFlag === subItem.flag) ? 'functionSubNav-image-opacity' :'functionSubNav-image']"
            :key="index"
            @mouseover="mouseenter(subItem.flag)"
            @mouseout="mouseleave"
          >
            <a href="#">
              <img :src="subItem.imageUrl">
            </a>
            <i class="mask"></i>
            <p>{{subItem.desc}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlurTest",
  data() {
    return {
      currentFlag: 0,
      functionList: [
        [
          {
            desc: "录入流水",
            flag: 1,
            imageUrl: require("../assets/icon_function_1.png")
          },
          {
            desc: "阿米巴损益表",
            flag: 2,
            imageUrl: require("../assets/icon_function_2.png")
          },
          {
            desc: "录入凭证",
            flag: 3,
            imageUrl: require("../assets/icon_function_3.png")
          }
        ],
        [
          {
            desc: "项目管理",
            flag: 4,
            imageUrl: require("../assets/icon_function_4.png")
          },
          {
            desc: "老板表",
            flag: 5,
            imageUrl: require("../assets/icon_function_5.png")
          },
          {
            desc: "。。。更多",
            flag: 6,
            imageUrl: require("../assets/icon_function_6.png")
          }
        ]
      ]
    };
  },
  methods: {
    mouseenter: function(flag) {
      this.currentFlag = flag;
    },
    mouseleave: function() {
      this.currentFlag = 0;
    }
  }
};
</script>

<style scoped>
.root {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.functionNav {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}

.functionNav > li {
  margin-top: 24px;
}

.functionSubNav {
  display: flex;
  flex-direction: row;
}

.functionSubNav-image-opacity,
.functionSubNav-image {
  float: left;
  width: 350px;
  display: block;
  position: relative;
  height: 222px;
  border-radius: 12px;
}

.functionSubNav-image-opacity a,
.functionSubNav-image a {
  width: 350px;
  display: block;
  position: relative;
  height: 222px;
}

.functionSubNav-image-opacity img,
.functionSubNav-image img {
  width: 350px;
  height: 222px;
  border-radius: 12px;
}

.functionSubNav-image-opacity p,
.functionSubNav-image p {
  position: absolute;
  top: 95px;
  color: #fff;
  left: 130px;
}

.functionSubNav-image-opacity img {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}

.functionSubNav-image .mask,
.functionSubNav-image-opacity .mask {
  display: block;
  width: 350px;
  position: absolute;
  height: 222px;
  top: 0;
  left: 0;
  background-color: #000;
  border-radius: 12px;
}

.functionSubNav-image-opacity p {
  opacity: 1;
}

.functionSubNav-image p {
  opacity: 0;
}

.functionSubNav-image .mask {
  opacity: 0;
}

.functionSubNav-image-opacity .mask {
  opacity: 0.3;
}

.functionSubNav li:first-child {
  margin-right: 16px;
}

.functionSubNav li:last-child {
  margin-left: 16px;
}

.functionSubNav li:nth-child(2) {
  margin-right: 8px;
  margin-left: 8px;
}
</style>
