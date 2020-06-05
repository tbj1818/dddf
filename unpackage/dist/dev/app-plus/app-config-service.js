
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/my","pages/index/index","pages/login","pages/index/forget","pages/index/taskCenter","pages/index/order","pages/index/recharge","pages/index/releaseTask","pages/index/rechargeHistory","pages/index/materialEdit","pages/index/inviteCard","pages/index/myInvite","pages/index/download","pages/index/userCenter"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7A7E83","selectedColor":"#FF6034","borderStyle":"black","backgroundColor":"#ffffff","height":"50px","fontSize":"10px","iconWidth":"24px","spacing":"3px","list":[{"pagePath":"pages/index/index","iconPath":"/static/images/tabbar1.png","selectedIconPath":"/static/images/tabbar11.png","text":"首页"},{"pagePath":"pages/index/order","iconPath":"/static/images/tabbar2.png","selectedIconPath":"/static/images/tabbar22.png","text":"订单"},{"pagePath":"pages/index/my","iconPath":"/static/images/tabbar3.png","selectedIconPath":"/static/images/tabbar33.png","text":"个人中心"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"微信辅助","compilerVersion":"2.7.9","entryPagePath":"pages/index/my","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/index/forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/index/taskCenter","meta":{},"window":{"navigationBarTitleText":"任务中心"}},{"path":"/pages/index/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单管理","enablePullDownRefresh":true}},{"path":"/pages/index/recharge","meta":{},"window":{"navigationBarTitleText":"账号充值","titleNView":{"buttons":[{"text":"","fontSrc":"/static/font/iconfont.ttf","fontSize":"22px","float":"right"},{"text":"","fontSrc":"/static/font/iconfont.ttf","fontSize":"22px"}]}}},{"path":"/pages/index/releaseTask","meta":{},"window":{"navigationBarTitleText":"发布任务"}},{"path":"/pages/index/rechargeHistory","meta":{},"window":{"navigationBarTitleText":"充值历史"}},{"path":"/pages/index/materialEdit","meta":{},"window":{"navigationBarTitleText":"资料编辑"}},{"path":"/pages/index/inviteCard","meta":{},"window":{"navigationBarTitleText":"邀请卡商"}},{"path":"/pages/index/myInvite","meta":{},"window":{"navigationBarTitleText":"我的邀请"}},{"path":"/pages/index/download","meta":{},"window":{"navigationBarTitleText":"下载中心"}},{"path":"/pages/index/userCenter","meta":{},"window":{"navigationBarTitleText":"个人中心"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
