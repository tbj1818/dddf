<template>
	<view class="page">
		<view class="listemes" v-for="(item,index) in rechargehisyoryList">
			<view class="content noborder">
				<view class="tittop noborder">
					<p class="tittle_fs16">订单号：{{item.orderNo}}</p>
					<p class="emesremark lineb"><em>充值时间：{{item.createTime}}</em>
						<p>
							<p class="c-orange lineb">充值金额：￥{{item.rechargeFee}}</p>
				</view>
			</view>
			<view v-if="item.orderStat==10" class="tips subject-status-1">受理中</view>
			<view v-if="item.orderStat==20" class="tips subject-status-0">充值成功</view>
			<view v-if="item.orderStat==30" class="tips subject-status-2">充值失败</view>
		</view>
		
	</view>
</template>

<script>
	import util from '../../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				rechargehisyoryList: [],
			};
		},
		onShow() {
			this.getinfo()
		},
		methods: {
			getinfo() {
				util.sendPost('/appRecharge/getOrderList', {}).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
						this.rechargehisyoryList=res.data.data.orderList
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
	.uni-steps__row-text {
		padding: 0 10px;
	}

	.uni-steps__row-circle {
		width: 10px;
		height: 10px;
	}

	.alipay_pic {
		width: 60%;
		margin: 10px auto;
	}

	.alipay_pic img {
		width: 100%;
		text-align: center;
	}

	.uni-form-item {
		padding: 0 16px;
	}

	.lineb {
		line-height:auto;
	}

	.noborder {
		border: 0;
	}

	.listemes {
		width: 95%;
	}
	.tittle_fs16{font-size: 16px; line-height: 32px;}
</style>
