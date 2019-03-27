import Taro, { Component } from '@tarojs/taro'
import { Block, View, Image, Button } from '@tarojs/components'
import './single-load.scss'
/**
 * 加载单张图片测试页
 */

//引入图片预加载组件
import ImgLoader from '../../img-loader/img-loader'

//缩略图 80x50 3KB
const imgUrlThumbnail =
  'http://storage.360buyimg.com/mtd/home/lion1483683731203.jpg'
//原图 3200x2000 1.6MB
const imgUrlOriginal =
  'http://storage.360buyimg.com/mtd/home/lion1483624894660.jpg'

export default class SingleLoad extends Component {
  config = {
    navigationBarTitleText: '单张图片加载页面'
  }
  state = {
    msg: '',
    imgUrl: '',
    imgLoadList: []
  }

  componentWillMount() {
    //初始化图片预加载组件
    this.imgLoader = new ImgLoader(this)
  }

  loadImage = () => {
    //加载缩略图
    this.setState({
      msg: '大图正在拼命加载..',
      imgUrl: imgUrlThumbnail
    })

    //同时对原图进行预加载，加载成功后再替换
    this.imgLoader.load(imgUrlOriginal, (err, data) => {
      console.log('图片加载完成', err, data.src)
      this.setState({ msg: '大图加载完成~' })

      if (!err) this.setState({ imgUrl: data.src })
    })
  }

  render() {
    const { imgUrl, msg, imgLoadList } = this.state
    return (
      <Block>
        <View className='img_wrap'>{imgUrl && <Image src={imgUrl} />}</View>
        <Button onClick={this.loadImage}>Click To Load Image</Button>
        <View className='msg'>{msg}</View>
        {/*  引入图片预加载组件  */}
        <Block>
        {imgLoadList.map((item, index) => {
          return (
            <Image
              key={index}
              src={item}
              data-src={item}
              onLoad={this.imgLoader._imgOnLoad.bind(this.imgLoader)}
              onError={this.imgLoader._imgOnLoadError.bind(this.imgLoader)}
              style='width:0;height:0;opacity:0'
            />
          )
        })}
      </Block>
      </Block>
    )
  }
}
