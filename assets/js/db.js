new Vue({
    el: "#changyongtujian",
    data: {
        items: [
            {
                img: '../assets/images/logos/google.png',
                title: 'google',
                url: 'https://www.google.com',
                desc: '全球最大的搜索引擎'
            },
            {
                img: '../assets/images/logos/youtube.png',
                title: 'Youtube',
                url: 'https://www.youtube.com',
                desc: '全球最大的视频网站'
            },
            {
                img: '../assets/images/logos/producthunt.png',
                title: 'Producthunt',
                url: 'https://www.producthunt.com/',
                desc: '发现新鲜有趣的产品'
            }
        ]
    },
    methods:{
        navto(url){
            window.open(url,'_blank')
        }
    }
});
new Vue({
    el: "#社区资讯",
    data:{
        
    }
})
