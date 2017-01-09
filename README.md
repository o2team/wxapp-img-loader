# wxapp-img-loader

适用于微信小程序的图片预加载组件，已应用于京东购物小程序版。使用步骤如下：

1、将 img-loader 目录拷贝到你的项目中

2、在页面的 WXML 文件中添加以下代码，将组件模板引入

```html
<import src="../../img-loader/img-loader.wxml"/>
<template is="img-loader" data="{{ imgLoadList }}"></template>
```

3、在页面的 JS 文件中引入组件脚本

```js
const ImgLoader = require('../../img-loader/img-loader.js')
```

4、实例化一个 ImgLoader 对象，将 this(当前 Page 对象) 传入，第二个参数可选，为默认的图片加载完成的回调方法

```js
this.imgLoader = new ImgLoader(this)
```

5、调用 ImgLoader 实例的 load 方法进行图片加载，第一个参数为图片链接，第二个参数可选，为该张图片加载完成时的回调方法

```js
this.imgLoader.load(imgUrlOriginal, (err, data) => {
    console.log('图片加载完成', err, data.src, data.width, data.height)
})
```

注：图片加载完成的回调方法的第一个参数为错误信息（加载成功则为 null），第二个参数为图片信息（Object 类型，包括 src、width 及 height）。

使用方法可参考 demo 目录的事例，包括加载单张图片、及加载多张图片的场景，运行效果如下图所示：

![单张图片预加载](http://storage.360buyimg.com/mtd/home/single-img-load1483686270312.gif)
![多张图片预加载](http://storage.360buyimg.com/mtd/home/multi-img-load1483686388552.gif)

- eof -
