<template>
	<view class="page">
		<view class="wrapper center-container">

			<view class="content">
				<view class="top">
					<view class="flex ">
						<img @click="toSubPage('/pages/index/index')" class="avatar" :src="advertimg"
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
					<view class="moneyshow">
						<view class="c-white fs14">我的余额</view>
						<view class="c-yellow fs22">￥{{balance}}</view>
					</view>
				</view>
				<view class="flex flex-wrap  flex-justify-around numthree padding grid">
					<view class=" van-col van-col--6  pointer">
						<h1>{{totalReceice}}</h1>
						<p class="font-13 padding">日单量</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>{{successRate}}</h1>
						<p class="font-13 padding">日成功单</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>{{totalSuccess}}</h1>
						<p class="font-13 padding">待接单数</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>{{goingorder}}</h1>
						<p class="font-13 padding">正在接单</p>
					</view>
				</view>
				<view class="van-tag van-tag--mark van-tag--primary marT10" @click="open">
					<i class="van-icon van-icon van-icon-point-gift" style="font-size:16px;"></i>
					推荐好友注册并下单，返平台利润的10%-50%！
				</view>
				<view class="cells van-cell-group van-hairline--top-bottom" style="border-top:0">
					<!-- <view class="van-cell van-cell--clickable" @click="linktask(1)">
						<i class="van-icon van-icon-wechat"></i>
						<view class="van-cell__title"><span>发布扫码任务</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view> -->
					<view class="van-cell van-cell--clickable" @click="linktask(2)">
						<i class="van-icon van-icon-fire"></i>
						<view class="van-cell__title"><span>发布手机任务</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/index/order')">
						<i class="van-icon van-icon-bill"></i>
						<view class="van-cell__title"><span>订单管理</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/index/recharge')">
						<i class="van-icon van-icon-alipay"></i>
						<view class="van-cell__title"><span>账号充值</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/index/inviteCard')">
						<i class="van-icon van-icon-invition"></i>
						<view class="van-cell__title"><span>邀请卡商</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/index/myInvite')">
						<i class="van-icon van-icon-invition"></i>
						<view class="van-cell__title"><span>我的邀请</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view>
					<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/index/materialEdit')">
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
	import util from '@/utils/http.js'
	export default {
		components: {},
		data() {
			return {
				loginFlag: false,
				account: '',
				inviteCode: '',
				balance: '',
				successRate: 0,
				totalReceice:0,
				totalSuccess: 0,
				goingorder:0,
				advertimg:'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg'
			};
		},
		onShow() {
			try {
				// console.log(uni.getStorageSync('accountInfo'))
				console.log(uni.getStorageSync('inviteCode'))
			} catch (e) {
				console.log(2)
				//TODO handle the exception
			};
			if (uni.getStorageSync('token')) {
				this.loginFlag = true;
				// this.account = uni.getStorageSync('accountInfo').account;
				this.inviteCode = uni.getStorageSync('inviteCode');
				// console.log(this.inviteCode)
			}
			this.getuserInfo()
		},

		methods: {
			getuserInfo() {
				let infodata = {
					fromType: 2,
					fromPage: 10
				}
				util.sendPost('/appUser/getUserInfo', infodata).then((res) => {
					// console.log(res)
					if (res.data.code == 0) {
						this.loginFlag = true;
						// uni.showToast({
						// 	title: res.data.message,
						// 	icon: 'success',
						// });
						this.account = res.data.data.account
						this.balance = res.data.data.balance
						this.successRate = res.data.data.successRate
						if (!this.successRate) {
							this.successRate = 0
						}
						this.totalReceice = res.data.data.totalReceice
						this.totalSuccess = res.data.data.totalSuccess
						this.goingorder=res.data.data.jding
						// console.log(this.balance)
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			open() {
				this.$refs.popup.open()
			},
			linktask(val) {
				uni.navigateTo({
					url: '/pages/index/releaseTask?type=' + val+'&balance='+this.balance
				});
			},

			toSubPage(path) {
				if (path.indexOf('logOut') >= 0) {
					this.logOut();
				} else {
					// console.log(path)
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
								url: '/pages/login'
							})
							const userinfo = {
								token: '',
								account: '',
								photo: '',
								inviteCode: '暂无',
							}
							try {
								uni.setStorageSync('accountInfo', userinfo);
								uni.setStorageSync('token', '');
							} catch (e) {
								//TODO handle the exception
							};
						}
					}
				})
			},
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
		width: 68px;
		height: 68px;
		margin-right: 10px;
		border-radius: 100%
	}

	.moneyshow {
		width:120px;
		text-align: right;
		line-height: 26px;
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
	
	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}
	.van-hairline--top-bottom:after{border-width:0;}
</style>
