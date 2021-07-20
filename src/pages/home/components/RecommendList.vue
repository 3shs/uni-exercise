<template>
  <view class="card-container">
    <view class="recommend-card-item">
      <view class="recommend-img">
        <img mode="widthFix" :src="detail.mainImage">
        <view class="like-btn">
          <text class="icon icon-appreciatefill" :class="detail.appreciate ? 'text-red' : 'text-gray'"></text>
        </view>
      </view>
      <view class="solid-info flex justify-between align-center pl-lg pr-lg pt-lg">
        <view>
          <text class="icon icon-attentionfill text-gray font-size-sm">
            <text class="ml-sm">{{detail.viewCount}}</text>浏览</text>
          <text class="icon icon-appreciatefill text-gray font-size-sm pl-lg">
            <text class="ml-sm">{{detail.appreciateCount}}</text>赞</text>
        </view>
        <view class="text-gray font-size-sm">
          {{detail.formatCreatedDate}}
        </view>
      </view>
      <view class="intro padding-sm">
        <view class="intro-item">
          <view
            v-for="item in detail.tags"
            :key="item.tagId"
            class="tag font-size-sm line-gray radius padding-sm">{{item.name}}</view>
        </view>
        <view class="info-item pt-lg">
          <text class="text-grey">
            {{detail.description}}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    detail: {
      type: Object,
      default: null
    }
  },
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
  .tag {
    margin-left: 0!important;
    margin-right: 5px;
    margin-top: 5px;
  }
}
</style>