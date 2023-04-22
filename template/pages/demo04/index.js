// pages/demo04/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemInfo:[],
    falg:'false'
  },
  // son(text){ 
  //   let str = {}

  //   for(let i = 0;i<text.length;i++){
  //     let index = 0
  //     if(text[i] == '='){
  //       index = i+1
  //       for(let j = i;j<text.length;j++){
  //         let num = 0
  //         if(text[j] == ','){
  //           switch(num){
  //             case 0:
  //               str.pid=text.slice(index,j)
                
  //             case 1:
  //               str.pname=text.slice(index,j)
                
  //             case 2:
  //               str.psex=text.slice(index,j)
                
  //             case 3:
  //               str.pcard=text.slice(index,j)
  //               break
  //             case 4:
  //                str.plocation=text.slice(index,j)
  //                break
  //             case 5:
  //              str.active=text.slice(index,j)
  //              break
  //             case 6:
  //               str.touch=text.slice(index,j)
  //               break
  //             case 7:
  //               str.diagnosis=text.slice(index,j)
  //               break
  //             case 8:
  //               str.infectionSource=text.slice(index,j)
  //               break
  //             case 9:
  //               str.hid=text.slice(index,j)
  //               break
  //             case 10:
  //                 str.pphone=text.slice(index,j)
  //                 break
  //             case 11:
  //                   str.pstart_time=text.slice(index,j)
  //                  break              
  //           }
  //           num++
  //           break
  //         }
  //       }
  //     }
  //   }
  //   console.log(str)
  //   return str
  // },
  son(e){
    let number = e.currentTarget.dataset.number
    wx.redirectTo({
      url: '/pages/demo03/index?id='+number,
    })
  },
  Scanner(){
    if(this.data.itemInfo.length >= 20){
      wx.showToast({
        icon:'none',
        title: '填写数量以上限'
      })
    }else{
      let self = this
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        let userInfo = JSON.parse(res.result)
        app.userInfo.push(userInfo)
        console.log(app.userInfo)
        self.setData({
          itemInfo:app.userInfo,
          falg: 'true'
        })
      }
    })
    }
  },
  deleteInfo(e){
    let index = e.currentTarget.dataset.index
    app.userInfo.splice(index,1)
    this.setData({
      itemInfo:app.userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      itemInfo:app.userInfo
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