<template>
	<view class="page">
		<view class="logokw"></view>
		<view class="end-title">
			　<view @tap="change(0)" :class="{btna:btnnum == 0}">登录</view>
			　<view @tap="change(1)" :class="{btna:btnnum == 1}">注册</view>
		</view>
		<view class="end-cont" :class="{dis:btnnum == 0}">
			　<view class="uni-form-item uni-column">
				<view class="title">
					<i class="iconfont icon-shouji"></i> 手机号
				</view>
				<input class="uni-input" maxlength="11" v-model="phone" type="number" placeholder="请输入手机号" />
			</view>

			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-mima"></i>密码</view>
				<input class="uni-input" v-model="password" type="password" placeholder="请输入密码" />
			</view>
			<button type="primary" class="uni-buttonlogin" @click="getdata">登录</button>
		</view>
		<view class="end-cont" :class="{dis:btnnum == 1}">
			　<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-shouji"></i>手机号</view>
				<input class="uni-input" maxlength="11" v-model="phone" type="number" placeholder="请输入手机号" />
			</view>
			<view class="uni-form-item uni-column" style="position: relative;">

				<!-- <text class="text-xl">验证码：</text> -->
				<view class="title"><i class="iconfont  icon-mima"></i>图片验证码</view>
				<input type="text" maxlength="4" v-model="imgCode" placeholder="请输入图片验证码"></input>
				<view class="justify-end yzhmbtn" style="bottom: 0;">
					<image :src="imgCodeSrc" @click="getImgPath()" mode="aspectFit" style="height: 65upx;width: 240upx;"></image>
				</view>
			</view>
			<view class="uni-form-item uni-column" style="position: relative;">
				<view class="title"><i class="iconfont icon-mima"></i>验证码</view>
				<input class="uni-input" maxlength="11" v-model="code" type="number" placeholder="请输入验证码" />
				<button type="primary" class="yzhmbtn" :disabled="disabled" @click="sendPhone">{{codeMsg}}</button>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-mima"></i>密码</view>
				<input class="uni-input" v-model="password" type="password" placeholder="请输入密码" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-mima"></i>确认密码</view>
				<input class="uni-input" v-model="passwords" type="password" placeholder="请再次输入密码" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-yaoqingmatianchong"></i>邀请码</view>
				<input class="uni-input" disabled="true" v-model="yqmvalue" type="text" placeholder="请输入邀请码" />
			</view>
			<button type="primary" class="uni-buttonlogin" @click="getreg">注册</button>
		</view>


		<text class="uni-text" @click="linkforget">忘记密码</text>
	</view>
</template>

<script>
	import {
		regExpTel,
	} from '../utils/index.js'
	import util from '../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				phone: '',
				password: '',
				passwords: '',
				imgCode: '',
				yqmvalue: '',
				btnnum: 0,
				code: '',
				disabled:false,
				imgCodeSrc: '',
				timeFlag: '',
				codeMsg: '发送验证码',
				logo: 'https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg'
			};
		},
		onLoad: function(option) {
			this.getImgPath();
			this.yqmvalue = option.code
			if (this.yqmvalue) {
				this.btnnum = 1
			}
		},
		methods: {
			getImgPath() { //图形验证码
				var that = this;
				util.sendPost('/getCaptcha', {}).then(function(res) {
					console.log(res)
					if (res.data.code == 0) {
						that.imgCodeSrc = res.data.data.image;
						that.timeFlag = res.data.data.time;
					}
				})
			},
			getdata() {
				uni.showLoading({
					title: '加载中'
				});
				if (!regExpTel(this.phone)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
					});
					return false
				} else if (!this.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none',
					});
					return false
				}
				// 请求后台登录接口
				let data = {
					phone: this.phone,
					regFrom: 50,
					version: '1.0.0',
					channel: '小米',
					fromId: 2,
					logonPasswd: this.password
				}
				util.sendPost('/appLogin/smsLoginV1', data).then(function(res) {
					console.log(res)
					if (res.data.code == 0) {
						const userinfo = {
							token: res.data.data.token,
							account: res.data.data.userAccount,
							photo: res.data.data.photo,
							inviteCode: res.data.data.inviteCode,
						}
						try {
							uni.setStorageSync('accountInfo', userinfo);
							uni.setStorageSync('inviteCode', res.data.data.inviteCode);
							uni.setStorageSync('token', res.data.data.token);
						} catch (e) {
							//TODO handle the exception
						};


						// 延时关闭 加载中的 loading框
						setTimeout(() => {
							uni.hideLoading()
						}, 2000)

						uni.switchTab({
							url: '/pages/index/my'
						});
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			sendPhone() {
				 let self = this
				if (this.codeMsg != '发送验证码') {
					uni.showToast({
						title: '请稍后再发送验证码',
						icon: 'none',
					});
				} else if (!regExpTel(this.phone)) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none',
					});
				} else if (!this.imgCode) {
					uni.showToast({
						title: '请输入图形验证码',
						icon: 'none',
					});
				} else {
					
					let smsdata = {
						userPhone: this.phone,
						modelType: 100,
						captcha: this.imgCode,
						timeFlag: this.timeFlag,
					}
					util.sendPost('/sms/sendCaptchaSms', smsdata).then(function(res) {
						console.log(res)
						if (res.data.code == 0) {
							 self.disabled = true;
							let time = 60
							console.log(time)

							var timer = setInterval(() => {
								if (time <= 1) {
									self.codeMsg = '发送验证码'
									 self.disabled = false;  //倒计时结束能够重新点击发送的按钮 
									clearInterval(timer)
								} else {
									console.log(self.codeMsg)
									time--
									self.codeMsg = time + "s后重新发送"

									// this.codeMsg = '已发送（' + time + '）'
								}
							}, 1000)
						} else {
							uni.showToast({
								title: res.data.message,
								icon: 'none',
							});
						}
					})
				}
			},
			getreg() {
				uni.showLoading({
					title: '加载中'
				});
				if (!regExpTel(this.phone)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
					});
					return false
				} else if (!this.imgCode) {
					uni.showToast({
						title: '请输入图形验证码',
						icon: 'none',
					});
					return false
				} else if (!this.code) {
					uni.showToast({
						title: '请输入短信验证码',
						icon: 'none',
					});
					return false
				} else if (!this.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none',
					});
					return false
				} else if (!this.passwords) {
					uni.showToast({
						title: '请再次输入密码',
						icon: 'none',
					});
					return false
				}
				if (this.password != this.passwords) {
					uni.showToast({
						title: '两次输入密码不一致',
						icon: 'none',
					});
					return false
				}

				var inviteCode = this.yqmvalue;
				if (inviteCode == undefined || inviteCode == 'undefined') {
					inviteCode = "";
				}
				// 请求后台注册接口
				let regdata = {
					phone: this.phone,
					captcha: this.imgCode,
					timeFlag: '',
					regFrom: 50,
					mobileCaptcha: this.code,
					inviteCode: inviteCode,
					channel: '小米',
					fromId: 2,
					logonPasswd: this.password
				}
				util.sendPost('/appLogin/phoneReg', regdata).then(function(res) {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
						uni.navigateTo({
							url: '/pages/login'
						});
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			change(e) {
				this.btnnum = e
				// console.log(this.btnnum)
			},
			linkforget() {
				uni.navigateTo({
					url: '/pages/index/forget'
				});
			}
		}
	};
</script>
<style scoped>
	.page {
		width: 90%;
		background: #FFF;
		margin: 0 auto;
	}
</style>
<style lang="scss">
	/* #ifdef MP-ALIPAY */
	// .uni-badge {
	// 	margin-left: 20rpx;
	// }

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-badge-left-margin {
		margin-left: 20rpx;
	}

	.title {
		height: 46px;
		line-height: 46px;
		font-size: 16px;
		font-weight: bold;
		display: flex;
		color: #666;
	}

	.yzhmbtn {
		position: absolute;
		right: 0;
		line-height: 30px;
		bottom: 10px;
		padding: 5px 10px;
		border-radius: 25px
	}

	.uni-text {
		width: 100%;
		text-align: center;
		line-height: 40px;
		color: #007AFF;
		display: inline-block;
	}

	.uni-buttonlogin {
		margin-top: 30px;
		font-size: 16px;
		line-height: 40px;
	}
</style>
