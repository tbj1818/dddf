<template>
	<view class="content bg-white">
		<view class="cu-form-group">
			<view class="title">申诉内容</view>
			<textarea class="solid" v-model="content" :maxlength="maxlength" @input="conInput" style="height: 80px;"></textarea>
		</view>
		<view class=" rightText">
			<view class="" style='color:red'>{{tatVal}}</view>/<view class="span">{{maxlength}}</view>
		</view>
		<view class="cu-bar margin-top-sm solid-top ">
			<view class="action">
				图片上传
			</view>
		<!-- 	<view class="action">
				{{imgList.length}}/{{imgListNum}}
			</view> -->
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				 <image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length < imgListNum">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		<view class="flex padding">
			<button class="flex-sub cu-btn bg-gradual-blue lg" @click="summitBtn()">提交</button>
		</view>
			<!-- <button class="flex-sub cu-btn bg-gradual-blue lg" @click="scanCode()">扫码</button> -->
	</view>
	
</template>

<script>
	var app, that;
	import util from '../../utils/http.js'
	export default {
		data() {
			return {
				content: '',
				tatVal: 0,
				maxlength: 80,
				imgList: [],
				imgListNum: 1,
				orderId: 0,
			}
		},
		onLoad(options) {
			that = this;
			that.orderId = options.orderId;
		},
		methods: {
			conInput(e){
				this.tatVal = e.detail.value.length;
				if(this.tatVal == this.maxlength){
					uni.showToast({
						icon: 'none',
						title: '最多只能输入' + this.maxlength + '个字'
					});
				}
			},
			ChooseImage() {
				uni.chooseImage({
					count: that.imgListNum, //默认9
					sizeType: ['compressed'], // 指定是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
						console.log(res)
						if (that.imgList.length != 0) {
							that.imgList = that.imgList.concat(res.tempFilePaths)
						} else {
							that.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							// this.imgList.splice(e.currentTarget.dataset.index, 1)
							that.imgList = []
						}
					}
				})
			},
			summitBtn(){
				var data = {
					token: uni.getStorageSync('userInfo').token,
					fromType: 1,
					rowId: that.orderId,
					discusssContent: that.content,
				}
				
				if(that.imgList.length > 0){
					data.fileName = "imageFile";
					uni.uploadFile({
						url: util.baseUrl + '/appOrder/discussOrder',
						filePath: that.imgList[0],
						name: 'imageFile',
						formData: data, 
						// header:{"Content-Type": "multipart/form-data"}, // request模块中会自动处理，加上反而有问题
						success:(res) => {
							res = JSON.parse(res.data)
							uni.showToast({
								title: res.message,
								icon: 'none',
								duration: 2000
							});
							if (res.code == 0) {
								setTimeout(function(){uni.navigateBack()}, 1500)
							}
						}
					});
				} else {
					util.sendPost('/appOrder/discussOrder', data).then(function(res){
						uni.showToast({
							title: '提交成功',
							icon: 'none',
							duration: 2000
						});
						setTimeout(function(){uni.navigateBack()}, 1500)
					})
				}
				
			},
			
			summitBtn1(){
				console.log(that.imgList[0])
				uni.uploadFile({
					url: util.baseUrl + '/appOrder/createOrder',     // 后端api接口
					// url: util.baseUrl + '/appUploadImg/upload',     // 后端api接口
					filePath: that.imgList[0], // uni.chooseImage函数调用后获取的本地文件路劲
					fileName:'Filedata',     //后端通过'file'获取上传的文件对象(字段)
					files: that.imgList,
					formData: {
						 // openid:_self.openid,  //剩下的字段
						token: 'rjk5fyq9l801590473760799',
						imgType: "AFFICHE_PIC",
						imageId: 'Filedata',
						fileName: 'Filedata',
						filePath: that.imgList[0],
					}, 
					header:{"Content-Type": "multipart/form-data"},
					success:(res) => {
						console.log(res)
					},
					fail(res1){
						console.log(res1)  
					}
			    });
				
				// uni.showToast({
				// 	icon: 'none',
				// 	title: '提交'
				// });
			},
			
			// 识别二维码
			scanCode(){
				uni.scanCode({
					// scanType: 'qrcode',
					success(res) {
						console.log(res)
						uni.showToast({
							icon: 'none',
							title: res.result
						});
					}, 
					fail(res) {
						uni.showToast({
							icon: 'none',
							title: res.errMsg
						});
					}
				})
			}
		}
	}
</script>
<style scoped>
	.rightText{text-align: right; padding-right: 20px; display: flex;justify-content:  flex-end }
	.cu-form-group {
	    background-color: #fff;
	    padding: 0.5px 16px;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    min-height: 55px; margin-top: 30px;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    justify-content: space-between;
	}
	.cu-form-group .title {
	    text-align: justify;
	    padding-right: 16px;
	    font-size: 16px;
	    position: relative;
	    height: 33px;
	    line-height: 33px;
	}
	.uni-textarea-textarea {
	    resize: none;
	    background: none; text-align: left;
	    opacity: 1;
	    -webkit-text-fill-color: currentcolor;
	    line-height: 26px;
	}
	.solid::after, .solid-top::after, .solid-right::after, .solid-bottom::after, .solid-left::after, .solids::after, .solids-top::after, .solids-right::after, .solids-bottom::after, .solids-left::after, .dashed::after, .dashed-top::after, .dashed-right::after, .dashed-bottom::after, .dashed-left::after {
	    content: " ";
	    width: 200%;
	    height: 200%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    border-radius: inherit;
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	    -webkit-transform-origin: 0 0;
	    transform-origin: 0 0;
	    pointer-events: none;
	    box-sizing: border-box;
	}
	.solid::after {
	    border: 0.5px solid rgba(0,0,0,.1);
	}
</style>