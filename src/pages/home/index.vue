<template>
  <view class="container">
    <view class="bg-white fixed nav text-center" style="font-size: 32rpx;" :style="[{height:$customBar + 'px'}]">
      <view class="cu-item" :class="isRecommend?'cur':''" @tap="showRecommend"
            :style="{height:$customBar + 'px',lineHeight:($customBar+20)+'px'}">
        推荐
      </view>
      <view class="cu-item" :class="isShopping?'cur':''" @tap="showShopping"
            :style="{height:$customBar + 'px',lineHeight:($customBar+20)+'px'}">
        逛街
      </view>
    </view>
    <view v-if="isRecommend" :style="[{marginTop: $customBar+'px'}]">
      <Refresh
        @onRefresh="onRecommendRefresh">
        <RecommendList
          v-for="item in recommenList"
          :key="item.collocationId"
          :detail="item"
        />
      </Refresh>
    </view>
    <view v-if="isShopping" :style="[{marginTop: $customBar+'px'}]">
      2222
    </view>
  </view>
</template>
<script>
import RecommendList from './components/RecommendList'
import Refresh from '@/components/refresh'
export default {
  components: {
    RecommendList,
    Refresh
  },
  data() {
    return {
      isRecommend: true,
      isShopping: false,
      $customBar: this.$customBar,
      page: 0,
      recommenList: []
    }
  },
  onLoad() {
    this.getRecommendList()
  },
  methods: {
    showRecommend() {
      this.isRecommend = true
      this.isShopping = false
    },
    showShopping() {
      this.isRecommend = false
      this.isShopping = true
    },
    onRecommendRefresh() {
      this.page = 0
      this.getRecommendList('refresh')
    },
    getRecommendList(type) {
      const self = this
      self.$api.home.getRecommendList(this.page++).then(res => {
        if (res.responseCode === 200) {
          const list = res.data.content || []
          if (type === 'refresh') {
            this.recommenList = list
          } else {
            this.recommenList = this.recommenList.concat(list)
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>