<template>
    <div class="wrapper">
        <TitleBar titleContent="库列表" isShowBackImg="true" />
        <div class="contentDiv" v-for="(item, index) in libraryList" :key="index">
            <p class="content" >{{item.title}}</p>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
import TitleBar from '../components/widget/TitleBar'
export default {
    components: {
        TitleBar
    },
    methods: {

    },
    data() {
        return {
            libraryList: [
                {
                    title: '杭州库'
                },
                {
                    title: '北京库'
                },
                {
                    title: '上海库'
                },
                {
                    title: '南京库'
                },
                {
                    title: '深圳库'
                },
                {
                    title: '南昌库'
                },
                {
                    title: '广州库'
                },
                {
                    title: '长沙库'
                },
                {
                    title: '合肥库'
                },
                {
                    title: '重庆库'
                },
                {
                    title: '海南库'
                },
                {
                    title: '天津库'
                },
                {
                    title: '成都库'
                },
                {
                    title: '沈阳库'
                },
            ]
        }
    }
}
</script>

<style scoped>
.contentDiv {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content {
    flex: 1;
    line-height: 59px;
    margin-left: 10px;
}

.line {
    margin-left: 10px;
    background-color: #e7e7e7;
    height: 1px;
}
</style>
