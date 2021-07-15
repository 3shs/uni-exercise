<template>
  <view class="home-container">
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
      1111
    </view>
    <view v-if="isShopping" :style="[{marginTop: $customBar+'px'}]">
      2222
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      isRecommend: true,
      isShopping: false,
      $customBar: this.$customBar,
    }
  },
  onLoad() {
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
  }
}
</script>
<style lang="scss" scoped>

</style>