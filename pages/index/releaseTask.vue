<template>
	<view class="page bg-grey">
		<view class="wrapper task">
			<view class="uni-form-item uni-column" style="position: relative;">
				<view class="title"><i class="iconfont icon-shouji"></i>账户余额</view>
				<input class="uni-input" v-model="moneyValue" type="number" placeholder="请输入金额" />
				<button type="primary" class="yzhmbtn orange-red-bg" @click="toSubPage('/pages/index/recharge')">充值</button>
			</view>
			<view class="uni-form-item uni-column" style="position: relative; display: inline-block;width: 100%;">
				<view class="title"><i class="van-icon van-icon-gold-coin-o"></i>设置佣金<text class="c-orange fs16">(任务手续费按5%收取)</text></view>
				<input class="uni-input" @input="rateValuedata" v-model="ratedata" type="number" placeholder="请输入佣金" />
				<!-- 不可点击状态 -->
				<view class="ratewidth">
					<view class="ratebg" :style="{ width: rateValue*20 + '%' }"></view>
				</view>
				<!-- <uni-rate  ref="rateStar" :value="rateValue"></uni-rate> -->
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="van-icon van-icon-friends-o"></i>辅助对象</view>
				<input class="uni-input" v-model="fzhdx" type="number" placeholder="请输入辅助对象" />
			</view>
			<view class="uni-form-item uni-column flex" style="height:60px;border-bottom: #dcdcdc solid 1px;">
				<view class="title"><i class="van-icon van-icon-location-o"></i>选择地区</view>
				<picker @change="pickerChange($event,'industry')" :value="data.industry" :range="industryList" range-key="value">
					<view class="uni-input noborder" style="flex:1; margin-left:20px">{{industryList[data.industry].value}}<i class="van-icon van-icon-arrow-down"></i></view>
				</picker>
			</view>
			<view class="uni-form-item uni-column" style=" display: inline-block;width: 100%;" v-if="type==1">
				<view class="title"><i class="van-icon van-icon-photo-o"></i>上传二维码</view>
				<progress :percent="percent" strock-width="10"></progress>
				<view class="flex">
					<image class="headimgsize" :src="changeimg" mode=""></image>
					<button type="primary" class="uploadBtn" @tap="cI">点击上传</button>
				</view>
			</view>
			<view class="uni-form-item uni-column" v-if="type==1">
				<view class="title"><i class="van-icon van-icon-qr"></i>二维码地址</view>
				<input class="uni-input" v-model="qrcodeAdress" type="number" placeholder="请输入地址" />
			</view>
			<button type="primary" class="uni-buttonlogin orange-red-bg" @click="getdata">发布任务</button>
		</view>
	</view>
</template>

<script>
	// import uniRate from "@/components/uni-rate/uni-rate.vue"
	import util from '@/utils/http.js'
	export default {
		data() {
			return {
				moneyValue: '',
				fzhdx: '',
				qrcodeAdress: '',
				ratedata: '',
				type: '',
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
				percent: 0,
				rateValue: 0,
				changeimg: 'https://img2.woyaogexing.com/2019/12/22/6a78aeadbf7f4a32825f3486c692b811!400x400.jpeg', // 更改后的头像
			};
		},
		components: {
			// uniRate
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.type); //打印出上个页面传递的参数。
			this.type = option.type
		},
		watch: {
			ratedata(e) {
				this.rateValue = e;
				// console.log(this.rateValue)
			}
		},
		methods: {
			pickerChange: function(e, val) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.data[val] = e.target.value
			},
			rechargeBtn() {
				uni.showToast({
					title: '充值成功',
					icon: 'success',
					duration: 2000
				})
			},
			toSubPage(path) {
				util.navigateToPath(path)
			},
			cI: function() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						this.changeimg = tempFilePaths[0]
						uni.uploadFile({
							url: app.apiUrl + 'small/index/indexdata', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'headimgurl',
							formData: {
								openid: uni.getStorageSync('openid')
							},
							success: (res) => {
								console.log(JSON.parse(res.data))
								var res = JSON.parse(res.data)
								if (res.status) {
									app.getUserData() //这里调用用户信息接口更新数据存进vuex
									uni.showToast({
										title: res.msg,
										icon: 'none',
										duration: 2000
									})
								} else {
									uni.showToast({
										title: res.msg,
										icon: 'none',
										duration: 2000
									})
								}
							}
						});
					}
				});
			},
			rateValuedata(e) {
				console.log(e)
				this.rateValue = e.detail.value
				console.log(this.rateValue)
			},
			getdata() {
				uni.showToast({
					title: '发布成功',
					icon: 'success',
					duration: 2000
				})
				setTimeout(function() {
					uni.switchTab({
						url: '/pages/index/index'
					});
				}, 1000)

			}
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

	.uploadBtn {
		width: 120px;
		height: 40px;
		line-height: 40px
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

	.task {
		margin:0 auto;
	}

	.headimgsize {
		width: 100px;
		height: 100px;
		margin: 10px 20px
	}

	.ratewidth {
		height: 10px;
		width: 150px;
		position: absolute;
		right: 0;
		bottom: 10px;
		border: 1px solid #dcdcdc;
	}

	.ratebg {
		background: orange;
		position: absolute;
		left: 0;
		top: 0;
		height: 10px;
	}
</style>
