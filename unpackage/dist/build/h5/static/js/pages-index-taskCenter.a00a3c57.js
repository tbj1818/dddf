(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-taskCenter"],{"33c6":function(t,a,i){"use strict";i.r(a);var n=i("3b04"),e=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);a["default"]=e.a},"3b04":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={components:{},data:function(){return{btnnum:0,msg:[1,2,3,4,5],data:{industry:0,healthy:0},industryList:[{name:"0",value:"陕西"},{name:"1",value:"广东"},{name:"2",value:"台湾"}]}},methods:{change:function(t){this.btnnum=t,console.log(this.btnnum)},pickerChange:function(t,a){console.log("picker发送选择改变，携带值为",t.target.value),this.data[a]=t.target.value}}};a.default=n},5541:function(t,a,i){"use strict";i.r(a);var n=i("a1a2"),e=i("33c6");for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);i("a1fd");var l,c=i("f0c5"),r=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"4af246ed",null,!1,n["a"],l);a["default"]=r.exports},"6ef9":function(t,a,i){var n=i("bbe2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("d4aa11f2",n,!0,{sourceMap:!1,shadowMode:!1})},a1a2:function(t,a,i){"use strict";var n,e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"uni-swiper-msg"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{vertical:"true",autoplay:"false",duration:"500",interval:"4000"}},t._l(t.msg,(function(a,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.notice(a)}}},[t._v("第"+t._s(a)+"个会员充值成功")])],1)})),1)],1),i("v-uni-view",{staticClass:"end-title"},[i("v-uni-view",{class:{btna:0==t.btnnum},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(0)}}},[t._v("高价任务")]),i("v-uni-view",{class:{btna:1==t.btnnum},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(1)}}},[t._v("一扫而过")])],1),i("v-uni-view",{staticClass:"end-cont",class:{dis:0==t.btnnum}},[i("v-uni-view",{staticClass:"screenk"},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db cityk"},[i("v-uni-picker",{attrs:{value:t.data.industry,range:t.industryList,"range-key":"value"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.pickerChange(a,"industry")}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.industryList[t.data.industry].value)),i("i",{staticClass:"van-icon van-icon-arrow-down"})])],1)],1),i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"primary"}},[t._v("价格排序")]),i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"primary"}},[t._v("成功率排序")]),i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"primary"}},[t._v("自动抢单")]),i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"primary"}},[t._v("刷新")])],1),i("v-uni-view",{staticClass:"classtask"},[i("v-uni-view",{staticClass:"h1"},[t._v("任务ID：2019874447411534234dfsdcx")]),i("v-uni-view",{staticClass:"money"},[i("section",{staticClass:"van-col van-col--12 flex "},[i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"primary"}},[t._v("陕西")]),i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"warn"}},[t._v("优质")])],1),i("section",{staticClass:"van-col van-col--12 rightText"},[t._v("赏金：￥3434")])]),i("v-uni-view",{staticClass:"money noborder"},[i("section",{staticClass:"van-col van-col--12 flex "},[t._v("倒计时：05：48")]),i("section",{staticClass:"van-col van-col--12 rightText"},[i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"warn"}},[t._v("立即抢单")])],1)])],1),i("v-uni-view",{staticClass:"classtask"},[i("v-uni-view",{staticClass:"h1"},[t._v("任务ID：2019874447411534234dfsdcx")]),i("v-uni-view",{staticClass:"money"},[i("section",{staticClass:"van-col van-col--12 flex "},[i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"primary"}},[t._v("陕西")]),i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"warn"}},[t._v("优质")])],1),i("section",{staticClass:"van-col van-col--12 rightText"},[t._v("赏金：￥3434")])]),i("v-uni-view",{staticClass:"money noborder"},[i("section",{staticClass:"van-col van-col--12 flex "},[t._v("倒计时：05：48")]),i("section",{staticClass:"van-col van-col--12 rightText"},[i("v-uni-button",{staticClass:"paixuBtn",attrs:{type:"warn"}},[t._v("立即抢单")])],1)])],1)],1)],1)],1),i("v-uni-view",{staticClass:"end-cont",class:{dis:1==t.btnnum}},[t._v("22222")])],1)},s=[];i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return n}))},a1fd:function(t,a,i){"use strict";var n=i("6ef9"),e=i.n(n);e.a},bbe2:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".page[data-v-4af246ed]{margin:0;padding:0}.uni-swiper-msg[data-v-4af246ed]{padding:0 10px;background:-webkit-gradient(linear,0 0,100% 0,from(#ff9924),to(#fe5300));color:#fff}.uni-swiper-wrapper[data-v-4af246ed]{height:50px;line-height:50px}.swiper[data-v-4af246ed]{height:40px;line-height:40px}.end-title[data-v-4af246ed]{margin-top:0}.dis[data-v-4af246ed]{margin:0}.screenk[data-v-4af246ed]{width:100%;height:50px;background:#fff;line-height:50px;text-align:left}.uni-list-cell[data-v-4af246ed]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cityk[data-v-4af246ed]{width:80px;text-align:center}.van-icon-arrow-down[data-v-4af246ed]{margin-left:10px}.paixuBtn[data-v-4af246ed]{padding:0 10px;height:30px;font-size:12px;line-height:30px;margin-right:5px}.classtask[data-v-4af246ed]{width:90%;padding:10px;margin:10px auto;background:#fff;box-shadow:0 0 8px #d2eeff;border-radius:10px}.classtask .h1[data-v-4af246ed]{width:100%;text-align:left;font-size:16px;height:40px;line-height:40px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.classtask .money[data-v-4af246ed]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #ebedf0}.classtask .money.noborder[data-v-4af246ed]{border:0}.classtask .money .paixuBtn[data-v-4af246ed]{padding:0 15px;font-size:14px}.classtask .money .rightText[data-v-4af246ed]{text-align:right;color:red;font-size:16px}",""]),t.exports=a}}]);