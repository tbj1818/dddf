<template>
	<view class="page">
		<view class="h1">
			公告信息
		</view>
		<ul class="ulistnote">
			<li v-for="(item,index) in noteinfo" :key="index" @click="shownotes(item)">
				<view>
					<h1>{{item.title}}</h1>
					<p>{{item.content}}</p>
				</view>
				<i class="van-icon van-icon-arrow van-cell__right-icon"></i>
			</li>
		</ul>
	</view>
</template>

<script>
	import util from '../../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				noteinfo: []
			};
		},
		onShow() {
			this.getinfo()
		},
		methods: {
			getinfo() {
				let infodata = {
					fromType: 2,
					sourceType: 20
				}
				util.sendPost('/appAffiche/afficheList', infodata).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						this.noteinfo = res.data.data
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
			},
			shownotes(info) {
				uni.showModal({
					title: info.title,
					content: info.content,
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						}
					}
				});
			}
		}
	};
</script>

<style scoped>
	.ulistnote {
		width: 90%;
		margin: 0 auto;
	}

	.ulistnote li {
		border-bottom: #dcdcdc solid 1px;
		margin: 10px auto;
		display: flex;
		align-items: center;
		justify-content: space-between
	}

	.ulistnote li h1 {
		width: 100%;
		line-height: 30px;
		font-size: 16px;
	}

	.ulistnote li p {
		width: 100%;
		line-height: 28px;
		font-size: 14px;
		color: #999;
	}

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
		margin: 20px auto;
	}
</style>
