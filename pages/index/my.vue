<template>
	<view class="page">
		<view class="wrapper center-container">
			<view class="content">
				<view class="top">
					<view class="flex ">
						<view class="logokw myround"></view>
						<view class="white padding-left">
							<view v-if="loginFlag">
								<navigator url="/pages/index/materialEdit" open-type="navigate">
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
						<button class="star-box" style="width:60px;float: right;" type="primary" @click="linkmoneydetail">明细</button>
					</view>
				</view>
				<view class="flex flex-wrap  flex-justify-around numthree padding grid">
					<view class=" van-col van-col--6  pointer">
						<h1>{{totalDay}}</h1>
						<p class="font-13 padding">日单量</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>{{totalSuccessDay}}</h1>
						<p class="font-13 padding">日成功单</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>{{totalWait}}</h1>
						<p class="font-13 padding">待接单数</p>
					</view>
					<view class=" van-col van-col--6  pointer">
						<h1>{{totalDoing}}</h1>
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
					<!-- <view class="van-cell van-cell--clickable" @click="linktask(2)">
						<i class="van-icon van-icon-fire"></i>
						<view class="van-cell__title"><span>发布手机任务</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
					</view> -->
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
					<view class="van-cell van-cell--clickable" @click="toSubPage('/pages/index/download')">
						<i class="van-icon van-icon-point-gift"></i>
						<view class="van-cell__title"><span>APP下载</span></view><i class="van-icon van-icon-arrow van-cell__right-icon"></i>
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
				<view class="dialogText">推荐好友注册并下单，返平台利润的10%-50%！</view>
			</uni-popup>
		</view>
			<!-- #ifdef APP-PLUS -->
		<uni-popup ref="versionTip">
			<uni-view class="uni-popup__wrapper-box">
				<uni-view data-v-40c11e61="" class="uni-popup-dialog">
					<uni-view class="uni-dialog-title">
						<uni-text class="uni-dialog-title-text uni-popup__success"><span>{{tipVersionTitle}}</span></uni-text>
					</uni-view>
					<uni-view class="uni-dialog-content">
						<uni-text class="uni-dialog-content-text" v-html="tipVersionContent"><span>{{tipVersionContent}}</span></uni-text>
					</uni-view>
					<uni-view class="uni-dialog-button-group">
						<uni-view class="uni-dialog-button">
							<uni-text class="uni-dialog-button-text" @click="hideConfirm('versionTip')"><span>取消</span></uni-text>
						</uni-view>
						<uni-view class="uni-dialog-button uni-border-left">
							<uni-text class="uni-dialog-button-text uni-button-color" @click="versionUpdate()"><span>更新</span></uni-text>
						</uni-view>
					</uni-view>
				</uni-view>
			</uni-view>
		</uni-popup>
		<!-- #endif -->

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
				totalSuccessDay: 0,
				totalDay: 0,
				totalWait: 0,
				totalDoing: 0,
				tipVersionTitle: '有新版本更新',
				tipVersionContent: '',
			};
		},
		onShow() {
			if (uni.getStorageSync('token')) {
				this.loginFlag = true;
				// this.account = uni.getStorageSync('accountInfo').account;
				this.inviteCode = uni.getStorageSync('inviteCode');
				// console.log(this.inviteCode)
			}
			this.getuserInfo()
		},
		onLoad() {
			
			// 检查版本
			this.checkVersion();
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

						this.account = res.data.data.account
						this.balance = res.data.data.balance
						uni.setStorageSync('balance', this.balance);
						// console.log(uni.getStorageSync('balance'))
						this.totalSuccessDay = res.data.data.totalSuccessDay
						if (!this.totalSuccessDay) {
							this.totalSuccessDay = 0
						}
						this.totalDay = res.data.data.totalDay
						this.totalWait = res.data.data.totalWait
						this.totalDoing = res.data.data.totalDoing
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
				// this.$refs.versionTip.open()
			},
			linktask(val) {
				uni.navigateTo({
					url: '/pages/index/releaseTask?type=' + val + '&balance=' + this.balance
				});
			},
			linkmoneydetail() {
				uni.navigateTo({
					url: '/pages/index/moneydetail'
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
								uni.setStorageSync('balance', '');
							} catch (e) {
								//TODO handle the exception
							};
						}
					}
				})
			},
			// 关闭提示框
			hideConfirm(type) {
				console.log(type)
				this.$refs[type + ''].close();
			},
			checkVersion() {
				// #ifdef APP-PLUS
				var that = this;
				var app = getApp();
				
				var platformType = 3
				if (uni.getSystemInfoSync().platform != 'android') {
					platformType = 1
				}
				// 请求接口
				const data = {
					fromType: 2,
					appId: platformType,
					checkType: 0,
					verCode: app.globalData.version,
					channel: 'other',
				}
				util.sendPost('/appVersion/checkUpgrade', data).then(function(res) {
					var data = res.data.data;
					if (!data.verCode) {
						console.log("没有新版本")
						return;
					}
					that.appDownloadSite = data.downloadSite;
					that.tipVersionContent = data.verDesc;
					that.$refs['versionTip'].open()
				})
				// #endif
			},
			versionUpdate() {
				var that = this;
				that.$refs['versionTip'].close();
				uni.showToast({
					icon: "none",
					mask: true,
					title: '新版本下载完成后将自动弹出安装程序',
					duration: 5000,
				});
				var dtask = plus.downloader.createDownload(that.appDownloadSite, {}, function(d, status) {
					// 下载完成  
					if (status == 200) {
						plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
							uni.showToast({
								title: '安装失败',
								duration: 1500
							});
						})
					} else {
						uni.showToast({
							title: '更新失败',
							duration: 1500
						});
					}
				});
				dtask.start();
			}

		}
	};
</script>
<style scoped>
	.myround {
		border-radius: 50%;
		width: 80px;
		height: 80px;
	}

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
		width: 120px;
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

	.uni-popup {
		position: fixed;
		z-index: 99
	}

	.uni-popup__mask {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, .4);
		opacity: 0
	}

	.mask-ani {
		-webkit-transition-property: opacity;
		transition-property: opacity;
		-webkit-transition-duration: .2s;
		transition-duration: .2s
	}

	.uni-top-mask {
		opacity: 1
	}

	.uni-bottom-mask {
		opacity: 1
	}

	.uni-center-mask {
		opacity: 1
	}

	.uni-popup__wrapper {
		display: block;
		position: absolute
	}

	.top {
		top: var(--window-top);
	}

	.bottom {
		bottom: 0
	}

	.uni-popup__wrapper-box {
		display: block;
		position: relative;
		/* iphonex 等安全区设置，底部安全区适配 */
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom)
	}

	.content-ani {
		/* transition: transform 0.3s;
	 */
		-webkit-transition-property: opacity, -webkit-transform;
		transition-property: opacity, -webkit-transform;
		transition-property: transform, opacity;
		transition-property: transform, opacity, -webkit-transform;
		-webkit-transition-duration: .2s;
		transition-duration: .2s
	}

	.uni-top-content {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}

	.uni-bottom-content {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}

	.uni-center-content {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1
	}

	.uni-popup-dialog {
		width: 300px;
		border-radius: 15px;
		background-color: #fff
	}

	.uni-dialog-title {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		padding-top: 15px;
		padding-bottom: 5px
	}

	.uni-dialog-title-text {
		font-size: 16px;
		font-weight: 500
	}

	.uni-dialog-content {
		display: -webkit-box;text-align: left;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-webkit-justify-content: left;
		justify-content: left;
		-webkit-box-align: center;
		-webkit-align-items: left;
		align-items: left;
		padding: 5px 15px 15px 15px
	}

	.uni-dialog-content-text {
		font-size: 14px; text-align: left; line-height:28px;
		white-space: pre-wrap;
		color: #6e6e6e
	}

	.uni-dialog-button-group {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		border-top-color: #f5f5f5;
		border-top-style: solid;
		border-top-width: 1px
	}

	.uni-dialog-button {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		height: 45px
	}

	.uni-border-left {
		border-left-color: #f0f0f0;
		border-left-style: solid;
		border-left-width: 1px
	}

	.uni-dialog-button-text {
		font-size: 14px
	}

	.uni-button-color {
		color: #007aff
	}

	.uni-dialog-input {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		font-size: 14px
	}

	.uni-popup__success {
		color: #4cd964
	}

	.uni-popup__warn {
		color: #f0ad4e
	}

	.uni-popup__error {
		color: #dd524d
	}

	.uni-popup__info {
		color: #909399
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

	.van-hairline--top-bottom:after {
		border-width: 0;
	}
</style>
