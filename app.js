//app.js
const WXAPI = require('apifm-wxapi')
const AUTH = require('utils/auth')
App({
  onLaunch: function () {
    WXAPI.init('qwertyzqy')
    // 获取用户信息

    
    
    
    
    
    AUTH.checkHasLogined().then(isLogined => {
      if (!isLogined) {
        AUTH.login()
      }
    })
  },
  globalData: {
    userInfo: null
  }
})