<template>
	<view class="page">
		<view class="h1">
			账号信息
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">账号</view>
			<input class="uni-input"  v-model="useracount" type="number" placeholder="请输入手机号" />
		</view>
		<view class="uni-form-item uni-column" style="position: relative;">
			<!-- <text class="text-xl">验证码：</text> -->
			<view class="title">微信号</view>
			<input type="text"  v-model="wxValue" placeholder="请输入图片验证码"></input>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">QQ号</view>
			<input class="uni-input" v-model="QQValue" type="password" placeholder="请输入密码" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">昵称</view>
			<input class="uni-input" v-model="userName" type="password" placeholder="请输入密码" />
		</view>
		<view class="h1">
			收款信息
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">收款方式</view>
			<input class="uni-input"  v-model="paymentTerm" type="number" placeholder="请输入手机号" />
		</view>
		<view class="uni-form-item uni-column" style="position: relative;">
			<!-- <text class="text-xl">验证码：</text> -->
			<view class="title">支付宝账号</view>
			<input type="text"  v-model="aliapyaccount" placeholder="请输入图片验证码"></input>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">真实姓名</view>
			<input class="uni-input" v-model="realName" type="password" placeholder="请输入密码" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">归属地</view>
			<input class="uni-input" v-model="gsharea" type="password" placeholder="请输入密码" />
		</view>
		<button type="primary" class="uni-buttonlogin orange-red-bg">保存</button>

	</view>
</template>

<script>
	import util from '../../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				useracount: '',
				wxValue: '',
				QQValue: '',
				userName:'',
				paymentTerm:'',
				aliapyaccount:'',
				realName:'',
				gsharea:''
			
			};
		},
		onLoad: function() {
	
		},
		methods: {
			
			
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
	
	.h1{font-size:20px; height: 20px; background-color: #F8f8f8; line-height:20px; border-left:3px solid #0077AA; padding:10px; margin:0 auto 20px;}
</style>
