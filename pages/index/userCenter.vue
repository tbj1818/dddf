<template>
	<view class="page bg-grey">
		<view class="wrapper center-container">
			<view class="content">
				<view class="cells van-cell-group">
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>我的账号</span></view>
						<view class="van-cell__value"><span>{{userinfo.account}}</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>QQ号</span></view>
						<view class="van-cell__value"><span>{{userinfo.linkQq}}</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>微信号</span></view>
						<view class="van-cell__value"><span>{{userinfo.linkWx}}</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>我的邀请码</span></view>
						<view class="van-cell__value"><span>{{userinfo.inviteCode}}</span></view>
					</view>
					<text class="lineText c-blue">修改登录密码</text>
				</view>
				<view class="cells van-cell-group marT20">
					<text class="lineText c-black">收款信息</text>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>支付宝账号</span></view>
						<view class="van-cell__value"><span>{{userinfo.linkZfb}}</span></view>
					</view>
					<view class="van-cell van-cell--clickable">
						<view class="van-cell__title"><span>真实姓名</span></view>
						<view class="van-cell__value"><span>{{userinfo.realName}}</span></view>
					</view>
					<text class="lineText c-blue">修改支付信息</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
		import util from '@/utils/http.js'
	export default {
		components: {},
		data() {
			return {
				userinfo:{}
			};
		},
		onShow() {
			this.getuserInfo()
		},
		methods: {
			getuserInfo(){
				let infodata={
					fromType:2,
					fromPage:20
				}
					util.sendPost('/appUser/getUserInfo', infodata).then((res)=> {
						console.log(res)
						if (res.data.code == 0) {
							uni.showToast({
								title: res.data.message,
								icon: 'success',
							});
							this.userinfo=res.data.data
							
							// console.log(this.balance)
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
<style scoped>
	.van-col--12 {
		align-self: center;
	}

	.numthree h1 {
		font-size: 22px;
		font-weight: bold;
	}

	.center-container .content .top .avatar {
		width: 50px;
		height: 50px;
		margin-right: 10px;
		border-radius: 100%
	}

	.center-container .content .top .star-box {
		text-align: center;
		line-height: 18px;
		border-radius: 9px;
		background-color: #fff;
		color: #fe6a03;
		padding: 1px 2px
	}

	.center-container .content .cells .van-cell {
		align-items: center
	}
</style>

