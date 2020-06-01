<template>
	<view class="page">
		<view class="wrapper center-container">
			<text class="textTips">提示： 若下单价提高，有助于用户快速接单！（若拍照二维码识别失败，请上传截图二维码）。</text>
			<div class="flex flex-align-center flex-justify-around flex-wrap padding box">
				<div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;"><img
					 class="img-function" src="https://s1.ax1x.com/2020/05/26/tF5MY6.jpg"
					 lazy="loaded">
					<p class="padding-top padding-bottom">扫码下单</p>
				</div>
				<div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;"><img
					 class="img-function"  src="https://s1.ax1x.com/2020/05/26/tF5QfK.jpg"
					 lazy="loaded">
					<p class="padding-top padding-bottom">原图拍照</p>
				</div>
				<div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;">
					<img class="img-function" src="https://s1.ax1x.com/2020/05/26/tF5nT1.png" lazy="loaded">
					<p class="padding-top padding-bottom">扫码确认失败</p>
				</div>
				<div class="flex flex-col flex-align-center padding-top pointer" @click="screenqrcode" style="width: 50%;">
					<img class="img-function" src="https://s1.ax1x.com/2020/05/26/tF5KFx.jpg" lazy="loaded">
					<p class="padding-top padding-bottom">手机号上传</p>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onShow() {

		},
		components: {},
		methods: {
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
						uni.showToast({
							icon: 'success',
							title: res.result
						});
					},
					fail(res) {
						uni.showToast({
							icon: 'none',
							title: res.errMsg
						});
					}
				});
			}
		}
	};
</script>
<style scoped>
	.textTips{width:100%; margin: 10px auto; text-align: left; color: #999; line-height:28px;}
	.box {
		box-shadow: 0 0 8px #d2eeff;
		margin: 10px 5px 0;
		padding: .5rem 5px;
		border-radius: 5px;
	}

	.box img {
		width: 50%;
	}
</style>
<style lang="scss">

</style>
