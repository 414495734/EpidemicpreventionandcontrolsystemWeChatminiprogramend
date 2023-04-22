// pages/login/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    password:'',
    text:'',
    flag:'true'
  },
  setText(e){
    this.setData({
      text:e.detail.value
    })
  },
  returnTap(){
    this.setData({
      flag:'true'
    })
    console.log(this.data.flag == 'false')
  },
  sendReq(){
    let params = {
      dphone: this.data.text
    }
    console.log(params)
    wx.request({
      url: 'https://www.wxpeng.com/wxDoctorPhoneSelect',
      data:params,
      success: (res) => {
        console.log(res)
        if(res.data == '没有此人'){
          wx.showToast({
            icon:"none",
            title: '该手机号没有权限',
          })
        }else{
          app.workUser = res.data
          wx.setStorage({
            data:app.workUser,
            key:'cook'
          })
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }
      },
      fail:(res) => {
        wx.showToast({
          icon:'none',
          title: '数据错误，请重新打开小程序',
        })
      }
    })

  },
  ToWork(){
    let self = this
    wx.getStorage({
      key:'cook',
      success:(res)=>{
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      fail:(res) =>{
        this.setData({
          flag:'false'
        })
      }
    })
    
        // wx.navigateTo({
        //   url: '/pages/index/index',
        // })
    
  },
  ToStudent(){
    wx.navigateTo({
      url: '/pages/student/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */


    

  onLoad: function (options) {
    
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