(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-order"],{"07b1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"ReturnTop",data:function(){return{btnFlag:!1}},mounted:function(){window.addEventListener("scroll",this.scrollToTop)},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)},methods:{backTop:function(){var t=this,e=setInterval((function(){var n=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+n,0===t.scrollTop&&clearInterval(e)}),16)},scrollToTop:function(){var t=this,e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollTop=e,t.scrollTop>60?t.btnFlag=!0:t.btnFlag=!1}}};e.default=a},"37aa":function(t,e,n){"use strict";n.r(e);var a=n("07b1"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"43a5":function(t,e,n){"use strict";var a=n("7bbf"),i=n.n(a);i.a},4500:function(t,e,n){"use strict";function a(t,e){if(0===arguments.length)return null;var n,a=e||"{y}-{m}-{d}";"object"===typeof t?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=a.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)}));return r}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),i=Date.now(),r=(i-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":e?a(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function r(t){var e=new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/);return e.test(t)}n("d3b7"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=a,e.formatTime=i,e.regExpTel=r},4631:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* return top */.backTop[data-v-54ba2046]{width:45px;height:45px;border:0;box-shadow:.05333rem .05333rem .13333rem #ccc;text-align:center;position:fixed;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;right:10px;bottom:80px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;background:#fff}.backTop .van-icon-arrow-up[data-v-54ba2046]{vertical-align:middle;font-size:.4rem}.van-button[data-v-54ba2046]{line-height:auto!important}",""]),t.exports=e},5166:function(t,e,n){"use strict";n.r(e);var a=n("8417"),i=n("37aa");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("99e1");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"54ba2046",null,!1,a["a"],o);e["default"]=l.exports},"5fe2":function(t,e,n){n("c975"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("1276");var a="http://114.116.73.182:8080",i="http://114.116.73.182:8082";function r(t,e){return t=a+t,e.token=uni.getStorageSync("token"),new Promise((function(n,a){uni.request({url:t,method:"POST",data:e,header:{"content-type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){-1==t.data.code?uni.showToast({title:t.data.message,icon:"none",duration:2e3}):-2==t.data.code?(uni.showToast({title:"请先登录",icon:"none"}),setTimeout((function(){uni.hideToast(),o("/pages/login")}),1500)):n(t)},fail:function(t){a(t)}})}))}function o(t){console.log(t),0==t.indexOf("http")?uni.navigateTo({url:"/pages/outPage/outPage?url="+t}):t.indexOf("order")>=0?uni.switchTab({url:t}):(console.log(t),uni.navigateTo({url:t}))}function s(t,e){if(null!=t&&t.length>0){var n=-1,a=t.split(" ")[0].split("-"),i=t.split(" ")[1].split(":"),r=new Date(a[0],a[1]-1,a[2],i[0],i[1],i[2]);e||(e=new Date);var o="0",s="0",l="0",c="0",d="",u=null==n||0==n?e.getTime()-r.getTime():r.getTime()-e.getTime();return u>=864e5&&(o=Math.floor(u/864e5),u-=24*o*60*60*1e3),d+=o>0?o+"天":"",u>=36e5&&(s=Math.floor(u/36e5),u-=60*s*60*1e3),d+=s>0?s+"时":"",u>=6e4&&(l=Math.floor(u/6e4),u-=60*l*1e3),d+=l>0?l+"分":"",u>=1e3&&(c=Math.floor(u/1e3),u-=1e3*c),d+=c>0?c+"秒":"",null==n||0==n?d:null!=d&&d.length>0?d:"已超时"}}function l(t,e){uni.removeTabBarBadge({index:t}),uni.setTabBarBadge({index:t,text:e})}t.exports.check={mobile:function(t){return RegExp(/^1[34578]\d{9}$/).test(t)}},t.exports={baseUrl:a,webbaseUrl:i,sendPost:r,navigateToPath:o,showTimeSale:s,setTabBarBadge:l}},"7bbf":function(t,e,n){var a=n("f997");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("73051e64",a,!0,{sourceMap:!1,shadowMode:!1})},8417:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.btnFlag,expression:"btnFlag"}],staticClass:"backTop",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backTop.apply(void 0,arguments)}}},[n("i",{staticClass:"van-icon van-icon-arrow-up",staticStyle:{"font-size":"26px"}})])},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},"976d":function(t,e,n){"use strict";n.r(e);var a=n("baa6"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"99e1":function(t,e,n){"use strict";var a=n("ee24"),i=n.n(a);i.a},"9b87":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page wrapper"},[n("v-uni-view",{staticClass:"page_header"},[n("v-uni-view",{staticClass:"van-cell van-field"},[n("v-uni-view",{staticClass:"van-cell__title"},[n("span",[t._v("选择日期")])]),n("v-uni-view",{staticClass:"value"},[n("v-uni-picker",{attrs:{mode:"date",value:t.datevalue,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelected.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.datevalue))])],1)],1),n("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})],1),n("v-uni-scroll-view",{staticClass:"wuc-tab",attrs:{"scroll-with-animation":!0,"scroll-x":!0,"scroll-left":t.scrollLeft},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"navbar"},t._l(t.navList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"nav-item",class:{current:t.tabCurrentIndex===a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(e.text))])})),1)],1)],1),t._l(t.navList,(function(e,a){return t.tabCurrentIndex===a?n("v-uni-view",{key:a,staticClass:"list"},[t._l(t.orderList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"listemes"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"tittop"},[n("v-uni-view",{staticClass:"tittle"},[t._v(t._s(e.state)+"订单："+t._s(e.orderNo))]),n("v-uni-view",{staticClass:"emesremark c-grey flex"},[n("em",[t._v("注册手机号:"+t._s(e.studioName))]),n("em",{staticClass:"c-orange"},[t._v("价格:￥"+t._s(e.taskPrice))])])],1),n("ul",{staticClass:"emeslistmark"},[n("li",{staticClass:"flex"},[t._v("下单时间："+t._s(e.createTime))]),n("li",{staticClass:"flex"},[t._v("手续费："),n("em",{staticClass:"c-orange"},[t._v("(￥"+t._s(e.feePrice)+")")])]),n("v-uni-view",{staticClass:"van-row"},[n("v-uni-view",{staticClass:"van-col van-col--12"},[t._v("辅助对象："+t._s(e.helpObj))]),1==e.isFix?n("v-uni-view",{staticClass:"van-col van-col--12",staticStyle:{"text-align":"right"}},[t._v("是否定向：是")]):t._e(),0==e.isFix?n("v-uni-view",{staticClass:"van-col van-col--12",staticStyle:{"text-align":"right"}},[t._v("是否定向：否")]):t._e(),1==e.isFix?n("v-uni-view",{staticClass:"van-col van-col--12"},[t._v("省份："+t._s(e.chooseAreaName))]):t._e()],1),n("li"),n("li")],1),1==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-1"},[t._v("等待扫码")]):t._e(),2==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-2"},[t._v("正在扫码")]):t._e(),3==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-3"},[t._v("等待确认")]):t._e(),4==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-4"},[t._v("订单纠纷")]):t._e(),5==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-5"},[t._v("订单完成")]):t._e(),6==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-1"},[t._v("订单失败")]):t._e(),7==e.orderState?n("v-uni-view",{staticClass:"tips subject-status-2"},[t._v("超时退款")]):t._e()],1),3==e.orderState?n("v-uni-view",{staticClass:"checkstate"},[n("v-uni-view",{staticClass:"van-row"},[n("v-uni-view",{staticClass:"van-col van-col--12 textCenter",staticStyle:{"border-right":"1px solid rgb(220, 220, 220)"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.enterorder(e.rowId,10,"确认")}}},[t._v("确认")]),n("v-uni-view",{staticClass:"van-col van-col--12 textCenter",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.enterorder(e.rowId,20,"失败")}}},[t._v("失败")])],1)],1):t._e()],1)})),n("v-uni-view",{staticClass:"loading"},[t._v(t._s(t.loadingText))]),0==t.orderList.length?n("v-uni-view",[n("v-uni-text",{staticClass:"nodataorder"}),n("v-uni-text",{staticClass:"text-centernodata"},[t._v("暂无数据")])],1):t._e(),n("ReturnTop")],2):t._e()}))],2)},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},baa6:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d0ff")),r=a(n("5fe2")),o=a(n("5166")),s=n("4500"),l={components:{ReturnTop:o.default},data:function(){return{tabCurrentIndex:0,page:1,scrollLeft:0,oldScrollLeft:0,orderList:[],showPicker:!1,startDate:"2020-01-01",endDate:"",datevalue:(0,s.parseTime)(new Date),navList:[{state:0,text:"等待扫码",orderList:[]},{state:1,text:"正在扫码",orderList:[]},{state:2,text:"等待确认",orderList:[]},{state:3,text:"订单纠纷",orderList:[]},{state:4,text:"订单完成",orderList:[]},{state:6,text:"订单失败",orderList:[]},{state:7,text:"超时退款",orderList:[]}],loadingText:"加载中..."}},onLoad:function(t){this.tabCurrentIndex=0,setTimeout((function(){console.log("start pulldown")}),1e3),uni.startPullDownRefresh()},onPullDownRefresh:function(){this.page=1,this.orderList=[],this.getorderListdata(this.tabCurrentIndex+1,this.datevalue),uni.showToast({title:"刷新成功",icon:"success"}),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.getmorenews()},methods:{tabClick:function(t){console.log(this.datevalue),this.page=1,this.tabCurrentIndex=t,this.orderList=[],this.getorderListdata(this.tabCurrentIndex+1,this.datevalue)},getorderListdata:function(t,e){var n=this,a={orderState:t,startTime:e,limit:10,offset:this.page};r.default.sendPost("/appOrder/studioOrderList",a).then((function(t){if(console.log(t),0==t.data.code){var e;if(uni.showToast({title:t.data.message,icon:"success"}),(e=n.orderList).push.apply(e,(0,i.default)(t.data.data.list)),0==t.data.data.list.length)return uni.hideNavigationBarLoading(),n.loadingText="已加载全部",!1;t.data.data.list.length<10&&(uni.hideNavigationBarLoading(),n.loadingText="已加载全部"),n.page++,uni.hideNavigationBarLoading()}})).catch((function(t){uni.showToast({title:"请求失败",icon:"none"})}))},scroll:function(t){this.oldScrollLeft=t.detail.scrollLeft},onSelected:function(t){console.log(t.target.value),this.datevalue=t.target.value,this.page=1,this.orderList=[],this.getorderListdata(this.tabCurrentIndex+1,this.datevalue)},enterorder:function(t,e,n){var a=this;uni.showModal({title:"确定要"+n+"订单吗？",success:function(n){if(n.confirm){var i={orderId:t,confirmType:e};r.default.sendPost("/appOrder/confirmOrder",i).then((function(t){console.log(t),0==t.data.code&&(uni.showToast({title:t.data.message,icon:"success"}),a.page=1,a.orderList=[],a.getorderListdata(a.tabCurrentIndex+1,a.datevalue))})).catch((function(t){uni.showToast({title:"请求失败",icon:"none"})}))}else n.cancel&&uni.showToast({title:"您就竟然点击取消",icon:"none"})}})},getmorenews:function(){if(console.log("已触底"),uni.showToast({title:"已触底",icon:"success"}),"已加载全部"==this.loadingText)return console.log("return"),!1;uni.showNavigationBarLoading(),this.getorderListdata(this.tabCurrentIndex+1,this.datevalue)}}};e.default=l},d0ff:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function i(t){if(Array.isArray(t))return a(t)}n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function o(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||r(t)||o(t)||s()}n.d(e,"default",(function(){return l}))},ee24:function(t,e,n){var a=n("4631");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("150dd5f4",a,!0,{sourceMap:!1,shadowMode:!1})},f038:function(t,e,n){"use strict";n.r(e);var a=n("9b87"),i=n("976d");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("43a5");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"078cdb47",null,!1,a["a"],o);e["default"]=l.exports},f997:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navbar[data-v-078cdb47]{display:inline-block!important;width:100%;height:45px!important;-webkit-flex-wrap:wrap;flex-wrap:wrap;white-space:nowrap\r\n  /* 必要，导航栏才能横向*/}.navbar .nav-item.current[data-v-078cdb47]{height:38px!important}.navbar .nav-item[data-v-078cdb47]{-webkit-box-flex:0!important;-webkit-flex:0 0 130px!important;flex:0 0 130px!important;height:40px;margin:0 10px;line-height:40px;-webkit-flex-basis:130px;flex-basis:130px;display:inline-block!important\r\n  /* 必要，导航栏才能横向*/}.wuc-tab[data-v-078cdb47]{background:#fff}.loading[data-v-078cdb47]{text-align:center;line-height:60px;color:#000}.navbar[data-v-078cdb47]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;position:relative;z-index:10}.navbar .nav-item[data-v-078cdb47]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;position:relative}.navbar .nav-item.current[data-v-078cdb47]{border-bottom:3px solid orange;color:#ff6034;font-weight:700}.navbar .nav-item.current[data-v-078cdb47]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0}.uni-swiper-item[data-v-078cdb47]{height:auto}.list[data-v-078cdb47]{padding-bottom:60px;padding-top:90px}.listemes[data-v-078cdb47]{width:95%}.uni-swiper-msg[data-v-078cdb47]{padding:0 10px;background:-webkit-gradient(linear,0 0,100% 0,from(#ff9924),to(#fe5300));color:#fff}.van-cell[data-v-078cdb47]{margin-top:0;line-height:46px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:0;padding-bottom:0}.van-cell__value[data-v-078cdb47]{text-align:center;line-height:46px}.van-field__body[data-v-078cdb47]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper-wrapper[data-v-078cdb47]{height:50px;line-height:50px}uni-swiper[data-v-078cdb47]{height:40px;line-height:40px}.end-title[data-v-078cdb47]{margin-top:0}.dis[data-v-078cdb47]{margin:0}.uni-app--showtabbar[data-v-078cdb47]{background:#f8f8f8}uni-page-body[data-v-078cdb47]{height:100%}.screenk[data-v-078cdb47]{width:100%;height:50px;background:#fff;line-height:50px;text-align:left}.uni-list-cell[data-v-078cdb47]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page_header[data-v-078cdb47]{position:fixed;width:100%;left:0;top:var(--window-top);z-index:1}',""]),t.exports=e}}]);