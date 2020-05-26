<template>
	<view class="page">
		
	
		<view class="end-cont" :class="{dis:btnnum == 0}">
			<view class="screenk">
				<view class="uni-list">
					<view class="uni-list-cell">
						<!-- <view class="uni-list-cell-left">
							地区：
						</view> -->
						<view class="uni-list-cell-db cityk">
							<picker @change="pickerChange($event,'industry')" :value="data.industry" :range="industryList" range-key="value">
								<view class="uni-input">{{industryList[data.industry].value}}<i class="van-icon van-icon-arrow-down"></i></view>
							</picker>
						</view>
						<button type="primary" class="paixuBtn">价格排序</button>
						<button type="primary" class="paixuBtn">成功率排序</button>
						<button type="primary" class="paixuBtn">自动抢单</button>
						<button type="primary" class="paixuBtn">刷新</button>
					</view>
					<view class="classtask">
						<view class="money">
							<section class="van-col van-col--12 flex ">
								扫码任务<button type="primary" class="paixuBtn green-bg">进行中</button>
							</section>
							<section class="van-col van-col--12 rightText">
								倒计时：05：48
							</section>
						</view>
						<view class="h1">任务ID：2019874447411534234dfsdcx <button type="primary" class="paixuBtn">复制</button></view>
						<view class="money">
							<section class="van-col van-col--24">
								<view class="pText">辅助号码：</view>
								<view class="pText">任务类型：二维码任务</view>
								<view class="pText">任务地区：陕西</view>
								<view class="pText">领取时间：2015-12-14  15:21:21</view>
							</section>
							<section class="van-col van-col--6 rightText">
								赏金：￥3434
							</section>
						</view>
						<view class="money">
							<section class="van-col van-col--12 flex ">
								<button type="warn" class="paixuBtnw100 grey-6-bg">放弃任务</button>
							</section>
							<section class="van-col van-col--12 rightText">
								<button type="warn" class="paixuBtnw100">立即抢单</button>
							</section>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="end-cont" :class="{dis:btnnum == 1}">
			　22222
		</view>
		<view class="end-cont" :class="{dis:btnnum == 2}">
			　333
		</view>
		<view class="end-cont" :class="{dis:btnnum == 3}">
			　444
		</view>


	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				btnnum: 0,
				msg: [1, 2, 3, 4, 5],
				data: {
					industry: 0,
					healthy: 0,
				},
				industryList: [{
						name: "0",
						value: "陕西"
					},
					{
						name: "1",
						value: "广东"
					},
					{
						name: "2",
						value: "台湾"
					},
				],

			};
		},
		methods: {
			change(e) {
				this.btnnum = e
				console.log(this.btnnum)
			},
			pickerChange: function(e, val) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.data[val] = e.target.value
			},
		}
	};
</script>
<style scoped>
	.page {
		margin: 0;
		padding: 0;
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
		width: 100%;height:38px; line-height: 38px; border-radius: 0;
		font-size: 14px;
	}
	.classtask .money .pText{line-height: 30px; text-align: left;}
	.classtask .money .rightText {
		text-align: right;
		color: red;
		font-size: 16px;
	}
</style>
