<template>
	<view class="page">
		<view class="wrapper center-container">

			<view class="content">
				<view class="top">
					<view class="flex "><img class="avatar" src="https://upload.jianshu.io/users/upload_avatars/20613230/97571392-dcdf-4284-83b6-be77a1e3bd88.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
						 lazy="loaded">
						<view class="white padding-left">
							<view v-if="loginFlag">
								<navigator url="/pages/index/userCenter" open-type="navigate">
									<p class="font-15">{{account}}</p>
									<p class="padding-top padding-bottom font-12">推荐码：{{inviteCode}}</p>
									<view class="flex star-box flex-center"><i class="van-icon van-icon-star" style="color: rgb(254, 106, 3); font-size: 12px;">
											<!----></i>
										<p class="font-12">商家</p>
									</view>
								</navigator>
							</view>
							<view v-else>
								<view class="margin-xs" @click="toSubPage('/pages/login')">注册/登录</view>
							</view>
						</view>
					</view>
				</view>
				<view class="flex white blackbg">
					<section class="van-col van-col--12">
						<p class="padding-top padding-bottom flex">我的余额：<em class="c-yellow fs18">￥9880</em></p>
					</section>
					<section class="van-col van-col--12 rightdq">
						<button class="van-button van-button--default van-button--mini van-button--round"><span class="van-button__text">明细</span></button>
						<button class="van-button van-button--danger van-button--normal van-button--mini van-button--round"><span class="van-button__text">提现</span></button>
					</section>
				</view>
				<view class="flex flex-wrap  flex-justify-around numthree padding grid">
					<view class=" van-col van-col--6  pointer">
						<h1>100</h1>
						<p class="font-13 padding">日单量</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>98</h1>
						<p class="font-13 padding">日成功单</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>98</h1>
						<p class="font-13 padding">待接单数</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>18</h1>
						<p class="font-13 padding">正在接单</p>
					</view>
				</view>
				<view class="cells van-cell-group van-hairline--top-bottom">
					<view class="van-cell van-cell--clickable" @click="linktask(1)">
						<i class="van-icon van-icon-wechat"></i>
						<view class="van-cell__title"><span>发布扫码任务</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="linktask(2)">
						<i class="van-icon van-icon-fire"></i>
						<view class="van-cell__title"><span>发布手机任务</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="linkorder">
						<i class="van-icon van-icon-bill"></i>
						<view class="van-cell__title"><span>订单管理</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="linkrecharge">
						<i class="van-icon van-icon-alipay"></i>
						<view class="van-cell__title"><span>账号充值</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable">
						<i class="van-icon van-icon-invition"></i>
						<view class="van-cell__title"><span>邀请卡商</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable">
						<i class="van-icon van-icon-todo-list"></i>
						<view class="van-cell__title"><span>资料编辑</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>

					
						<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/logOut')">
							<i class="van-icon van-icon van-icon-lock">
							</i>
							<view class="van-cell__title"><span>退出登录</span></view>
							<i class="van-icon van-icon-arrow van-cell__right-icon">
							</i>
						</view>
					
				</view>
				<view class="van-tag van-tag--mark van-tag--primary marT10" @click="open">
					<i class="van-icon van-icon van-icon-point-gift" style="line-height: inherit; padding: 0px 10px; color: rgb(254, 106, 3); font-size: 20px;">
					</i>
					推荐好友注册并下单成功，返平台利润的10%-50%/单！
				</view>
				<!-- <view class="cells van-cell-group van-hairline--top-bottom">
					<view class="lineText tgText">您的推广注册链接：<br>http://goxdpc.rt666.cn/orderpc/Reg.html?recommendCode=WVLNH1</view>
				</view> -->
			</view>
			<!-- <button >打开弹窗</button> -->
			<uni-popup ref="popup" type="center">
				<view class="dialogText">全新PC客户端，体验从未有过的真实游戏世界</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup.vue'
	import util from '@/utils/http.js'
	import {
		regExpTel,
		getQueryString,
		toast
	} from '../../utils/index.js'
	export default {
		components: {},
		data() {
			return {
				loginFlag: false,
				account: '',
				inviteCode: '',
			};
		},
		onShow() {
		
			if (uni.getStorageSync('accountInfo').token) {
				this.loginFlag = true;
				this.account = uni.getStorageSync('accountInfo').account;
				this.inviteCode = uni.getStorageSync('accountInfo').inviteCode;
			}
		},
		components: {
			uniPopupDialog
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			linktask(val) {
				uni.navigateTo({
					url: '/pages/index/releaseTask?type=' + val
				});
			},
			linkorder() {
				uni.switchTab({
					url: '/pages/index/order'
				});
			},
			linkrecharge() {
				uni.navigateTo({
					url: '/pages/index/recharge'
				});
			},
			toSubPage(path){
							if(path.indexOf('logOut') >= 0){
								this.logOut();
							} else {
								util.navigateToPath(path)
							}
						},
			// 退出登录
			logOut() {
				uni.showModal({
					title: '确定要退出登录吗？',
					success: (res) => {
						if (res.confirm) {
							// uni.showToast({
							// 	title: '退出登录',
							// 	icon: 'none'
							// })
							uni.navigateTo({
								url:'/pages/login'
							})
							const userinfo = {
								token: '',
								account: '',
								photo: '',
								inviteCode: '暂无',
							}
							uni.setStorageSync('accountInfo', userinfo);
						}
						
					}
				})
			},
			// logout() {
			// 	// #ifdef H5
			// 	// console.log(1111)
			// 	uni.reLaunch({
			// 		url: '/pages/login'
			// 	})
			// 	// #endif
			// 	// #ifdef MP-WEIXIN
			// 	uni.redirectTo({
			// 		url: '/pages/login'
			// 	})
			// 	// #endif

			// 	uni.reLaunch({
			// 		url: '/pages/login'
			// 	})
			// }

		}
	};
</script>
<style scoped>
	.van-col--12 {
		align-self: center;
	}

	.numthree h1 {
		font-size: 22px;
		text-align: center;
		font-weight: bold;
	}

	.numthree p {
		text-align: center;
	}

	.van-hairline--top-bottom .van-icon {
		padding: 0 10px;
		font-size: 20px;
		color: #999;
	}

	.center-container .content .top .avatar {
		width:68px;
		height:68px;
		margin-right: 10px;
		border-radius: 100%
	}

	.dialogText {
		width: 80%;
		line-height: 32px;
		background: #FFF;
		padding: 20px;
		border-radius: 10px;
	}

	.center-container .content .top .star-box {
		text-align: center;
		line-height: 18px;
		border-radius: 9px;
		background-color: #fff;
		color: #fe6a03;
		padding: 1px 2px
	}

	.tgText {
		text-align: left;
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
