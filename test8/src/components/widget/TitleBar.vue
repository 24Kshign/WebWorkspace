<template>
    <div class="titlebar">
        <img v-if="isShowBackImg" src="../../assets/images/icon_back.png" class="backImg" @click="backClick" />
        <p class="title" :class="finalIsShowBackImg">{{titleContent}}</p>
        <p v-if=" rightContent!=='' " class="right" @click="rightClick">{{rightContent}}</p>
    </div>
</template>

<script>
export default {
    props: ['titleContent','isShowBackImg','rightContent'],
    methods: {
        backClick: function() {
            this.$router.go(-1)
        },
        rightClick: function() {
            this.$emit('handleClick')
        }
    },
    computed: {
        finalIsShowBackImg: function() {
            if ((this.rightContent !== '' || this.rightContent !== undefined) && this.isShowBackImg) {
                return 'backImgAndRightVisibleTitle'
            } else if ((this.rightContent !== '' || this.rightContent !== undefined)){
                return 'rightVisibleTitle'
            } else {
                return 'backImgVisibleTitle'
            }
        }
    }
}
</script>

<style scoped>
.titlebar {
    height: 50px;
    background-color: #6C94F7;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title {
    color: #ffffff;
    font-size: 18px;
    display: block;
    margin: 0 auto;
}

.right {
    width: 50px;
    font-size: 16px;
    color: #ffffff;
}

.backImgVisibleTitle {
    padding-right: 25px;
}

.backImgAndRightVisibleTitle {
    padding-left: 25px;
}

.rightVisibleTitle {
    padding-left: 50px;
}

.backImg{
    width: 25px;
    height: 25px;
}
</style>