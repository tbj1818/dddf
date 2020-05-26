<template>
	<view class="page bg-grey">
		<view class="wrapper center-container">
			<view class="content">
				<view class="cells van-cell-group">
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>我的账号</span></view>
						<view class="van-cell__value"><span>15332426604</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>QQ号</span></view>
						<view class="van-cell__value"><span>897867</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>微信号</span></view>
						<view class="van-cell__value"><span>897867</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>我的邀请码</span></view>
						<view class="van-cell__value"><span>DDDF</span></view>
					</view>
					<text class="lineText c-blue">修改登录密码</text>
				</view>
				<view class="cells van-cell-group marT20">
					<text class="lineText c-black">收款信息</text>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>支付宝账号</span></view>
						<view class="van-cell__value"><span>15332426604</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>真实姓名</span></view>
						<view class="van-cell__value"><span>低调的风</span></view>
					</view>
					<text class="lineText c-blue">修改支付信息</text>
				</view>
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

