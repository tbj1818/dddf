(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-gonggao"],{"069f":function(t,e,n){"use strict";var o=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("5fe2")),a={components:{},data:function(){return{noteinfo:[]}},onShow:function(){this.getinfo()},methods:{getinfo:function(){var t=this,e={fromType:2,sourceType:20};i.default.sendPost("/appAffiche/afficheList",e).then((function(e){console.log(e),0==e.data.code&&(t.noteinfo=e.data.data)})).catch((function(t){uni.showToast({title:"请求失败",icon:"none"})}))},saveinfo:function(t){if(this.$set(this.userinfo,"fromType",2),1==t)var e="/appUser/updateLinkInfo";else e="/appUser/updateSkInfo";i.default.sendPost(e,this.userinfo).then((function(t){console.log(t),0==t.data.code&&uni.showToast({title:t.data.message,icon:"success"})})).catch((function(t){uni.showToast({title:"请求失败",icon:"none"})}))},shownotes:function(t){uni.showModal({title:t.title,content:t.content,showCancel:!1,success:function(t){t.confirm&&console.log("用户点击确定")}})}}};e.default=a},"2cf3":function(t,e,n){"use strict";n.r(e);var o=n("2dc5"),i=n("bfcd");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("a498");var s,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"509ea7fc",null,!1,o["a"],s);e["default"]=u.exports},"2d34":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".ulistnote[data-v-509ea7fc]{width:90%;margin:0 auto}.ulistnote li[data-v-509ea7fc]{border-bottom:#dcdcdc solid 1px;margin:10px auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.ulistnote li h1[data-v-509ea7fc]{width:100%;line-height:30px;font-size:16px}.ulistnote li p[data-v-509ea7fc]{width:100%;line-height:28px;font-size:14px;color:#999}\n.uni-input[data-v-509ea7fc]{border:0}.h1[data-v-509ea7fc]{font-size:20px;height:20px;background-color:#f8f8f8;line-height:20px;border-left:3px solid #07a;padding:10px;margin:20px auto}",""]),t.exports=e},"2dc5":function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"h1"},[t._v("公告信息")]),n("ul",{staticClass:"ulistnote"},t._l(t.noteinfo,(function(e,o){return n("li",{key:o,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shownotes(e)}}},[n("v-uni-view",[n("h1",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.content))])]),n("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})],1)})),0)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"5fe2":function(t,e,n){n("c975"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("1276");var o="http://114.116.73.182:8080",i="http://114.116.73.182:8082";function a(t,e){return t=o+t,e.token=uni.getStorageSync("token"),new Promise((function(n,o){uni.request({url:t,method:"POST",data:e,header:{"content-type":"application/x-www-form-urlencoded"},dataType:"json",success:function(t){-1==t.data.code?uni.showToast({title:t.data.message,icon:"none",duration:2e3}):-2==t.data.code?(uni.showToast({title:"请先登录",icon:"none"}),setTimeout((function(){uni.hideToast(),s("/pages/login")}),1500)):n(t)},fail:function(t){o(t)}})}))}function s(t){console.log(t),0==t.indexOf("http")?uni.navigateTo({url:"/pages/outPage/outPage?url="+t}):t.indexOf("order")>=0?uni.switchTab({url:t}):(console.log(t),uni.navigateTo({url:t}))}function c(t,e){if(null!=t&&t.length>0){var n=-1,o=t.split(" ")[0].split("-"),i=t.split(" ")[1].split(":"),a=new Date(o[0],o[1]-1,o[2],i[0],i[1],i[2]);e||(e=new Date);var s="0",c="0",u="0",f="0",l="",r=null==n||0==n?e.getTime()-a.getTime():a.getTime()-e.getTime();return r>=864e5&&(s=Math.floor(r/864e5),r-=24*s*60*60*1e3),l+=s>0?s+"天":"",r>=36e5&&(c=Math.floor(r/36e5),r-=60*c*60*1e3),l+=c>0?c+"时":"",r>=6e4&&(u=Math.floor(r/6e4),r-=60*u*1e3),l+=u>0?u+"分":"",r>=1e3&&(f=Math.floor(r/1e3),r-=1e3*f),l+=f>0?f+"秒":"",null==n||0==n?l:null!=l&&l.length>0?l:"已超时"}}function u(t,e){uni.removeTabBarBadge({index:t}),uni.setTabBarBadge({index:t,text:e})}t.exports.check={mobile:function(t){return RegExp(/^1[34578]\d{9}$/).test(t)}},t.exports={baseUrl:o,webbaseUrl:i,sendPost:a,navigateToPath:s,showTimeSale:c,setTabBarBadge:u}},a498:function(t,e,n){"use strict";var o=n("c011"),i=n.n(o);i.a},bfcd:function(t,e,n){"use strict";n.r(e);var o=n("069f"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c011:function(t,e,n){var o=n("2d34");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("71f41015",o,!0,{sourceMap:!1,shadowMode:!1})}}]);