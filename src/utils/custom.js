import Vue from 'vue'

export default {

  intTitleNav() {
    uni.getSystemInfo({
      success: e => {
        // console.log('eeee',e)
        // #ifndef MP
        Vue.prototype.$statusBar = e.statusBarHeight
        if (e.platform === 'android') {
          Vue.prototype.$customBar = e.statusBarHeight + 50
        } else {
          Vue.prototype.$customBar = e.statusBarHeight + 45
        }
        // #endif
        // #ifdef MP-WEIXIN
        Vue.prototype.$statusBar = e.statusBarHeight
        let custom = wx.getMenuButtonBoundingClientRect()
        // console.log('custome', custom)
        Vue.prototype.$custom = custom
        Vue.prototype.$customBar = custom.bottom + custom.top - e.statusBarHeight
        // #endif
        // #ifdef MP-QQ
        Vue.prototype.$statusBar = e.statusBarHeight
        let customQQ = qq.getMenuButtonBoundingClientRect()
        Vue.prototype.$custom = customQQ
        Vue.prototype.$customBar = customQQ.bottom + customQQ.top - e.statusBarHeight
        if (e.model.indexOf('iPhone X') > -1) {
          Vue.prototype.$customBar = 82
        } else {
          Vue.prototype.$customBar = 60
        }
        // #endif
      }
    })
  }


}