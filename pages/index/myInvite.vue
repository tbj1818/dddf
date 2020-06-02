<template>
	<view class="page">
		<view class="invitelist">
			<view class="listLi" style="flex:0 0 30px">序号</view>
			<view class="listLi">卡商账号</view>
			<view class="listLi">注册时间</view>
			<view class="listLi" style="flex:0 0 80px">成功订单数</view>
		</view>
		<view class="invitelist" v-for="(item,index) in orderList" :key="index">
			<view class="listLi c-grey" style="flex:0 0 30px">{{index+1}}</view>
			<view class="listLi">{{item.userAccount}}</view>
			<view class="listLi">{{item.regTime}}</view>
			<view class="listLi c-orange" style="flex:0 0 80px">{{item.totalSuccess}}</view>
		</view>
	</view>
</template>

<script>
		import util from '../../utils/http.js'
	export default {
		components: {},
		data() {
			return {
				orderList:[]
			};
		},
		onLoad: function() {
				this.getOrderList()
		},
		methods: {
			getOrderList(){
				util.sendPost('/appStudioInfo/getInviteRecord', {}).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
						});
						this.orderList = res.data.data.list
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
.invitelist{width: 95%; margin: 10px auto; display: flex; border-bottom: 1px solid #dcdcdc; padding: 10px 0;}
.listLi{flex: 1; text-align: center;}
</style>
