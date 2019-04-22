import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'demo/single-load/single-load',
      'demo/multi-load/multi-load'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '图片预加载测试页面',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#333',
      backgroundColor: '#ececec',
      list: [
        {
          pagePath: 'demo/single-load/single-load',
          text: '单张',
          iconPath: 'assets/icon-square.png',
          selectedIconPath: 'assets/icon-square.png'
        },
        {
          pagePath: 'demo/multi-load/multi-load',
          text: '多张',
          iconPath: 'assets/icon-grid.png',
          selectedIconPath: 'assets/icon-grid.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
