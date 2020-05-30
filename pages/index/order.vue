<template>
	<view class="page">
		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<!-- 显示区域 -->
		<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
			<div class="listemes">
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
		</view>


	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				tabCurrentIndex: 0,
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
				]
			};
		},
		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
		},
		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			},
			enterorder(){
				uni.showModal({
					title: '确定要确认订单吗？',
					success: (res) => {
						if (res.confirm) {
						uni.showToast({
							title:'确认成功',
							icon: 'success',
						})
						}else if (res.cancel) {
							uni.showToast({
								title:'您就竟然点击取消',
								icon: 'none',
							})
						}
					}
				})
			}
		}
	};
</script>
<style scoped lang="scss">
	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {
		height: 100%;
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
				border-bottom:3px solid orange;
				color: #ff6034; font-weight: bold;
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

	.order-item {
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;

		.i-top {
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right: 30upx;
		
			position: relative;

			.time {
				flex: 1;
			}

			.state {
				
			}

			.del-btn {
				padding: 10upx 0 10upx 36upx;
				
				position: relative;

				&:after {
					content: '';
					width: 0;
					height: 30upx;
					
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}

		/* 多条商品 */
		.goods-box {
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;

			.goods-item {
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}

			.goods-img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}

		/* 单条商品 */
		.goods-box-single {
			display: flex;
			padding: 20upx 0;

			.goods-img {
				display: block;
				width: 120upx;
				height: 120upx;
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;

				.title {
				
					line-height: 1;
				}

				.attr-box {
				
					
					padding: 10upx 12upx;
				}

				.price {
				

					&:before {
						content: '￥';
					
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}

		.price-box {
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
		

			.num {
				margin: 0 8upx;
			
			}

			.price {
			

				&:before {
					content: '￥';
				
					margin: 0 2upx 0 8upx;
				}
			}
		}

		.action-box {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}

		.action-btn {
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
		
			background: #fff;
			border-radius: 100px;

			&:after {
				border-radius: 100px;
			}

			&.recom {
				background: #fff9f9;
			

				&:after {
					border-color: #f7bcc8;
				}
			}
		}
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

	.cityk {
		width: 80px;
		text-align: center;
	}

	.van-icon-arrow-down {
		margin-left: 10px;
	}

	.paixuBtn {
		padding: 0 10px;
		height: 30px;
		font-size: 12px;
		line-height: 30px;
		margin-right: 5px;
	}

	.classtask {
		width: 90%;
		padding: 10px;
		margin: 10px auto;
		background: #FFF;
		box-shadow: 0 0 8px #d2eeff;
		border-radius: 10px;
	}

	.classtask .h1 {
		width: 100%;
		text-align: left;
		font-size: 16px;
		height: 40px;
		line-height: 40px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.classtask .money {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ebedf0;
	}

	.classtask .money.noborder {
		border: 0;
	}

	.classtask .money .paixuBtn {
		padding: 0 15px;
		font-size: 14px;
	}

	.classtask .money .paixuBtnw100 {
		width: 100%;
		height: 38px;
		line-height: 38px;
		border-radius: 0;
		font-size: 14px;
	}

	.classtask .money .pText {
		line-height: 30px;
		text-align: left;
	}

	.classtask .money .rightText {
		text-align: right;
		color: red;
		font-size: 16px;
	}
</style>
