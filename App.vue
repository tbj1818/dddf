<script>
	var app;
	export default {
		onLaunch: function() {
			console.log('App Launch')
			app = getApp();
			uni.removeStorage({
				key: 'accountInfo'
			})
		},
		onShow: function() {
			console.log('App Show')
			uni.getSystemInfoSync({
				success(res) {
					app.globalData.systemInfo = res
				}
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	};
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './static/css/common.css';
	@import './static/font/iconfont.css';
	@import './wxcomponents/vant-weapp/common/index.wxss';
	@import './wxcomponents/vant-weapp/icon/index.wxss';
	@import './wxcomponents/vant-weapp/cell/index.wxss';
	@import './wxcomponents/vant-weapp/tabbar/index.wxss';
	@import './wxcomponents/vant-weapp/col/index.wxss';
	@import './wxcomponents/vant-weapp/picker/index.wxss';
	@import './wxcomponents/vant-weapp/tag/index.wxss';
</style>
