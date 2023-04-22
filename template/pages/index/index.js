//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrl:'',
    workUser:{}
  },
  toDemo03(){
    wx.navigateTo({
      url: '/pages/demo03/index',
    })
  },
  close(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    let self = this
    wx.getStorage({
      key:'cook',
      success:(res) => {
        console.log(res.data)
        self.setData({
          workUser:res.data
        })
      }
    })
   console.log(this.data.workUser)
  },
})
