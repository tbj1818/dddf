<template>
	<view class="page">
		<view class='logo'>
			<img src="http://b-ssl.duitang.com/uploads/item/201707/10/20170710210234_y3Kf5.jpeg" alt='logo' />
		</view>
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
		</view>
		<view class="end-cont" :class="{dis:btnnum == 1}">
			　<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-shouji"></i>手机号</view>
				<input class="uni-input" maxlength="11" v-model="phone" type="number" placeholder="请输入手机号" />
			</view>
			<view class="uni-form-item uni-column" style="position: relative;">
				<view class="title"><i class="iconfont icon-mima"></i>验证码</view>
				<input class="uni-input" maxlength="11" v-model="code" type="number" placeholder="请输入验证码" />
				<button type="primary" class="yzhmbtn" @click="sendPhone">{{codeMsg}}</button>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-mima"></i>密码</view>
				<input class="uni-input" v-model="password" type="password" placeholder="请输入密码" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-mima"></i>邀请码</view>
				<input class="uni-input" v-model="yqmvalue" type="text" placeholder="请输入邀请码" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="iconfont icon-mima"></i>商家</view>
				<input class="uni-input" v-model="uservalue" type="text" placeholder="请输入商家" />
			</view>
		</view>

		<button type="primary" class="uni-buttonlogin" @click="getdata">登录</button>
		<text class="uni-text" @click="linkforget">忘记密码</text>
	</view>
</template>

<script>
	import {
		regExpTel,
	} from '../utils/index.js'
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
				// util.sendPost('', data).then(res){

				// }
				const userinfo = {
					token: 'tonkedddddddddd',
					account: this.phone.substring(0, 3) + "****" + this.phone.substring(7),
					photo: 'touxiang',
					inviteCode: '1234',
				}
				uni.setStorageSync('accountInfo', userinfo);
				// 延时关闭 加载中的 loading框
				setTimeout(() => {
					uni.hideLoading()
				}, 2000)

				uni.switchTab({
					url: '/pages/index/index'
				});
				// this.$router.push('/pages/index/index')
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
				} else {
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

				}
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
		height: 40px;
		line-height: 40px;
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
		border-radius: 0
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
