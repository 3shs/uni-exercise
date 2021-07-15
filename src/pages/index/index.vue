<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		这是index
		<view>
			<text class="title">{{title}}</text>
      <button @click="handleClick">提交</button>
		</view>
	</view>
</template>
<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {
  },
  methods: {
    handleClick() {
      const self = this
      self.$api.system.getList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
