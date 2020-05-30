<template>
	<view class="page">
		<view class="invitebg">
			<view class="titleH1">推荐好友注册并下单成功后，返平台利润的10%-50%/单！ </view>
			<view class="invitelinkbottom">
				<view class="inviteNum"><view class="fs16"> 您的推荐码</view><p>WVLNH1</p>
				</view>
				<view class="invitelink">
					<p><view class="fs16"> 您的推广注册链接</view>http://goxdpc.rt666.cn/orderpc/Reg.html?recommendCode</p>
					<button type="primary" v-clipboard:copy="spread_url"
					v-clipboard:success="(type) => onCopyResult('success')"
					v-clipboard:error="(type) => onCopyResult('error')" class="orange-red-bg">复制</button>
				</view>
				<!-- <text
					class="item-btn"
					v-clipboard:copy="spread_url"
					v-clipboard:success="(type) => onCopyResult('success')"
					v-clipboard:error="(type) => onCopyResult('error')">复制
				</text> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				spread_url:'http://goxdpc.rt666.cn/orderpc/Reg.html?recommendCode'
			}
		},
		methods: {
			onCopyResult(type) {
				if (type==='success') {
					uni.showToast({ //提示
						title: '复制成功'
					})
				} else {
					uni.showToast({ //提示
						title: '复制失败'
					})
				}
			},
			// copy(value) {
			// 	//提示模板
			// 	uni.showModal({
			// 		content: value, //模板中提示的内容
			// 		confirmText: '复制内容',
			// 		success: () => { //点击复制内容的后调函数
			// 			//uni.setClipboardData方法就是讲内容复制到粘贴板
			// 			uni.setClipboardData({
			// 				data: value, //要被复制的内容
			// 				success: () => { //复制成功的回调函数
			// 					uni.showToast({ //提示
			// 						title: '复制成功'
			// 					})
			// 				}
			// 			});
			// 		}
			// 	});
			// }
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
		font-size:20px;
		line-height: 30px; font-weight: bold;
		color: #FF0; border-radius:25px;
		width: 80%;
		margin: 10px auto;
		background: rgba(7, 218, 245, .8);
		padding: 10px 20px;
	}

	.inviteNum {
		font-size:26px;
		line-height: 30px;
		color: yellow;
		text-align: center;
		width: 100%;margin-bottom: 10px;
	}

	.invitelinkbottom {
		width: 90%;
		text-align: center;
		position: absolute;
		bottom:10px;
		left: 30px;
	}

	.invitelink {
		width: 90%;
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
