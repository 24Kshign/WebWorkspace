new new Vue({
    el: "#root",
    data() {
        return {
            currentClickTitle: '主页',
            titleBarList: [{
                title: '关于我们',
                linkUrl: '#'
            }, {
                title: '帮助中心',
                linkUrl: '#'
            }, {
                title: '价目功能',
                linkUrl: '#'
            }, {
                title: '小番财务',
                linkUrl: '#'
            }, {
                title: '主页',
                linkUrl: '#'
            }]
        }
    },
    methods: {
        handleTitleBar: function (title) {
            this.currentClickTitle = title;
        }
    }
})