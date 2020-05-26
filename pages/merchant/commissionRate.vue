<template>
	<view class="page bg-grey">
		<view class="wrapper center-container">
			<view class="cells van-cell-group marT20">
				<text class="lineText c-black">抽成设置</text>
				 <view class="uni-title" style="margin-left: 20px;">抽成比例</view>
				<view>
					  <slider value="60" @change="sliderChange" show-value />
				</view>
			</view>
			<view class="tipsprompt">
				说明：设置徒弟每单抽成的百分比最高可抽%20，根据自己的情况进行设置<br>
				其他问题请联系客服：waynexzw
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

			};
		},
		methods: {
			sliderChange(e) {
			            console.log('value 发生变化：' + e.detail.value)
			        }
		}
	};
</script>
<style scoped>
	.van-col--12 {
		align-self: center;
	}

	.numthree h1 {
		font-size: 22px;
		font-weight: bold;
	}

	.center-container .content .top .avatar {
		width: 50px;
		height: 50px;
		margin-right: 10px;
		border-radius: 100%
	}

	.center-container .content .top .star-box {
		text-align: center;
		line-height: 18px;
		border-radius: 9px;
		background-color: #fff;
		color: #fe6a03;
		padding: 1px 2px
	}

	.center-container .content .cells .van-cell {
		align-items: center
	}
	
</style>
