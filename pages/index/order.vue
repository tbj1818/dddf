<template>
	<view class="page">
		<view class="end-title">
			　<view @tap="change(0)" :class="{btna:btnnum == 0}">扫码任务单</view>
			　<view @tap="change(1)" :class="{btna:btnnum == 1}">手机号订单</view>
		</view>
		<view class="end-cont" :class="{dis:btnnum == 0}">
			<div class="listemes">
				<div class="content">
					<div class="tittop">
						<div class="tittle">订单：4511441</div>
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
						<div class="van-col van-col--12 textCenter" style="border-right: 1px solid rgb(220, 220, 220);">确认</div>
						<div class="van-col van-col--12 textCenter">失败</div>
					</div>
				</div>
			</div>
		</view>
		<view class="end-cont" :class="{dis:btnnum == 1}">
			<div class="listemes">
				<div class="content">
					<div class="tittop">
						<div class="tittle">手机订单：4511441</div>
						<div class="emesremark c-grey"><em>注册手机号:13991186788</em><em class="c-orange">价格:￥14.00</em></div>
					</div>
					<ul class="emeslistmark">
						<li  class="flex"> 下单时间：2020-05-20 10:03:33 <em class="c-orange">(持续：24个月)</em></li>
						<li  class="flex"> 手续费：<em class="c-orange">(￥5.00)</em></li>
						<div class="van-row">
							<div class="van-col van-col--12">辅助对象：13244567898</div>
							<div class="van-col van-col--12" style="text-align: right;">是否定向：是</div>
							<div class="van-col van-col--12">省份：陕西</div>
							<div class="van-col van-col--12" style="text-align: right;">备注：用户申诉
							</div>
						</div>
					</ul>
					<div class="tips subject-status-0">正在扫码</div>
					<!---->
					<!---->
				</div>
				<div class="checkstate">
					<div class="van-row">
						<div class="van-col van-col--12 textCenter" style="border-right: 1px solid rgb(220, 220, 220);">确认</div>
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
				btnnum: 0,
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
		height: 100%;
		background-color: #f8f8f8;
	}
	.listemes{width: 95%;}
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
	.uni-app--showtabbar{background: #f8f8f8;}
	uni-page-body{height: 100%;}
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
