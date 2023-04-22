// pages/demo03/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:"0",
    flag:"true",
    number:[],
    testInfo:[],
    User:{}
  },
  setInput(e){
    this.setData({
      num:e.detail.value
    })
    if(this.data.num){
      this.setData({
        flag:"true"
      })
    }
  },
  toDemo04(e){
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/demo04/index?id='+index,
    })
  },
  Scanner(){
    let self = this
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        app.testInfo.push(res.result)
        let s = app.testInfo
        self.setData({
          testInfo: s
        })
        if(self.data.testInfo.length != 0){
          self.setData({
            flag:"true"
          })
        }
      }
    })
  },
  sendReq(e){
    let self = this
    let params = {
      did:self.data.User.did,
      hid:self.data.User.hid,
      code:e.currentTarget.dataset.item,
      listPuil:app.userInfo
    }
    console.log('============')
    console.log(params)
    console.log('============')
    wx.request({
      url: 'https://www.wxpeng.com/WxaddTube',
      data:params,
      method:'GET',
      success: (res) =>{
        console.log(111111111)
        console.log(res)
        wx.showToast({
          title: res,
        })
        self.setData({
          testInfo:[]
        })
        wx.showToast({
          icon:'none',
          title: '提交成功',
        })
        app.testInfo = []
        app.userInfo = []
      },
      fail: (res) => {
        wx.showToast({
          icon:'none',
          title: '信息错误，请关闭小程序重试',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let self = this
    wx.getStorage({
      key:'cook',
      success: (res) => {
        console.log(res)
        console.log(res.data)
        self.setData({
          User: res.data
        })
        console.log(self.User)
      }
    })
    console.log(options.id)
    this.setData({
      number:options.id
    })
    this.setData({
      testInfo: app.testInfo
    })
    console.log('=========')
    console.log(this.data.testInfo)
    console.log('========')
    if(this.data.testInfo.length == 0){
      console.log(1)
      this.setData({
        flag:'false'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})