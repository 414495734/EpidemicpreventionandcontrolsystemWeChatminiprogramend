// pages/demo06/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    flag:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username:options.username,
      flag:options.flag,
      phone:options.phone,
      imgUrl:''
    })
    let self = this
    wx.request({
      url: 'https://www.wxpeng.com/returnImg?pname='+this.data.username+'&pcard='+this.data.flag+'&pphone='+this.data.phone,
      success: (res) => {
        self.setData({
          imgUrl:res.data
        })
      }
    })
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