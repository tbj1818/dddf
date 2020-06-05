<template>
	<view class="page">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<div  class="flex flex-align-center flex-col logo marT20" >
				<view class="logokw"></view>
				<!-- <img alt="logo"  src="https://ss0.bdstatic.com/-0U0b8Sm1A5BphGlnYG/kmarketingadslogo/f3392ec77c582d78d3b989d8ffa8f366_250_250.jpg" lazy="loaded" > -->
				<p class="text-center">神码APP下载</p>
				<div  class="text-center">
					<button  class="gradient-btn van-button van-button--default van-button--normal"
					 style="width: 100%;">
					 <span  class="van-button__text">点击下载</span></button></div>
					  <img class="logo nobordersh" src="@/static/images/qrcode_download.png" alt="qrcode" />
				<p  class="text-center">扫描二维码安装</p>
				<p  class="fs14 padding text-center" >
					点击复制下载地址，用浏览器打开<br >
					{{spread_url}}
				</p>
				<button  class="gradient-btn van-button van-button--default van-button--normal"
				 v-clipboard:copy="spread_url" v-clipboard:success="(type) => copyPath('success')" v-clipboard:error="(type) => copyPath('error')">
				 <span  class="van-button__text" >点此复制</span></button>
			</div>
		</view>
		<view class="list" v-if="tabCurrentIndex ===1">
			<text class="notext-center"> 暂未开放</text>
		</view>
	</view>
</template>

<script>
	import webbaseUrl from '@/utils/http.js'
	export default {
		components: {},
		data() {
			return {
				tabCurrentIndex: 0,
				spread_url:'',
				inviteUrl: webbaseUrl.webbaseUrl,
				inviteCode:'',
				navList: [{
					text: '安卓下载'
				}, {
					text: '苹果下载'
				}]
			};
		},
		onLoad() {
			if (uni.getStorageSync('token')) {
				this.inviteCode = uni.getStorageSync('inviteCode');
				this.spread_url=this.inviteUrl+'/studio/#/pages/login?code='+this.inviteCode
			}
		},
		onShow() {

		},
		methods: {
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			},
			copyPath(type, text) {
				
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

<style scoped lang="scss">
	
	.nobordersh{box-shadow:none !important;}
	.text-center{line-height: 32px;}
	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		position: relative;
		z-index: 10;
		border-bottom: 1px #dcdcdc solid;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			position: relative;

			&.current {
				border-bottom:3px solid orange;
				color: #ff6034;
				font-weight: bold;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;

				}
			}
		}
	}
	.notext-center{width: 100%; display: inline-block; line-height: 50px; text-align: center;color: #999; font-size:16px}
	.uni-swiper-item {
		height: auto;
	}
</style>
