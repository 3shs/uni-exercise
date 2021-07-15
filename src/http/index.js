import config from './../config/index'

let Fly = null
// #ifdef H5
Fly = require('flyio/dist/npm/fly')
// #endif
// #ifdef MP-WEIXIN || APP-PLUS
Fly = require('flyio/dist/npm/wx')
// #endif

let fly = new Fly()
fly.config.baseURL = config.baseUrl
// fly.config.IMG_URL = imgUrl    //图片显示url
// fly.config.IMG_LOAD = imgload  //图片上传url
// fly.config.timeout = 100000    //超时时间

fly.interceptors.request.use(request => {
  // const customer = uni.getStorageSync("customer")
  // if (!customer) {
  //   uni.redirectTo({
  //     url: '/pages/menu/home/home'
  //   })
  //   return
  // }
  // if (!request.headers['Content-Type']) {    //如果单独配置过Content-Type，则不再赋值
  //   request.headers['Content-Type'] = 'application/json'
  // }
  // request.headers['token'] = customer.token ? customer.token : ''   //请求头附加token数据
  // request.body = request.body
  return request
})

fly.interceptors.response.use((response, promise) => {
  if (response.data.code === 200) {
    return promise.resolve(response.data)
  }
})

export default fly
