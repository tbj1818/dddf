<template>
	<view class="page">
		<view class="listemes">
			<view class="content noborder">
				<view class="tittop noborder">
					<p class="tittle lineb">充值账号：1398765467</p>
					<p class="emesremark lineb"><em>充值时间：2020-05-25</em>
						<p>
							<p class="c-orange lineb">充值金额：￥14.00</p>
				</view>
			</view>
			<view class="tips subject-status-0">成功</view>
		</view>
		<view class="listemes">
			<view class="content noborder">
				<view class="tittop noborder">
					<p class="tittle lineb">充值账号：1398765467</p>
					<p class="emesremark lineb"><em>充值时间：2020-05-25</em>
						<p>
							<p class="c-orange lineb">充值金额：￥14.00</p>
				</view>
			</view>
			<view class="tips subject-status-0">成功</view>
		</view>
		<view class="listemes">
			<view class="content noborder">
				<view class="tittop noborder">
					<p class="tittle lineb">充值账号：1398765467</p>
					<p class="emesremark lineb"><em>充值时间：2020-05-25</em>
						<p>
							<p class="c-orange lineb">充值金额：￥14.00</p>
				</view>
			</view>
			<view class="tips subject-status-1">失败</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	export default {
		components: {},
		data() {
			return {
				moneyvalue: '',
				transactionnum: ''
			};
		},
		onNavigationBarButtonTap() {
			console.log("点击了自定义按钮");
		},
		components: {
			uniSteps
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
		line-height: 40px;
	}

	.noborder {
		border: 0;
	}
	.listemes{width: 95%;}
</style>
