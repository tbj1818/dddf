<template>
	<view class="page">
		<view class="wrapper center-container">
			<!-- 头部 -->
			<scroll-view class="wuc-tab" scroll-with-animation scroll-x :scroll-left="scrollLeft" @scroll="scroll">
				<view class="navbar">
					<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
					 @click="tabClick(index)">
						{{ item.text }}
					</view>
				</view>
			</scroll-view>
			<!-- 显示区域 -->
			<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
				<div class="listemes" v-for="(item,index) in orderList" :key="index">
					<div class="content">
						<div class="tittop">
							<div class="tittle">{{item.state}}订单：{{item.orderNo}}</div>
							<div class="emesremark c-grey flex"><em>注册手机号:{{item.studioName}}</em><em class="c-orange">价格:￥{{item.taskPrice}}</em></div>
						</div>
						<ul class="emeslistmark">
							<li class="flex"> 下单时间：{{item.createTime}} </li>
							<li class="flex"> 手续费：<em class="c-orange">(￥{{item.feePrice}})</em></li>
							<div class="van-row">
								<div class="van-col van-col--12">辅助对象：{{item.helpObj}}</div>
								<div class="van-col van-col--12" v-if="item.isFix==1" style="text-align: right;">是否定向：是</div>
								<div class="van-col van-col--12" v-if="item.isFix==0" style="text-align: right;">是否定向：否</div>
								<div class="van-col van-col--12">省份：{{item.chooseAreaName}}</div>
							</div>
							<li></li>
							<li></li>
						</ul>
						<view class="tips subject-status-1" v-if="item.orderState==1">等待扫码</view>
						<view class="tips subject-status-2" v-if="item.orderState==2">正在扫码</view>
						<view class="tips subject-status-3" v-if="item.orderState==3">等待确认</view>
						<view class="tips subject-status-4" v-if="item.orderState==4">订单纠纷</view>
						<view class="tips subject-status-5" v-if="item.orderState==5">订单完成</view>
						<view class="tips subject-status-1" v-if="item.orderState==6">订单失败</view>
						<view class="tips subject-status-2" v-if="item.orderState==7">超时退款</view>
						<!---->
						<!---->
					</div>
					<div class="checkstate">
						<div class="van-row">
							<div class="van-col van-col--12 textCenter" @click="enterorder(item.rowId,10,'确认')" style="border-right: 1px solid rgb(220, 220, 220);">确认</div>
							<div class="van-col van-col--12 textCenter" @click="enterorder(item.rowId,20,'失败')">失败</div>
						</div>
					</div>
				</div>
				<view class="loading">{{loadingText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../utils/http.js'
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				page: 1,
				scrollLeft: 0,
				oldScrollLeft: 0,
				orderList: [],
				navList: [{
						state: 0,
						text: '等待扫码',
						orderList: []
					},
					{
						state: 1,
						text: '正在扫码',
						orderList: []
					},
					{
						state: 2,
						text: '等待确认',
						orderList: []
					},
					{
						state: 3,
						text: '订单纠纷',
						orderList: []
					},
					{
						state: 4,
						text: '订单完成',
						orderList: []
					},
					{
						state: 6,
						text: '订单失败',
						orderList: []
					},
					{
						state: 7,
						text: '超时退款',
						orderList: []
					}
				],
				loadingText: '加载中...'
			};
		},
		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
			this.getorderListdata(1)
		},
		// 下拉刷新
		onPullDownRefresh() {
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
			this.getmorenews();
		},
		methods: {
			//顶部tab点击
			tabClick(index) {
				this.page=1;
				this.tabCurrentIndex =index;
				this.getorderListdata(this.tabCurrentIndex+1)
			},
			getorderListdata(orderId) {
				let infodata = {
					orderId:orderId,
					limit: 10,
					offset: this.page
				}
				util.sendPost('/appOrder/studioOrderList', infodata).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});

						this.page++;
						this.orderList.push(...res.data.data.list);
						if (res.data.data.list.length == 0) {
							console.log('已加载全部')
							uni.hideNavigationBarLoading();
							this.loadingText = '已加载全部';
							return false;
						}
						uni.hideNavigationBarLoading();
						// this.orderList = res.data.data.list
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			scroll: function(e) {
				this.oldScrollLeft = e.detail.scrollLeft
			},
			
			
			enterorder(orderId,type,text) {
				uni.showModal({
					title: '确定要'+text+'订单吗？',
					success: (res) => {
						if (res.confirm) {
							let btndata = {
								orderId: orderId,
								confirmType:type,
							}
							util.sendPost('/appOrder/confirmOrder', btndata).then((res) => {
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
						} else if (res.cancel) {
							uni.showToast({
								title: '您就竟然点击取消',
								icon: 'none',
							})
						}
					}
				})
			},
			// 如果列表滚动到底部将会立即触发这个事件重置 loadmore
			getmorenews: function() {
				console.log('已触底')
				uni.showToast({
					title: '触底开始加载',
					icon: 'success',
				})
				// if (this.loadingText != '' && this.loadingText != '已加载全部') {
				// 	console.log('return')
				// 	return false;
				// }
				uni.showNavigationBarLoading();
				this.getorderListdata()
			},
		}
	};
</script>
<style scoped lang="scss">
	.navbar {
		display: inline-block !important;
		width: 100%;
		height: 45px !important;
		flex-wrap: wrap;
		white-space: nowrap;
		/* 必要，导航栏才能横向*/
	}

	.navbar .nav-item.current {
		height: 38px !important;
	}

	.navbar .nav-item {
		flex: 0 0 130px !important;
		height: 40px;
		margin: 0 10px;
		line-height: 40px;
		flex-basis: 130px;
		display: inline-block !important;
		/* 必要，导航栏才能横向*/
	}
	.wuc-tab{background: #FFF;}
	.loading {
		text-align: center;
		line-height: 80px;
		padding-bottom: 60px;
		color: #000
	}

	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			position: relative;

			&.current {
				border-bottom: 3px solid orange;
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

	.uni-swiper-item {
		height: auto;
	}


	.page {
		margin: 0;
		padding: 0;
		height: 100%;
		background-color: #f8f8f8;
	}

	.listemes {
		width: 95%;
	}

	.uni-swiper-msg {
		padding: 0 10px;
		background: -webkit-gradient(linear, 0 0, 100% 0, from(#ff9924), to(#fe5300));
		color: #FFF;
	}

	.uni-swiper-wrapper {
		height: 50px;
		line-height: 50px;
	}

	uni-swiper {
		height: 40px;
		line-height: 40px;
	}

	.end-title {
		margin-top: 0;
	}

	.dis {
		margin: 0;
	}

	.uni-app--showtabbar {
		background: #f8f8f8;
	}

	uni-page-body {
		height: 100%;
	}

	.screenk {
		width: 100%;
		height: 50px;
		background: #FFF;
		line-height: 50px;
		text-align: left;
	}

	.uni-list-cell {
		display: flex;
		align-items: center;
	}
</style>
