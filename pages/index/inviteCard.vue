<template>
	<view class="page">
		<view class="invitebg">
			<view class="titleH1">推荐好友注册并下单成功后，返平台利润的10%-50%/单！ </view>
			<view class="invitelinkbottom">
				<view class="inviteNum">
					<view class="fs16"> 您的推荐码</view>
					<p>{{inviteCode}}</p>
				</view>
				<view class="invitelink">
					<image class="padding-top-xl margin-top-sm" style="height:200upx;" :src="qrcode" mode="aspectFit"></image>
					<p>
						<view class="fs16"> 您的推广注册链接</view>{{spread_url}}
					</p>
					<!--  #ifdef APP-PLUS -->
					<!-- <button type="primary" @click="paste(spread_url)" class="orange-red-bg">复制</button> -->
					<!--  #endif  -->
					<!--  #ifndef  APP-PLUS -->
					<!-- <button type="primary" v-clipboard:copy="spread_url"
					v-clipboard:success="(type) => onCopyResult('success')"
					v-clipboard:error="(type) => onCopyResult('error')" class="orange-red-bg">复制</button> -->
					<!--  #endif  -->
					<button type="primary" class="orange-red-bg cu-btn bg-gradual-blue" @click="copyPath('', spread_url)"
					 v-clipboard:copy="spread_url" v-clipboard:success="(type) => copyPath('success')" v-clipboard:error="(type) => copyPath('error')">点击复制推广链接</button>

				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import QR from "@/utils/wxqrcode.js" // 二维码生成器
	import webbaseUrl from '@/utils/http.js'
	// console.log(baseUrl)
	export default {
		components: {},
		data() {
			return {
				spread_url: '',
				inviteCode: '',
				inviteUrl: webbaseUrl.webbaseUrl,
				windowHeight: '',
			}
		},
		onShow() {
			var that = this;
			that.spread_url=that.inviteUrl+'/studio/#/pages/login?code='+that.inviteCode
			// 获取屏幕高度
			uni.getSystemInfo({
				success(res) {
					that.windowHeight = res.windowHeight;
				}
			})
			
			// 生成二维码
			that.qrcode = QR.createQrCodeImg(that.spread_url, {  
			     size: parseInt(200)//二维码大小  
			})
		},
		onLoad() {
			if (uni.getStorageSync('token')) {
				this.inviteCode = uni.getStorageSync('inviteCode');
			}
		},
		methods: {
			copyPath(type, text) {
				this.spread_url=this.inviteUrl+'/studio/#/pages/login?code='+this.inviteCode
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: this.spread_url,
					success() {
						uni.showToast({
							title: '复制成功'
						});
					}
				});
				// #endif

				// #ifdef H5
				if (type === 'success') {
					uni.showToast({
						title: '复制成功'
					});
				} else {
					uni.showToast({
						title: '复制失败'
					});
				}
				// #endif
			}
			
		}
	};
</script>
<style scoped>
	uni-page-body {
		height: 100%;
	}

	.page {
		height: 100%;
		padding: 0;
	}

	.invitebg {
		width: 100%;
		height: 100%;
		padding-top: 30px;
		background: url(../../static/images/invitebg.jpg) no-repeat center 0;
		background-size: cover;
	}

	.titleH1 {
		font-size: 20px;
		line-height: 30px;
		font-weight: bold;
		color: #FF0;
		border-radius: 25px;
		width: 80%;
		margin: 10px auto;
		background: rgba(7, 218, 245, .8);
		padding: 10px 20px;
	}

	.inviteNum {
		font-size: 26px;
		line-height: 30px;
		color: yellow;
		text-align: center;
		width: 100%;
		margin-bottom: 10px;
	}

	.invitelinkbottom {
		width: 90%;
		text-align: center;
		position: absolute;
		bottom:5px;
		left:5%;
	}

	.invitelink {
		width: 90%; margin: 0 auto;
		text-align: center;
		font-size: 18px;

		color: #FFF;
	}

	.invitelink p {
		width: 100%;
	}

	.invitelink .orange-red-bg {
		width: 160px;
		height: 36px;
		line-height: 36px;
		margin: 10px auto;
	}
</style>
