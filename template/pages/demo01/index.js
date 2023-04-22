// pages/index/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    flag: "",
    phone: ""
  },
  // 双向绑定用户名input
  handleUserName(e){
    this.setData({
      userName:e.detail.value
    })
  },
  // 双向绑定身份证input
  handleIdentityCard(e){
    this.setData({
      flag:e.detail.value
    })
  },
  // 双向绑定手机号input
  handlePhone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  //身份证号不严格校验
  isCard(value) {
    var idCardReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|  30|31)\d{3}[0-9Xx]$/;

    if (!idCardReg.test(value)) {
      return false
    } else {
      return true
    }
  },
  //手机号校验
  isPhone(value) {
    if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
      return false
    } else {
      return true
    }
  },
  getName(e){
    // 用户名为空警告框
    if(this.data.userName == ""){
      wx.showToast({
        icon: 'none',
        title: "请输入用户名"
      })
      return;
    }
    // 身份证为空警告框
    if(this.data.flag == ""){
      wx.showToast({
        icon: 'none',
        title: "请输入身份证"
      })
      return;
    }
    // 手机号为空警告框
    if(this.data.phone == ""){
      wx.showToast({
        icon: 'none',
        title: "请输入手机号"
      })
      return;
    }
    // 身份证号校验
    let result = this.isCard(this.data.flag)
    if(result){
    }else{
      wx.showToast({
        icon: 'none',
        title: "请核对身份证号"
      })
      return;
    }

    // 手机号校验
    let phoneRes = this.isPhone(this.data.phone)
    if(phoneRes){
    }else{
      wx.showToast({
        icon: 'none',
        title: "请核对手机号"
      })
      return;
    }
    wx.navigateTo({
      url: '/pages/demo02/index?userName='+this.data.userName+'&flag='+this.data.flag
    })
    // 设置参数
    let params = {
      "username": this.data.userName,
      "falg": this.data.flag,
      "phone": this.data.phone 
    }
   
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