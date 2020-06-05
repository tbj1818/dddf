<template>
	<view class="page">
		<view class="wrapper center-container">
			<text class="textTips">提示： 若下单价提高，有助于用户快速接单！（若拍照二维码识别失败，请上传截图二维码）。</text>
			<div class="flex flex-align-center flex-justify-around flex-wrap padding box">
				<div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;">
					<view class="screenone"></view>
					<p class="padding-top padding-bottom">扫码下单</p>
				</div>
				<div class="flex flex-col flex-align-center padding-top pointer" @click="uploadFile" style="width: 50%;">
					<view class="screentwo"></view>
					<p class="padding-top padding-bottom">原图拍照</p>
				</div>
				<!-- <div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;">
					<img class="img-function" src="https://s1.ax1x.com/2020/05/26/tF5nT1.png" lazy="loaded">
					<p class="padding-top padding-bottom">扫码确认失败</p>
				</div>
				<div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;">
					<img class="img-function" src="https://s1.ax1x.com/2020/05/26/tF5KFx.jpg" lazy="loaded">
					<p class="padding-top padding-bottom">手机号上传</p>
				</div> -->
			</div>
			<view class="flex solid-bottom padding justify-end ">
				<view class="bg-blue padding-sm margin-xs radius flotage" @click="toSubPage('/pages/index/gonggao')">平台公告</view>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '@/utils/http.js'
	export default {
		data() {
			return {
				imgListNum: 1,
				filepath: ''
			};
		},
		onLoad() {

		},
		onShow() {
			this.getafficheList()
		},
		components: {},
		methods: {
			getafficheList() {
				let infodata = {
					fromType: 2,
					sourceType: 10
				}
				util.sendPost('/appAffiche/afficheList', infodata).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showModal({
							title: res.data.data[0].title,
							content: res.data.data[0].content,
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								}
							}
						});
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			screenqrcode() {
				//#ifdef H5
				uni.showModal({
					title: '请前往APP端扫码！',
					success: (res) => {
						if (res.confirm) {
							uni.showToast({
								title: '确认成功',
								icon: 'success',
							})
							uni.navigateTo({
								url: '/pages/index/download'
							})
						} else if (res.cancel) {
							uni.showToast({
								title: '您就竟然点击取消',
								icon: 'none',
							})
						}
					}
				})
				//#endif
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						// uni.showToast({
						// 	icon: 'none',
						// 	title: res.result
						// });
						if (res.result.indexOf("http://") == -1 || res.result.indexOf("https://") == -1) {
							uni.showToast({
								icon: 'none',
								title: '未解析出地址，请重新扫码或上传'
							});
							return false
						}
						uni.navigateTo({
							url: '/pages/index/releaseTask?qucodeurl=' + encodeURIComponent(res.result) + '&type=1',
						})
					},
					fail(res) {
						uni.showToast({
							icon: 'none',
							title: res.errMsg
						});
					}
				});
			},
			uploadFile() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
						console.log(res)
						this.filepath = res.tempFilePaths[0]
						console.log(this.filepath)
						uni.showLoading({
							title: '加载中'
						});
						var data = {
							token: uni.getStorageSync('token'),
							fileName: 'imageFile',
						}
						uni.uploadFile({
							url: util.baseUrl + '/appOrder/parseQrcode',
							filePath: this.filepath,
							name: 'imageFile',
							formData: data,
							// header:{"Content-Type": "multipart/form-data"},
							success: (res) => {
								res = JSON.parse(res.data)
								console.log(res)
								if (res.code == 0) {
									uni.navigateTo({
										url: '/pages/index/releaseTask?qucodeurl=' + encodeURIComponent(res.data.content) + '&type=1',
									})
								} else {
									uni.showToast({
										title: res.message,
										icon: 'none',
										duration: 2000
									});
								}
							}
						});

					}
				});
			},
			// 前往公告
			toSubPage(path) {
				if (path.indexOf('logOut') >= 0) {
					this.logOut();
				} else {
					// console.log(path)
					util.navigateToPath(path)
				}
			},
			
		}
	};
</script>
<style scoped>
	.textTips {
		width: 100%;
		margin: 10px auto;
		text-align: left;
		color: #999;
		line-height: 28px;
	}

	.box {
		box-shadow: 0 0 8px #d2eeff;
		margin: 10px 5px 0;
		padding: .5rem 5px;
		border-radius: 5px;
	}

	.box img {
		width: 50%;
	}

	.flotage {
		position: fixed; background: #388add;
		right:0; color: #FFF;
		bottom:20%;
		border-radius:10px 0 0 10px;
		text-align: center;
		z-index: 99;
		font-size:16px;
		width: 24px !important;
		padding: 12px 0px;
	}
</style>
