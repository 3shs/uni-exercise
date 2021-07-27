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
    <view v-if="isRecommend" :style="[{paddingTop: $customBar+'px'}]">
      <Refresh
        @onRefresh="onRecommendRefresh">
        <RecommendList
          v-for="item in recommenList"
          :key="item.collocationId"
          :detail="item"
        />
      </Refresh>
    </view>
    <view v-if="isShopping" :style="[{paddingTop: $customBar+'px'}]">
      <Refresh
        @onRefresh="onShoppingRefresh">
        <ShoppingList 
          :data="shoppingList"
        />
      </Refresh>
      <uni-fab
        :pattern="pattern"
        horizontal="right"
        direction="vertical"
        :content="content"
        @trigger="clickSex"
        @fabClick="clearSex"></uni-fab>
    </view>
  </view>
</template>
<script>
import RecommendList from './components/RecommendList'
import ShoppingList from './components/ShoppingList'
import Refresh from '@/components/refresh'
import { uniFab } from '@dcloudio/uni-ui'
export default {
  components: {
    RecommendList,
    Refresh,
    ShoppingList,
    uniFab
  },
  data() {
    return {
      isRecommend: true,
      isShopping: false,
      $customBar: this.$customBar,
      page: 0,
      page1: 0,
      recommenList: [],
      shoppingList: [],
      pattern: {
        buttonColor: '#3c3e49'
        },
      content: [
        {
          iconPath: '/static/male.png',
          text: '男生',
          value: '1'
        }, {
          iconPath: '/static/female.png',
          text: '女生',
          value: '0'
      }],
      sex: ''
    }
  },
  onLoad() {
    this.getRecommendList()
    this.getShoppingList()
  },
  onReachBottom() {
    if (this.isRecommend) {
      this.getRecommendList()
    } else if (this.isShopping) {
      this.getShoppingList()
    }
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
    onShoppingRefresh() {
      this.page1 = 0
      this.getShoppingList('refresh')
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
    },
    getShoppingList(type) {
      const self = this
      self.$api.home.getShoppingList(this.page1++, this.sex).then(res => {
        if (res.responseCode === 200) {
          const list = res.data.content || []
          if (type === 'refresh') {
            this.shoppingList = list
          } else {
            this.shoppingList = this.shoppingList.concat(list)
          }
        }
      })
    },
    // 点击shopping的性别
    clickSex(val) {
      console.log('val', val)
      this.sex = val.item.value
      this.onShoppingRefresh()
      uni.pageScrollTo({
        duration: 300,
        scrollTop: 0
      })
    },
    // 点击悬浮按钮事件
    clearSex() {
      if(this.sex){
        this.sex = ''
        this.onShoppingRefresh()
        uni.pageScrollTo({
          duration: 300,
          scrollTop: 0
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>