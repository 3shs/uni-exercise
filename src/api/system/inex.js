import fly from '@/http/index'

const system = {
  getList() {
    return fly.get('/getList')
  }
}
export default system