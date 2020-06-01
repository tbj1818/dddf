<template>
	<view class="page">
		<view class="h1">
			账号信息
		</view>
		<!-- <view class="uni-form-item uni-column">
			<view class="title">账号</view>
			<input class="uni-input"  v-model="useracount" type="number" placeholder="请输入手机号" />
		</view> -->
		<view class="uni-form-item uni-column" style="position: relative;">
			<!-- <text class="text-xl">验证码：</text> -->
			<view class="title">微信号</view>
			<input type="text" v-model="userinfo.linkWx" placeholder="请输入微信号"></input>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">QQ号</view>
			<input class="uni-input" v-model="userinfo.linkQq" type="number" placeholder="请输入QQ号" />
		</view>
		<!-- <view class="uni-form-item uni-column">
			<view class="title">昵称</view>
			<input class="uni-input" v-model="userName" type="password" placeholder="请输入密码" />
		</view> -->
		<button type="primary" class="uni-buttonlogin orange-red-bg" @click="saveinfo(1)">保存</button>
		<view class="h1 marT20">
			收款信息
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">收款方式</view>
			<text style="line-height: 42px;">支付宝</text>
		</view>
		<view class="uni-form-item uni-column" style="position: relative;">
			<!-- <text class="text-xl">验证码：</text> -->
			<view class="title">支付宝账号</view>
			<input type="text" v-model="userinfo.linkZfb" placeholder="请输入支付宝"></input>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">真实姓名</view>
			<input class="uni-input" v-model="userinfo.realName" type="text" placeholder="请输入真实姓名" />
		</view>
		<!-- <view class="uni-form-item uni-column">
			<view class="title">归属地</view>
			<input class="uni-input" v-model="userinfo.gsharea" type="password" placeholder="请输入密码" />
		</view> -->
		<button type="primary" class="uni-buttonlogin orange-red-bg" @click="saveinfo(2)">保存</button>

	</view>
</template>

<script>
	import util from '../../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				paymentTerm:'支付宝',
				userinfo: {
				}
			};
		},
		onShow() {
			this.getinfo()
		},
		methods: {
			getinfo() {
				let infodata = {
					fromType: 2,
					fromPage: 20
				}
				util.sendPost('/appUser/getUserInfo', infodata).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
						this.userinfo = res.data.data
						console.log(this.userinfo)
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			saveinfo(type) {
				this.$set(this.userinfo, 'fromType', 2);
				if (type == 1) {
					var url = '/appUser/updateLinkInfo'
				} else {
					var url = '/appUser/updateSkInfo'
				}
				util.sendPost(url, this.userinfo).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			}
		}
	};
</script>

<style scoped>
	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.uni-input {
		border: 0;
	}

	.h1 {
		font-size: 20px;
		height: 20px;
		background-color: #F8f8f8;
		line-height: 20px;
		border-left: 3px solid #0077AA;
		padding: 10px;
		margin:20px auto;
	}
</style>
