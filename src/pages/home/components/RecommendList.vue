<template>
  <view class="card-container">
    <view class="recommend-card-item">
      <view class="recommend-img">
        <img mode="widthFix" src="http://image.yyixxx.com/89a8cb00619e62e2140e2015b289fa69.jpg">
        <view class="like-btn">
          <text class="icon icon-appreciatefill"></text>
        </view>
      </view>
      <view class="solid-info flex justify-between align-center">
        <view>
          <text class="icon icon-attentionfill text-gray font-size-sm"><text class="ml-sm">512</text>浏览</text>
          <text class="icon icon-appreciatefill text-gray font-size-sm pr-lg"><text class="ml-sm">480</text>赞</text>
        </view>
        <view class="text-gray font-size-sm">
          6个月以前
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.recommend-card-item {
    display: block;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 6rpx;
    margin: 30rpx;
  .recommend-img {
    position: relative;
    img {
      width: 100%;
    }
    .like-btn {
      width: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #f8f8f8;
      border-radius: 20px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
</style>