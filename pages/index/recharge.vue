<template>
	<view class="page">
		<view class="uni-stepsMar">
			<!-- 基本用法 -->
			<uni-steps :options="[{title: '查看充值流程，必看'}, {title: '打开支付宝扫码'}, {title: '输入交易订单号'}, {title: '等待平台确认'}]" :active="1"></uni-steps>
			<view class="van-tag van-tag--round van-tag--danger marT20">
				<i class="van-icon van-icon-warning-o" style="line-height: inherit; padding: 0px 10px; color: rgb(255, 255, 255); font-size: 20px;">
				</i>支付宝收款信息(*转帐前请认真核实账户信息，以免造成财产损失!)</view>
		</view>
		<view class="van-cell van-cell--clickable">
			<i class="van-icon van-icon-alipay" style="font-size: 24px; vertical-align: middle; color: #666;"></i>
			<view class="van-cell__title"><span>收款账号</span></view>
			<view class="van-cell__value"><span>{{rechargeaccount}}</span></view>
		</view>
		<view class="alipay_pic">
			<img :src="qrCode" />
		</view>
		<view class="uni-form-item uni-column" style="position:relative; display: inline-block;width: 100%;">
			<view class="title">
				<i class="van-icon van-icon-gold-coin" style="font-size: 24px; vertical-align: middle;color: #666;"></i>充值金额
			</view>
			<input class="uni-input" v-model="moneyvalue" type="number" placeholder="请输入充值金额" />
		</view>
		
		<view class="uni-form-item uni-column"  style="position:relative; display: inline-block;width: 100%;">
			<view class="title">
				<i class="van-icon van-icon-balance-list" style="font-size: 24px; vertical-align: middle;color: #666;"></i>交易号<text class="van-tag van-tag--round van-tag--primary margin marL10 fs14">手机版支付宝叫订单号，电脑版叫交易号</text>
			</view>
			<input class="uni-input" maxlength="11" v-model="transactionnum" type="number" placeholder="请输入交易号" />
		</view>

		<button type="primary" class="uni-buttonlogin orange-red-bg" @click="getdata">确认提交</button>
	</view>
</template>

<script>
	import util from '../../utils/http.js'
	export default {
		data() {
			return {
				moneyvalue: '',
				transactionnum: '',
				rechargeaccount:'',
				qrCode:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1910947350,633103490&fm=26&gp=0.jpg'
			};
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/index/rechargeHistory'
			});
		},
		onShow() {
			this.getrechargeinfo()
		},
		methods: {
			getrechargeinfo() {
				util.sendPost('/appRecharge/rechargeAccount', {}).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
						this.rechargeaccount=res.data.data.account
						this.qrCode=res.data.data.qrCode
						
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			getdata() {
				let rechargeinfo = {
					rechargeValue: this.moneyvalue,
					thirdOrderNo: this.transactionnum
				}
				util.sendPost('/appRecharge/recharge', rechargeinfo).then((res) => {
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
			}
		}
	};
</script>
<style scoped>
	.alipay_pic {
		width: 30%;
		margin: 10px auto;
	}

	.alipay_pic img {
		width: 100%;
		text-align: center;
	}

	.van-cell {
		padding: 0;
	}
</style>
