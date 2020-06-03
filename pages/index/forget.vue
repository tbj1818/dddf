<template>
	<view class="page">

		<view class="uni-form-item uni-column">
			<view class="title"><i class="iconfont icon-shouji"></i>手机号</view>
			<input class="uni-input" maxlength="11" v-model="phone" type="number" placeholder="请输入手机号" />
		</view>
		<view class="uni-form-item uni-column" style="position: relative;">

			<!-- <text class="text-xl">验证码：</text> -->
			<view class="title"><i class="iconfont  icon-mima"></i>验证码</view>
			<input type="text" maxlength="4" v-model="imgCode" placeholder="请输入图片验证码"></input>

			<view class="justify-end yzhmbtn">
				<image :src="imgCodeSrc" @click="getImgPath()" mode="aspectFit" style="width:80px;"></image>
			</view>
		</view>
		<view class="uni-form-item uni-column" style="position: relative;">
			<view class="title"><i class="iconfont icon-mima"></i>验证码</view>
			<input class="uni-input" maxlength="11" v-model="code" type="number" placeholder="请输入短信验证码" />
			<button type="primary" class="yzhmbtn" @click="sendPhone">{{codeMsg}}</button>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title"><i class="iconfont icon-mima"></i>新密码</view>
			<input class="uni-input" v-model="password" type="password" placeholder="请输入新密码" />
		</view>


		<button type="primary" class="uni-buttonlogin" @click="getdata">提交</button>

	</view>
</template>

<script>
	import {
		regExpTel,
	} from '../../utils/index.js'
	import util from '../../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				phone: '',
				password: '',
				imgCode: '',
				imgCodeSrc: '',
				timeFlag: '',
				code: '',
				yqmvalue: '',
				uservalue: '',
				btnnum: 0,
				codeMsg: '发送验证码',
			};
		},
		onLoad: function() {
			this.getImgPath();
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
				}else if (!this.imgCode) {
					uni.showToast({
						title: '请输入图形验证码',
						icon: 'none',
					});
					return false
				}else if (!this.code) {
					uni.showToast({
						title: '请输入短信验证码',
						icon: 'none',
					});
					return false
				} else if (!this.password) {
					uni.showToast({
						title: '请输入新密码',
						icon: 'none',
					});
					return false
				}else{
					// 请求修改密码接口
					let data = {
						phone: this.phone,
						captcha:this.imgCode,
						timeFlag:this.timeFlag,
						mobileCaptcha:this.code,
						regFrom: 50,
						version: '1.0.0',
						channel: '小米',
						fromId:2,
						reLogonPasswd:this.password,
						logonPasswd: this.password
					}
					util.sendPost('/appUser/updatePwd', data).then(function(res) {
						console.log(res)
						if (res.data.code == 0) {
							// 延时关闭 加载中的 loading框
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
				}
				// weqweououio

			},
			sendPhone() {
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
						modelType: 110,
						captcha: this.imgCode,
						timeFlag: this.timeFlag,
					}
					util.sendPost('/sms/sendCaptchaSms', smsdata).then(function(res) {
						console.log(res)
						if (res.data.code == 0) {
							let time = 60
							console.log(time)
							this.timer = setInterval(() => {
								if (time <= 1) {
									this.codeMsg = '发送验证码'
									clearInterval(this.timer)
								} else {
									time--
									this.codeMsg = '已发送（' + time + '）'
								}
							}, 1000)
							this.code = res.data
						}
					}).catch(res => {
						uni.showToast({
							title: '请求失败',
							icon: 'none',
						});
					})
				}
			},
			change(e) {
				this.btnnum = e
				console.log(this.btnnum)
			}
		}
	};
</script>

<style lang="scss">
	uni-image{height: 30px;}
	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.page {
		width: 90%;
		margin: 10px auto;
	}

	.uni-badge-left-margin {
		margin-left: 20rpx;
	}

	.title {
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		font-weight: bold;
		color: #666;
	}

	.page .logo {
		width: 100%;
		text-align: center;
	}

	.page .logo img {
		margin: 10px auto;
		width: 30%;
		border-radius: 10px;
		box-shadow: 0 2px 5px 0 #f80;
	}

	

	uni-button {
		margin-top: 30px;
		font-size: 16px;
		line-height: 40px;
	}

	/* 将三个内容view的display设置为none(隐藏) */
	.end-title {
		display: flex;
		margin-top: 30px;
		height: 40px;
		line-height: 40px;
	}

	.end-title view {
		flex-grow: 1;
		text-align: center;
		background: #f8f8f8;
	}

	.end-cont {
		display: none;

	}

	.end-title view.btna {
		color: #FFFFFF;
		background: #00A0FF;
	}

	.dis {
		display: block;
		margin-top: 20px;
	}
</style>
