<template>
	<view class="content">
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择开始日期" fields="year" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择开始日期" fields="month" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择开始日期" fields="day" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择开始日期" fields="hour" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择开始日期" fields="minute" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择日期时间" defaultValue="2020-10-08 15:18" start="2000-01-01" end="2100-01-01" fields="minute" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
		<view class="row">
			<text class="label">选择日期：</text>
			<view class="value"><BiaofunDatetimePicker placeholder="请选择日期时间" defaultValue="2020-05-08 18:18" start="2000-01-01" end="2100-01-01" fields="minute" @change="changeDatetimePicker"></BiaofunDatetimePicker></view>
			<image src="../../static/images/icons/icon-right.png" mode="widthFix" class="icon-right"></image>
		</view>
	</view>
</template>

<script>
import BiaofunDatetimePicker from '@/components/biaofun-datetime-picker/biaofun-datetime-picker.vue';
export default {
	/**
	 * 组件
	 */
	components: {
		BiaofunDatetimePicker
	},

	/**
	 * 数据
	 */

	data() {
		return {
			title: 'Hello',
		};
	},

	/**
	 * 页面加载
	 */
	onLoad() {
		
	},

	/**
	 * 方法
	 */

	methods: {
		/**
		 * 选择日期时间
		 * @param {Object} date 日期数据
		 */ 
		changeDatetimePicker(date) {
			console.log(date);
		}
	}
};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	align-items: center;
	font-size: 30upx;
	height: 100upx;
	padding: 0 30upx;
	position: relative;
}

.row:after {
	content: '';
	width: calc(100% - 60upx);
	height: 1px;
	left: 30upx;
	bottom: 0;
	background: #e4e5e6;
	z-index: 10;
	position: absolute;
}

.label {
	flex-shrink: 0;
}

.value {
	flex: 1;
	padding: 0 16upx;
}

.icon-right {
	width: 30upx;
	height: 30upx;
	flex-shrink: 0;
}
</style>
