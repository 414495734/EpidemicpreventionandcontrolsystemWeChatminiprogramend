// pages/student/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ieResult: '1',
    username:"",
    flag: 0,
    phone:0
  },
  goDemo05(){
    wx.navigateTo({
      url: '/pages/demo05/index',
    })
  },
  toDemo02(){
    if(this.data.ieResult == '0'){
      console.log(this.data.flag)
      wx.navigateTo({
        url: '/pages/demo02/index?flag='+this.data.flag,
      })
    }else{
      wx.showToast({
        icon:'none',
        title: '请先填写信息',
      })
    }
    
  },
  goToView(){
    let self = this
    wx.navigateTo({
      url: '/pages/demo06/index?username='+this.data.username+'&flag='+this.data.flag+'&phone='+this.data.phone
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getStorage({
        key:"userInfo",
        success: (res) => {
          console.log(res)
          if(res.data.pname == undefined){

          }else{
            this.setData({
              username:res.data.pname,
              flag:res.data.pcard,
              phone:res.data.pphone,
              ieResult:'0'
            })
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