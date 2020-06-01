<template>
	<view class="page">
		<view class="wrapper center-container">
			<!-- 头部 -->
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
				 @click="tabClick(index)">
					{{ item.text }}
				</view>
			</view>
			<!-- 显示区域 -->

			<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
				<div class="listemes" v-for="(item,index) in orderList" :key="index">
					<div class="content">
						<div class="tittop">
							<div class="tittle">{{item.state}}订单：4511441</div>
							<div class="emesremark c-grey flex"><em>注册手机号:13991186788</em><em class="c-orange">价格:￥14.00</em></div>
						</div>
						<ul class="emeslistmark">
							<li class="flex"> 下单时间：2020-05-20 10:03:33 <em class="c-orange">(持续：24个月)</em></li>
							<li class="flex"> 手续费：<em class="c-orange">(￥5.00)</em></li>
							<div class="van-row">
								<div class="van-col van-col--12">辅助对象：13244567898</div>
								<div class="van-col van-col--12" style="text-align: right;">是否定向：是</div>
								<div class="van-col van-col--12">省份：陕西</div>
								<div class="van-col van-col--12" style="text-align: right;">备注：用户申诉
								</div>
							</div>
							<li></li>
							<li></li>
						</ul>
						<div class="tips subject-status-1">等待扫码</div>
						<!---->
						<!---->
					</div>
					<div class="checkstate">
						<div class="van-row">
							<div class="van-col van-col--12 textCenter" @click="enterorder" style="border-right: 1px solid rgb(220, 220, 220);">确认</div>
							<div class="van-col van-col--12 textCenter">失败</div>
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
				orderList: [],
				navList: [{
						state: 0,
						text: '全部',
						orderList: []
					},
					{
						state: 1,
						text: '待付款',
						orderList: []
					},
					{
						state: 2,
						text: '待收货',
						orderList: []
					},
					{
						state: 3,
						text: '待评价',
						orderList: []
					},
					{
						state: 4,
						text: '售后',
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
			this.getorderListdata()
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
			getorderListdata() {
				let infodata = {
					orderType: 1,
					orderState:1
				}
				util.sendPost('/appOrder/orderList', infodata).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
						this.userinfo = res.data.data
						console.log(this.userinfo)
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			},
			enterorder() {
				uni.showModal({
					title: '确定要确认订单吗？',
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
			},
			// 如果列表滚动到底部将会立即触发这个事件重置 loadmore

			getmorenews: function() {
				console.log('已触底')
				uni.showToast({
					title: '触底加载成功',
					icon: 'success',
				})
				console.log(this.loadingText)
				// if (this.loadingText != '' && this.loadingText != '已加载全部') {
				// 	console.log('return')
				// 	return false;
				// }
				uni.showNavigationBarLoading();
				let infodata = {
					fromType: 2,
					fromPage: 20
				}
				util.sendPost('/appUser/getUserInfo', infodata).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						if (!res.data.data) {
							uni.hideNavigationBarLoading();
							this.loadingText = '已加载全部';
							return false;
						}
						this.page++;
						this.newsList = this.newsList.concat(res.data.split('--hcSplitor--'));
						this.loadingText = '加载更多';
						uni.hideNavigationBarLoading();
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
		}
	};
</script>
<style scoped lang="scss">
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
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
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
