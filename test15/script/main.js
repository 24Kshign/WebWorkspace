new Vue({
    el: "#root",
    data() {
        return {
            currentClickTitle: '主页',
            currentFlag: 0,
            carouselList: [{
                    imageUrl: 'images/icon_carousel_1.png',
                    key: "0"
                },
                {
                    imageUrl: 'images/icon_carousel_1.png',
                    key: "1"
                },
                {
                    imageUrl: 'images/icon_carousel_1.png',
                    key: "2"
                }
            ],
            officeList: [{
                    imageUrl: 'images/office_chart.png',
                    title: '图表化显示',
                    desc: '报表数据图表化，直观！<br/>饼图、折线图、饼状图，多期多部门<br/>数据纵横对比。'
                },
                {
                    imageUrl: 'images/office_update.png',
                    title: '自动升级',
                    desc: '无需手动更新应用，方便！<br/>程序员后台更新，登录即可使用最新系统，<br/>无需手动下载安装。'
                },
                {
                    imageUrl: 'images/office_terminal.png',
                    title: '多端操作',
                    desc: '支持手机电脑平板，高效！<br/>移动化办公，数据随时可查，发生即可记录，<br/>提升记账效率。'
                }
            ],
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
            }],
            functionList: [
                [{
                        desc: '录入流水',
                        flag: 1,
                        imageUrl: 'images/icon_function_1.png'
                    },
                    {
                        desc: '阿米巴损益表',
                        flag: 2,
                        imageUrl: 'images/icon_function_2.png'
                    },
                    {
                        desc: '录入凭证',
                        flag: 3,
                        imageUrl: 'images/icon_function_3.png'
                    }
                ],
                [{
                        desc: '项目管理',
                        flag: 4,
                        imageUrl: 'images/icon_function_4.png'
                    },
                    {
                        desc: '老板表',
                        flag: 5,
                        imageUrl: 'images/icon_function_5.png'
                    },
                    {
                        desc: '。。。更多',
                        flag: 6,
                        imageUrl: 'images/icon_function_6.png'
                    }
                ]
            ]
        }
    },
    methods: {
        handleTitleBar: function (title) {
            this.currentClickTitle = title;
        },
        mouseenter: function (flag) {
            this.currentFlag = flag;
        },
        mouseleave: function () {
            this.currentFlag = 0;
        }
    }
})