<template>
	<view class="page wrapper">
		<view class="page_header">
			<view class="van-cell van-field">
				<view class="van-cell__title"><span>选择日期</span></view>
				<view class="value">
					<picker mode="date" :value="datevalue" :start="startDate" :end="endDate" @change="onSelected">
						<view class="uni-input">{{datevalue}}</view>
					</picker>
				</view>
				<i class="van-icon van-icon-arrow van-cell__right-icon"></i>

			</view>
			<!-- 头部 -->
			<scroll-view class="wuc-tab" scroll-with-animation scroll-x :scroll-left="scrollLeft" @scroll="scroll">
				<view class="navbar">
					<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
					 @click="tabClick(index)">
						{{ item.text }}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 显示区域 -->
		<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
			<view class="listemes" v-for="(item,index) in orderList" :key="index">
				<view class="content">
					<view class="tittop">
						<view class="tittle">{{item.state}}订单：{{item.orderNo}}</view>
						<view class="emesremark c-grey flex"><em>注册手机号:{{item.studioName}}</em><em class="c-orange">价格:￥{{item.taskPrice}}</em></view>
					</view>
					<ul class="emeslistmark">
						<li class="flex"> 下单时间：{{item.createTime}} </li>
						<li class="flex"> 手续费：<em class="c-orange">(￥{{item.feePrice}})</em></li>
						<view class="van-row">
							<view class="van-col van-col--12">辅助对象：{{item.helpObj}}</view>
							<view class="van-col van-col--12" v-if="item.isFix==1" style="text-align: right;">是否定向：是</view>
							<view class="van-col van-col--12" v-if="item.isFix==0" style="text-align: right;">是否定向：否</view>
							<view class="van-col van-col--12" v-if="item.isFix==1">省份：{{item.chooseAreaName}}</view>
						</view>
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
				</view>
				<view class="checkstate" v-if="item.orderState==3">
					<view class="van-row">
						<view class="van-col van-col--12 textCenter" @click="enterorder(item.rowId,10,'确认')" style="border-right: 1px solid rgb(220, 220, 220);">确认</view>
						<view class="van-col van-col--12 textCenter" @click="enterorder(item.rowId,20,'失败')">失败</view>
					</view>
				</view>
			</view>
			<view class="loading">{{loadingText}}</view>
			<view v-if="orderList.length==0">
				<text class="nodataorder">
				</text>
				<text class="text-centernodata">暂无数据</text>
			</view>
			<ReturnTop></ReturnTop>
		</view>

	</view>
	</view>
</template>

<script>
	import util from '../../utils/http.js'
	import ReturnTop from '@/components/ReturnTop'
	import {
		parseTime
	} from '../../utils/index.js'
	export default {
		components: {
			ReturnTop
		},
		data() {
			return {
				tabCurrentIndex: 0,
				page: 1,
				scrollLeft: 0,
				oldScrollLeft: 0,
				orderList: [],
				showPicker: false,
				startDate: '2020-01-01',
				endDate: '',
				datevalue: parseTime(new Date()),
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
			// this.getorderListdata(this.tabCurrentIndex + 1, this.datevalue)
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.page = 1;
			this.orderList = [];
			this.getorderListdata(this.tabCurrentIndex + 1, this.datevalue)
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
				console.log(this.datevalue)
				this.page = 1;
				this.tabCurrentIndex = index;
				this.orderList = [];
				this.getorderListdata(this.tabCurrentIndex + 1, this.datevalue)
			},
			getorderListdata(orderId, startTime) {
				let infodata = {
					orderState: orderId,
					startTime: startTime,
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
						
						this.orderList.push(...res.data.data.list);
						if (res.data.data.list.length == 0) {
							// console.log('已加载全部')
							uni.hideNavigationBarLoading();
							this.loadingText = '已加载全部';
							return false;
						}else if(res.data.data.list.length <10){
							uni.hideNavigationBarLoading();
							this.loadingText = '已加载全部';
						}
							this.page++;
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
			onSelected(date) { //选择
				console.log(date.target.value)
				// this.type = type;
				this.datevalue = date.target.value;
				this.page = 1;
				this.orderList = [];
				this.getorderListdata(this.tabCurrentIndex + 1, this.datevalue)

			},
			enterorder(orderId, type, text) {
				uni.showModal({
					title: '确定要' + text + '订单吗？',
					success: (res) => {
						if (res.confirm) {
							let btndata = {
								orderId: orderId,
								confirmType: type,
							}
							util.sendPost('/appOrder/confirmOrder', btndata).then((res) => {
								console.log(res)
								if (res.data.code == 0) {
									uni.showToast({
										title: res.data.message,
										icon: 'success',
									});
									this.page=1;
									this.orderList = [];
									this.getorderListdata(this.tabCurrentIndex + 1, this.datevalue)	
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
					title: '已触底',
					icon: 'success',
				})
				if (this.loadingText == '已加载全部') {
					console.log('return')
					return false;
				}
				uni.showNavigationBarLoading();
				this.getorderListdata(this.tabCurrentIndex + 1, this.datevalue)
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

	.wuc-tab {
		background: #FFF;
	}

	.loading {
		text-align: center;
		line-height: 60px;
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

	.list {
		padding-bottom: 60px;
		padding-top: 90px;
	}

	.listemes {
		width: 95%;
	}

	.uni-swiper-msg {
		padding: 0 10px;
		background: -webkit-gradient(linear, 0 0, 100% 0, from(#ff9924), to(#fe5300));
		color: #FFF;
	}

	.van-cell {
		margin-top: 0;
		line-height: 46px;
		align-items: center;
		padding-top: 0;
		padding-bottom: 0;
	}

	.van-cell__value {
		text-align: center;
		line-height: 46px;
	}

	.van-field__body {
		display: flex;
		align-items: center;
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

	.page_header {
		position: fixed;
		width: 100%;
		left: 0;
		top: var(--window-top);
		z-index: 1;
	}
</style>
