import fly from '@/http/index'

const home = {
  getRecommendList(page) {
    return fly.get('/mi/collocation/load_recommend', {page})
  },
  getShoppingList(page) {
    return fly.get('/mi/collocation/list', {page})
  }
}
export default home