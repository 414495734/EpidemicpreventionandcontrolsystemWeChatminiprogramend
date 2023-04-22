// pages/demo01/index.js
var util = require('../../utils/util')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "今天",
    userInfo: [],
    showIs: 'false'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toStudent(){
    wx.navigateTo({
      url: '/pages/student/index',
    })
  },
  onLoad: function (options) {
    let self = this
    wx.request({
      
      url: 'https://www.wxpeng.com/WeiXinselectNucleicacidCheckPage?pCardLike='+options.flag,
      success:function(res){
        let s =res
        console.log('核算结果请求：')
        console.log(res)
        // console.log(res.data[0].result)
        for(var i = 0;i<=res.data.length;i++){
          res.data[i].samplingDate = app.formatDate(res.data[i].samplingDate)
          res.data[i].checkDate = app.formatDate(res.data[i].checkDate)
          // console.log(res.data[i].result)
          if(s.data[i].result == '未检测'){
            res.data.splice(i,1)
            self.setData({
              showIs:'true'
            })
          }else{
            self.setData({
              userInfo: res.data,
              showIs: 'false'
            })
          }
          
          
          
        }
        
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