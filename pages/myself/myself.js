// pages/myself/myself.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    
    userListInfo: [{
      icon: '/images/iconfont-card.png',
      text: '我的代金券',
      unreadNum: 3,
      path:'./coupons/index'
    }, {
      icon: '/images/iconfont-icontuan.png',
      text: '我的拼团',
      unreadNum: 1
    }, {
      icon: '/images/iconfont-shouhuodizhi.png',
      text: '收货地址管理',
      unreadNum: 0
    }, {
      icon: '/images/iconfont-kefu.png',
      text: '联系客服',
      unreadNum: 0

    }, {
      icon: '/images/iconfont-help.png',
      text: '常见问题',
      unreadNum: 0

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title:"个人中心"
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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

  },


  

  gotoPageByIndex: function (e) {
    var iid = e.currentTarget.dataset.iid

    var uli = this.data.userListInfo
    uli[iid].unreadNum = 0
    this.setData({
      userListInfo: uli,
    })

    wx.navigateTo({
      url: uli[iid]['path'],
    })
  },

  gotoOrderList: function(e) {
    wx.navigateTo({
      url: "./order-list/index?type=" + e.currentTarget.dataset.type
    })
  },
})