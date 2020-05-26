<template>
	<view class="page">
		
	about

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
