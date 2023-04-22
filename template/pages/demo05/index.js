// pages/demo05/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    flag:"",
    phone:"",
    isHot:"false",
    details:"",
    results:false,
    index:null,
    picker:[]
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  setUserName(e){
    this.setData({
      userName:e.detail.value
    })
  },
  setFlag(e){
    this.setData({
      flag:e.detail.value
    })
  },
  setPhone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  setRadio(e){
    let self = this
    if(e.detail == "hot"){
      self.setData({
        isHot:"true"
      })
    }
    if(e.detail == "cold"){
      self.setData({
        isHot:"false"
      })
    }
  },
  setDetail(e){
    this.setData({
      details:e.detail.value
    })
  },
  setResult(e){
    let self = this
    if(e.detail.value == "resu"){
      self.setData({
        results:true
      })
    }
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
  sendReq(){
    if(this.data.userName == ""){
      wx.showToast({
        icon:'none',
        title: '请输入用户名',
      })
      return;
    }
    if(this.data.flag == ""){
      wx.showToast({
        icon:'none',
        title: '请输入身份证',
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
    if(this.data.details == ""){
      wx.showToast({
            icon: 'none',
            title: "请填写详细地址"
          })
    }
    if(this.data.results == ""){
      wx.showToast({
            icon: 'none',
            title: "请勾选承诺"
          })
    }
    let sex = ''
    if(this.data.flag[16]%2 == '0' || this.data.flag[16] == 'X' || this.data.flag[16] == 'x'){
      sex = '女'
    }else if(this.data.flag[16]%2 == '1'){
      sex = '男'
    }
    let params = {
      pname:this.data.userName,
      psex:sex,
      pcard:this.data.flag,
      plocation:this.data.details,
      touch:this.data.isHot,
      pphone:this.data.phone,
      tid:Number(this.data.index)
    }
    wx.request({
      url: 'https://www.wxpeng.com/WXinsertPupil',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method:'POST',
      data:params,
      success: (res)=>{
        wx.setStorage({
          key:"userInfo",
          data:params
        })
        if(res.data == "添加成功"){
          wx.redirectTo({
            url: '/pages/student/index?username='+params.pname+'&flag='+params.pcard+'&phone='+params.pphone,
          })
        }else{
          console.log(res)
          wx.showToast({
            icon:'none',
            title: "添加失败",
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    // 在渲染页面发送请求，获取需要的数据
    wx.request({
      url: 'https://www.wxpeng.com/selectTeamAll',
      success: (res) =>{
        let text = []
        for(var i=0;i<res.data.length;i++){
          text[i] = res.data[i].tname
        }
        self.setData({
          picker:text
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