<template>
	<view class="page bg-grey">
		<view class="wrapper task">
			<view class="uni-form-item uni-column" style="position: relative;">
				<view class="title"><i class="iconfont icon-shouji"></i>账户余额</view>
				<input class="uni-input fs18" v-model="moneyValue" disabled="true" type="number" placeholder="请输入金额" />
				<button type="primary" class="yzhmbtn orange-red-bg" @click="toSubPage('/pages/index/recharge')">充值</button>
			</view>
			<view class="uni-form-item uni-column" style="position: relative; display: inline-block;width: 100%;">
				<view class="title"><i class="van-icon van-icon-gold-coin-o"></i>设置佣金<text class="c-orange fs16">(任务手续费按5%收取)</text></view>
				<input class="uni-input"  @input="rateValuedata" v-model="ratedata" type="number" placeholder="请输入佣金" />
				<!-- 不可点击状态 -->
				<!-- <view class="ratewidth">
					<view class="ratebg" :style="{ width: rateValue*20 + '%' }"></view>
				</view> -->
				<!-- <uni-rate  ref="rateStar" :value="rateValue"></uni-rate> -->
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><i class="van-icon van-icon-friends-o"></i>辅助对象</view>
				<input class="uni-input" v-model="helpObj" type="text" placeholder="请输入辅助对象" />
			</view>
			<view class="uni-form-item uni-column flex" style="height:60px;border-bottom: #dcdcdc solid 1px;">
				<view class="title"><i class="van-icon van-icon-location-o"></i>选择地区</view>
				<picker v-if="isFix" @change="pickerChange($event,'industry')" :value="data.industry" :range="industryList" range-key="label">
					<view class="uni-input noborder" style="flex:1; margin-left:20px" v-if="industryList[data.industry]">{{industryList[data.industry].label}}<i class="van-icon van-icon-arrow-down"></i></view>
				</picker>
				<view style="margin-left:50px">
					是否定向
					<switch class="marL10" checked @change="switch1Change" />
				</view>
				 
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
				<input class="uni-input" v-model="qrcodeAdress" type="text" placeholder="请输入地址" />
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
				qrcodeAdress: '',
				ratedata: '',
				type: '',
				isFix:1,
				chooseAreaId: '',
				chooseAreaName: '',
				helpObj:'',
				data: {
					industry: 0,
					healthy: 0,
				},
				industryList: [],
				percent: 0,
				rateValue: 0,
				changeimg: 'https://img2.woyaogexing.com/2019/12/22/6a78aeadbf7f4a32825f3486c692b811!400x400.jpeg', // 更改后的头像
			};
		},
		components: {
			// uniRate
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			// console.log(option.type); //打印出上个页面传递的参数。
			this.type = option.type
			this.moneyValue = option.balance
			this.getmatchNeedDcit()
		},
		watch: {
			ratedata(e) {
				this.rateValue = e;
				// console.log(this.rateValue)
			}
		},
		methods: {
			 switch1Change: function (e) {
			            // console.log('switch1 发生 change 事件，携带值为', e.target.value)
						if(e.target.value){
							this.isFix=1
						}else{
							this.isFix=0
							
						}
			        },
			pickerChange: function(e, val) {
				console.log(e.target.value)
				this.data[val] = e.target.value
				this.chooseAreaId = this.industryList[e.target.value].value
				this.chooseAreaName = this.industryList[e.target.value].label
			},
			getmatchNeedDcit() {
				util.sendPost('/appBaseType/matchNeedDcit', '').then((res) => {
					// console.log(res)
					if (res.data.code == 0) {
						this.industryList = res.data.data.region
					}
				}).catch(res => {
					uni.showToast({
						title: '请求失败',
						icon: 'none',
					});
				})
			},
			rechargeBtn() {
				// uni.showToast({
				// 	title: '充值成功',
				// 	icon: 'success',
				// 	duration: 2000
				// })
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
				// if (this.rateValue > 5) {
				// 	uni.showToast({
				// 		title: '请输入小于5的数值'
				// 	})
				// 	this.ratedata = 5
				// }
				console.log(this.rateValue)
			},
			getdata() {
				if(!this.ratedata){
					uni.showToast({
						title: '请输入佣金',
						icon: 'none',
					})
					return false
				}else if(!this.helpObj){
					uni.showToast({
						title: '请输入辅助对象',
						icon: 'none',
					})
					return false
				}else if(this.isFix){
					if(this.chooseAreaId==0){
					uni.showToast({
						title: '请选择地区',
						icon: 'none',
					})
					return false
					}
					if(!this.qrcodeAdress){
						uni.showToast({
							title: '请输入二维码地址',
							icon: 'none',
						})
						return false
					}
				}else if(!this.qrcodeAdress){
					uni.showToast({
						title: '请输入二维码地址',
						icon: 'none',
					})
					return false
				}
				let rechargeinfo = {
					taskPrice:this.rateValue,
					isFix: 1,
					chooseAreaId: this.chooseAreaId,
					chooseAreaName: this.chooseAreaName,
					qrcodeUrl:this.qrcodeAdress,
					helpObj:this.helpObj,
					orderType: this.type,
				}
				util.sendPost('/appOrder/createOrder', rechargeinfo).then((res) => {
					console.log(res)
					if (res.data.code == 0) {
						uni.showToast({
							title: res.data.message,
							icon: 'success',
							duration: 2000
						})
						// setTimeout(function() {
						// 	uni.switchTab({
						// 		url: '/pages/index/index'
						// 	});
						// }, 1000)
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
		margin: 0 auto;
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
