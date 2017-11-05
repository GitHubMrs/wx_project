Page({
 
  /**
   * 页面的初始数据
   */
  data: {

    // 轮播图
    imgUrls: [
    '../../image/index/one.jpg',
    '../../image/index/two.jpg',
    '../../image/index/there.jpg', 
    '../../image/index/four.jpg'],
    

    resInfo: 
     [{
      image:'../../image/index/one.jpg',
    text:'拍卖中心'
    },{
        image:'../../image/index/two.jpg',
    text:'宝贝鉴赏'
    },{
        image:'../../image/index/there.jpg',
    text:'自由交易'
    },{
        image:'../../image/index/four.jpg',
    text:'闲聊茶馆'
    },
    
      {
        image: '../../image/index/one.jpg',
        text: '拍卖中心',
      }, {
        image: '../../image/index/two.jpg',
        text: '宝贝鉴赏'
      }, {
        image: '../../image/index/there.jpg',
        text: '自由交易'
      }, {
        image: '../../image/index/four.jpg',
        text: '闲聊茶馆'
      }
      ],
    

    marqueeInfo:[       
      '镇坪县玉石展览大会...',
      '镇坪县玉石展览大会...',
      '镇坪县玉石展览大会...',
      '镇坪县玉石展览大会...',
    ],
    showPicture:'../../image/index/two.jpg'
    
  },

  onLoad:function(){
    let that = this
    let windowWidth = 0
  wx.getSystemInfo({
    success: function(res) {
     windowWidth=res.windowWidth
     that.setData({
       leftNum: res.windowWidth
     })
    },
  })
    setInterval(function () {
      if (that.data.leftNum <= -windowWidth) {
        that.setData({
          leftNum: windowWidth
        })
      }
      that.data.leftNum -=2
      that.setData({
        leftNum: that.data.leftNum
      })
    }, 100)
  }

})