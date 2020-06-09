<template>
	<view class="page">
		<view class="listemes list" v-for="(item,index) in rechargehisyoryList">
			<view class="content noborder">
				<view class="tittop noborder">
					<p class="tittle_fs16">{{item.tradeTypeName}}</p>
					<p class="emesremark lineb"><em>时间：{{item.createTime}}</em></p>
					<!-- <p class="c-orange lineb">变动后：￥{{item.tradeMoneyAfter}}</p> -->
				</view>
			</view>
			<view class="moneydetailstip">
				<text v-if="item.inOutFlag==0" class="c-green">+{{item.tradeMoney}}</text>
				<text v-if="item.inOutFlag==1"  class="c-red">-{{item.tradeMoney}}</text>
			</view>
		</view>
		<view class="loading">{{loadingText}}</view>
		<view v-if="rechargehisyoryList.length==0">
			<text class="nodataorder">
			</text>
			<text class="text-centernodata">暂无数据</text>
		</view>
		<ReturnTop></ReturnTop>
	</view>
</template>

<script>
	import ReturnTop from '@/components/ReturnTop'
	import util from '../../utils/http.js'
	export default {
		components: {
			ReturnTop
		},
		data() {
			return {
				rechargehisyoryList: [],
				page: 1,
				loadingText: '加载中...'
			};
		},
		onLoad() {
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
		},
		onShow() {},
		// 下拉刷新
		onPullDownRefresh() {
			this.getDetail()
			uni.showToast({
				title: '刷新成功',
				icon: 'success',
			})
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 上拉加载
		onReachBottom: function() {
			this.page++
			this.getDetail();
		},
		methods: {
			getDetail() {

				let data = {
					fromType: 2,
					limit: 10,
					offset: this.page
				}
				util.sendPost('/appMoneyFlowDetail/getDetail', data).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						// uni.showToast({
						// 	title: res.data.message,
						// 	icon: 'success',
						// });
						this.rechargehisyoryList.push(...res.data.data.folwList)
						if (res.data.data.folwList.length == 0) {
							// console.log('已加载全部')
							uni.hideNavigationBarLoading();
							this.loadingText = '已加载全部';
							return false;
						} else if (res.data.data.folwList.length < 3) {
							uni.hideNavigationBarLoading();
							this.loadingText = '';
						}
						uni.hideNavigationBarLoading();
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
		line-height: auto;
	}

	.noborder {
		border: 0;
	}

	.listemes {
		width: 95%;
	}

	.loading {
		text-align: center;
		line-height: 60px;
		color: #000
	}

	.tittle_fs16 {
		font-size: 16px;
		line-height: 32px;
	}

	.moneydetailstip {
		position: absolute;
		right: 20px;
		top: 10px;
		color: red;
		font-size: 18px;
	}
</style>
