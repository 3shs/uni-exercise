<template>
  <view class="shopping-list flex wrap justify-around padding-sm">
    <view 
      class="item"
      v-for="item in data"
      :key="item.collocationId"
    >
      <image
        mode="widthFix"
        :lazy-load="true"
        :src="item.mainImage"
        />
      <view class="mt-xs text-center">
        <text class="icon icon-hotfill font-size-sm mr-sm"></text>
        <text class="text-black font-size-sm">{{item.appreciateCount}}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  width: 32%;
  margin-bottom: 20rpx;
  image {
    width: 100%;
  }
}

</style>