
const config = {
  baseUrl: ''
}
if (process.env.NODE_ENV === 'development') {
  config.baseUrl = 'https://api.szjx.top'
} else {
  config.baseUrl = 'xxxxx'
}

export default config