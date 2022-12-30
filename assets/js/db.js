new Vue({
    el: "#changyongtujian",
    data: {
        items: [
            {
                img: '../assets/images/logos/google.png',
                title: 'google',
                url: 'http://www.google.com',
                desc: '全球最大的搜索引擎'
            },
            {
                img: '../assets/images/logos/youtube.png',
                title: 'Youtube',
                url: 'http://www.youtube.com',
                desc: '全球最大的视频网站'
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
