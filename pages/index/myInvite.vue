<template>
	<view class="page">
		<view class="invitelist">
			<view class="listLi" style="flex:0 0 60px">序号</view>
			<view class="listLi">卡商账号</view>
			<view class="listLi">注册时间</view>
			<view class="listLi">成功订单数</view>
		</view>
		<view class="invitelist">
			<view class="listLi" style="flex:0 0 60px">1</view>
			<view class="listLi">133456788888</view>
			<view class="listLi">2020-03-13</view>
			<view class="listLi c-orange">26</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {


			};
		},
		onLoad: function() {

		},
		methods: {


		}
	};
</script>

<style scoped>
.invitelist{width: 95%; margin: 10px auto; display: flex; border-bottom: 1px solid #dcdcdc; padding: 10px 0;}
.listLi{flex: 1; text-align: center;}
</style>
