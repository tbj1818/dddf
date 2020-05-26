<template>
	<view class="page">
		<view class="wrapper center-container">

			<view class="content">
				<view class="top">
					<view class="flex flex-align-center"><img class="avatar" src="https://upload.jianshu.io/users/upload_avatars/20613230/97571392-dcdf-4284-83b6-be77a1e3bd88.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
						 lazy="loaded">
						<view class="white padding-left">
							<navigator url="/pages/index/userCenter" open-type="navigate">
							<p class="font-15">17389160857</p>
							<p class="padding-top padding-bottom font-12">推荐码：4A0YCQ7Z</p>
							<view class="flex star-box flex-center"><i class="van-icon van-icon-star" style="color: rgb(254, 106, 3); font-size: 12px;">
									<!----></i>
								<p class="font-12">放单者</p>
							</view>
							</navigator>
						</view>
					</view>
				</view>
				<view class="flex white blackbg">
					<section class="van-col van-col--12 ">
						<p style=" font-size: 14px;">￥0</p>
						<p class="padding-top padding-bottom ">我的余额</p>
					</section>
					<section class="van-col van-col--12 rightdq">
						<button class="van-button van-button--default van-button--mini van-button--round"><span class="van-button__text">明细</span></button>
						<button class="van-button van-button--danger van-button--normal van-button--mini van-button--round"><span class="van-button__text">提现</span></button>
					</section>
				</view>
				<view class="flex flex-wrap flex-align-center flex-justify-around numthree padding grid">
					<view class="flex flex-col flex-align-center pointer" style="width: 30%; margin-top: 15px;">
						<h1>100</h1>
						<p class="font-13 padding">订单数</p>
					</view>
					<view class="flex flex-col flex-align-center pointer" style="width: 30%; margin-top: 15px;">
						<h1>98</h1>
						<p class="font-13 padding">成功订单</p>
					</view>
					<view class="flex flex-col flex-align-center pointer" style="width: 30%; margin-top: 15px;">
						<h1>98%</h1>
						<p class="font-13 padding">成功率</p>
					</view>
				</view>
				<view class="cells van-cell-group van-hairline--top-bottom">
					<view class="van-cell van-cell--clickable">
						<i class="van-icon van-icon-wechat" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>邀请列表</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					<view class="van-cell van-cell--clickable"><i class="van-icon van-icon-question" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>推广下级</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					<navigator url="/pages/index/commissionRate" open-type="navigate">
					<view class="van-cell van-cell--clickable"><i class="van-icon van-icon-todo-list" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>佣金比例</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					</navigator>
					<view class="van-cell van-cell--clickable"><i class="van-icon van-icon-lock" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>平台公告</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					<view class="van-cell van-cell--clickable"><i class="van-icon van-icon-coupon" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>意见反馈-申请解封</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					<view class="van-cell van-cell--clickable"><i class="van-icon van-icon-point-gift" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>APP下载</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					<view class="van-cell van-cell--clickable"><i class="van-icon van-icon-warning" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
						<view class="van-cell__title"><span>固定码</span></view><i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					<navigator url="/pages/index/login" open-type="navigate">
					<view class="van-cell van-cell--clickable" @tap="logout"><i class="van-icon van-icon-warning" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
							<!----></i>
							 
						<view class="van-cell__title"><span>退出登录</span></view>
						
						<i class="van-icon van-icon-arrow van-cell__right-icon">
							<!----></i>
					</view>
					</navigator>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		regExpTel,
		getQueryString,
		toast
	} from '../../utils/index.js'
	export default {
		components: {},
		data() {
			return {
				phone: '',
				password: '',
				code: '',
				yqmvalue: '',
				uservalue: '',
				btnnum: 0,
				codeMsg: '发送验证码',
			};
		},

		methods: {

			logout() {
			
				// #ifdef H5
				console.log(1111)
				uni.reLaunch({
					url: '/pages/login'
				})
				// #endif
				// #ifdef MP-WEIXIN
				uni.redirectTo({
					url: '/pages/login'
				})
				// #endif

				uni.reLaunch({
					url: '/pages/login'
				})
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

	.van-cell {
		padding: 10px 0;
	}
</style>
<style lang="scss">
	.blackbg {
		background: rgba($color: #000000, $alpha: .5);
		padding: 10px;
	}

	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}
</style>
