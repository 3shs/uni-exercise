import fly from '@/http/index'

const home = {
  getRecommendList(page) {
    return fly.get('/mi/collocation/load_recommend', {page})
  }
}
export default home