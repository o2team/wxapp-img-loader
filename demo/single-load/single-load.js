/**
 * 加载单张图片测试页
 */

//引入图片预加载组件
const ImgLoader = require('../../img-loader/img-loader.js')

//缩略图 80x50 3KB
const imgUrlThumbnail = 'http://storage.360buyimg.com/mtd/home/lion1483683731203.jpg'
//原图 3200x2000 1.6MB
const imgUrlOriginal = 'http://storage.360buyimg.com/mtd/home/lion1483624894660.jpg'

Page({
    data: {
        msg: '',
        imgUrl: ''
    },
    onLoad() {
        //初始化图片预加载组件
        this.imgLoader = new ImgLoader(this)
    },
    loadImage() {
        //加载缩略图
        this.setData({
            msg: '大图正在拼命加载..',
            imgUrl: imgUrlThumbnail
        })

        //同时对原图进行预加载，加载成功后再替换
        this.imgLoader.load(imgUrlOriginal, (err, data) => {
            console.log('图片加载完成', err, data.src)
            this.setData({ msg: '大图加载完成~' })

            if (!err)
                this.setData({ imgUrl: data.src })
        })
    }
})
