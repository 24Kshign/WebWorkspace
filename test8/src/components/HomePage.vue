<template>
<div class="wrapper">
    <TitleBar titleContent="首页" rightContent="切换库" @handleClick="handleRightClick" />
    <p class="description">nuenue，欢迎回来</p>
    <ul class="table" v-for="(item, index) in tableList" :key="index">
        <li class="border_li" @click="handleTableClick(item[0])"><img :src="item[0].icon">{{item[0].name}}</li>
        <li v-if="item[1] !== undefined " class="border_li" @click="handleTableClick(item[1])"><img :src="item[1].icon">{{item[1].name}}</li>
         <li v-else class="border_li"></li>
        <li v-if="item[2] !== undefined " @click="handleTableClick(item[2])"><img :src="item[2].icon">{{item[2].name}}</li>
        <li v-else></li>
    </ul>
</div>
</template>

<script>
import TitleBar from '../components/widget/TitleBar'
export default {
    components: {
        TitleBar
    },
    methods: {
        handleTableClick(tableItem) {
            this.$router.push(tableItem.path)
        },
        handleRightClick() {
            this.$router.push('ChangeLibrary')
        }
    },
    data() {
        return {
            tab_icon: require('../assets/images/home_icon_ruku.png'),
            tableList:[[
                {
                    name: '入库',
                    icon: require('../assets/images/home_icon_ruku.png'),
                    path: ''
                },
                {
                    name: '车辆',
                    icon: require('../assets/images/home_icon_cheliang.png'),
                    path: ''
                },
                {
                    name: '盘库',
                    icon: require('../assets/images/home_icon_panku.png'),
                    path: ''
                }
            ],
            [
                {
                    name: '条码',
                    icon: require('../assets/images/home_icon_tiaoma.png'),
                    path: ''
                },
                {
                    name: '设置',
                    icon: require('../assets/images/home_icon_shezhi.png'),
                    path: 'SettingPage'
                }
            ]]
        }
    }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    background-color: #F3F4F5;
}

.description{
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    color: #626262;
}

.table {
    background-color: #ffffff;
    height: 105px;
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.table li {
    flex: 1;
    list-style-type: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: #e7e7e7;
    border-top-width: 1px;
}

.border_li {
    border-right-width: 1px;
}

.table img {
    width: 27px;
    height: 27px;
    margin-bottom: 4px;
}
</style>
