
const config = {
  baseUrl: ''
}
if (process.env.NODE_ENV === 'development') {
  config.baseUrl = 'https://www.fastmock.site/mock/6ca7319e62f09499ad54255d79380a32/uni'
} else {
  config.baseUrl = 'xxxxx'
}

export default config