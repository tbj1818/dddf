(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"45af":function(e,t,n){"use strict";n.r(t);var o=n("d6e03"),a=n("bfe4");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("eae6");var s,c=n("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"74269e4d",null,!1,o["a"],s);t["default"]=l.exports},"5fe2":function(e,t,n){n("c975"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("1276");var o="http://114.116.73.182:8080",a="http://114.116.73.182:8082";function i(e,t){return e=o+e,t.token=uni.getStorageSync("token"),new Promise((function(n,o){uni.request({url:e,method:"POST",data:t,header:{"content-type":"application/x-www-form-urlencoded"},dataType:"json",success:function(e){-1==e.data.code?uni.showToast({title:e.data.message,icon:"none",duration:2e3}):-2==e.data.code?(uni.showToast({title:"请先登录",icon:"none"}),setTimeout((function(){uni.hideToast(),s("/pages/login")}),1500)):n(e)},fail:function(e){o(e)}})}))}function s(e){console.log(e),0==e.indexOf("http")?uni.navigateTo({url:"/pages/outPage/outPage?url="+e}):e.indexOf("order")>=0?uni.switchTab({url:e}):(console.log(e),uni.navigateTo({url:e}))}function c(e,t){if(null!=e&&e.length>0){var n=-1,o=e.split(" ")[0].split("-"),a=e.split(" ")[1].split(":"),i=new Date(o[0],o[1]-1,o[2],a[0],a[1],a[2]);t||(t=new Date);var s="0",c="0",l="0",u="0",r="",d=null==n||0==n?t.getTime()-i.getTime():i.getTime()-t.getTime();return d>=864e5&&(s=Math.floor(d/864e5),d-=24*s*60*60*1e3),r+=s>0?s+"天":"",d>=36e5&&(c=Math.floor(d/36e5),d-=60*c*60*1e3),r+=c>0?c+"时":"",d>=6e4&&(l=Math.floor(d/6e4),d-=60*l*1e3),r+=l>0?l+"分":"",d>=1e3&&(u=Math.floor(d/1e3),d-=1e3*u),r+=u>0?u+"秒":"",null==n||0==n?r:null!=r&&r.length>0?r:"已超时"}}function l(e,t){uni.removeTabBarBadge({index:e}),uni.setTabBarBadge({index:e,text:t})}e.exports.check={mobile:function(e){return RegExp(/^1[34578]\d{9}$/).test(e)}},e.exports={baseUrl:o,webbaseUrl:a,sendPost:i,navigateToPath:s,showTimeSale:c,setTabBarBadge:l}},"6c7a":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".textTips[data-v-74269e4d]{width:100%;margin:10px auto;text-align:left;color:#999;line-height:28px}.box[data-v-74269e4d]{box-shadow:0 0 8px #d2eeff;margin:10px 5px 0;padding:.5rem 5px;border-radius:5px}.box img[data-v-74269e4d]{width:50%}",""]),e.exports=t},bfe4:function(e,t,n){"use strict";n.r(t);var o=n("c8e7"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},c8e7:function(e,t,n){"use strict";var o=n("ee27");n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("5fe2")),i={data:function(){return{imgListNum:1,filepath:""}},onLoad:function(){},onShow:function(){},components:{},methods:{screenqrcode:function(){uni.showModal({title:"请前往APP端扫码！",success:function(e){e.confirm?(uni.showToast({title:"确认成功",icon:"success"}),uni.navigateTo({url:"/pages/index/download"})):e.cancel&&uni.showToast({title:"您就竟然点击取消",icon:"none"})}}),uni.scanCode({success:function(e){if(console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),-1==e.result.indexOf("http://")||-1==e.result.indexOf("https://"))return uni.showToast({icon:"none",title:"未解析出地址，请重新扫码或上传"}),!1;uni.navigateTo({url:"/pages/index/releaseTask?qucodeurl="+encodeURIComponent(e.result)+"&type=1"})},fail:function(e){uni.showToast({icon:"none",title:e.errMsg})}})},uploadFile:function(){var e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(t),e.filepath=t.tempFilePaths[0],console.log(e.filepath),uni.showLoading({title:"加载中"});var n={token:uni.getStorageSync("token"),fileName:"imageFile"};uni.uploadFile({url:a.default.baseUrl+"/appOrder/parseQrcode",filePath:e.filepath,name:"imageFile",formData:n,success:function(e){e=JSON.parse(e.data),console.log(e),0==e.code?uni.navigateTo({url:"/pages/index/releaseTask?qucodeurl="+encodeURIComponent(e.data.content)+"&type=1"}):uni.showToast({title:e.message,icon:"none",duration:2e3})}})}})}}};t.default=i},d6e03:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"wrapper center-container"},[n("v-uni-text",{staticClass:"textTips"},[e._v("提示： 若下单价提高，有助于用户快速接单！（若拍照二维码识别失败，请上传截图二维码）。")]),n("div",{staticClass:"flex flex-align-center flex-justify-around flex-wrap padding box"},[n("div",{staticClass:"flex flex-col flex-align-center padding-top pointer",staticStyle:{width:"50%"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.screenqrcode.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"screenone"}),n("p",{staticClass:"padding-top padding-bottom"},[e._v("扫码下单")])],1),n("div",{staticClass:"flex flex-col flex-align-center padding-top pointer",staticStyle:{width:"50%"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFile.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"screentwo"}),n("p",{staticClass:"padding-top padding-bottom"},[e._v("原图拍照")])],1)])],1)],1)},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},df48:function(e,t,n){var o=n("6c7a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("4f06").default;a("54c4de6e",o,!0,{sourceMap:!1,shadowMode:!1})},eae6:function(e,t,n){"use strict";var o=n("df48"),a=n.n(o);a.a}}]);