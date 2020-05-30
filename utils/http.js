module.exports = {
  baseUrl: baseUrl,
  sendPost: sendPost,
  navigateToPath: navigateToPath,
  showTimeSale: showTimeSale,
  setTabBarBadge: setTabBarBadge,
}
const baseUrl = "http://wenaqing.gicp.net";

// 发起post请求，请求后台
function sendPost(url, postData) {
  url = baseUrl + url;
  postData.token = uni.getStorageSync('token');
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      method: 'POST',
      data: postData,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json',
      success(res) {
        if(res.data.code == -1){
          uni.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          })
        } else if(res.data.code == -2){
          uni.showToast({
            title: '请先登录',
            icon: "none",
            
          })
          setTimeout(function () {
            uni.hideToast();
            navigateToPath('/pages/login');
          }, 1500)
        } else {
          resolve(res)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  });
}

// 跳转公用方法
function navigateToPath(path) {
	  console.log(path)
  if (path.indexOf('http') == 0) {
    uni.navigateTo({
      url: '/pages/outPage/outPage?url=' + path,
    })
  }else if(path.indexOf('order') >= 0){
    uni.switchTab({
      url: path,
    })
  } else {
	  console.log(path)
    uni.navigateTo({
      url: path,
    })
  }
}

function showTimeSale(dateTime, endTime) {
	if (dateTime != null && dateTime.length > 0) {
		var preset = -1;
		var ds = dateTime.split(" ")[0].split("-"); // 日期
		var ts = dateTime.split(" ")[1].split(":"); // 时间
		var limitDateTime = new Date(ds[0], ds[1]-1, ds[2], ts[0], ts[1], ts[2]); 
		if(!endTime) {
			endTime = new Date();
		}
		var dd = '0'; var hh = '0'; var mm = '0'; var ss = '0'; var html = "";
		// 时间差（毫秒数）
		var num = (preset == null || preset == 0) ? (endTime.getTime() - limitDateTime.getTime()) : (limitDateTime.getTime() - endTime.getTime());
		var tempNum = num;
        // 天
		if(num >= 24*60*60*1000){
			dd = Math.floor(num/(24*60*60*1000));
			num -= dd*24*60*60*1000;
		}
		html += dd>0 ? dd+"天" : "";
		// 时
		if(num >= 60*60*1000){
			hh = Math.floor(num/(60*60*1000));
			num -= hh*60*60*1000;
		}
		html += hh>0 ? hh+"时" : "" ;
		// 分
		if(num >= 60*1000){
			mm = Math.floor(num/(60*1000));
			num -= mm*60*1000;
		}
		html += mm>0 ? mm+"分" : "" ;
		// 秒
		if(num >= 1000){
			ss = Math.floor(num/(1000));
			num -= ss*1000;
		}
		html += ss>0 ? ss+"秒" : "" ;
		if(preset == null || preset == 0) {
			return html;
		} else {
			return html != null && html.length > 0 ? html : "已超时";
		}
		return html;
	}
}

// 为 tabBar 某一项的右上角添加文本
function setTabBarBadge(index, text){
	uni.removeTabBarBadge({index:index});
	uni.setTabBarBadge({
		index: index,
		text: text,
	})
}

module.exports.check = {
	// 检查手机号是否合法
	mobile(text){
		return RegExp(/^1[34578]\d{9}$/).test(text)
	}
}

// // created by wangyong for uni-app request 2019.11.22
// const baseURL = '';
// const http = (options) => {
//     return new Promise((resolve, reject) => {
//         uni.showLoading({
//             title: '加载中...',
//             mask: options.load || false // 默认遮罩出现可以继续操作
//         });
//         try{
// 			 const token = uni.getStorageSync('token');
//             uni.request({
//                 url: (options.baseURL || baseURL) + options.url,
//                 method: options.method || 'POST', // 默认为POST请求
//                 data: options.data, //请求超时在manifest.json配置
//                 header: {
//                     'token': token,
//                     'Content-Type': options.header == 'form' ? 'application/x-www-form-urlencoded' : 'application/json'
//                 },
//                 success: res => {
//                     resolve(res.data)
//                 },
//                 fail: (err) => {
//                     reject(err.data);
//                     console.log(err);
//                     uni.showToast({
//                         title: '请检查网络连接',
//                         icon: 'none'
//                     })
//                     /*错误码处理
//                     let code = err.data.code; 
//                     switch (code) {
//                         case 1000:
//                             break;
//                         default:
//                             break;
//                     } */
//                 },
//                 complete: () => {
//                     uni.hideLoading();
//                 }
//             });
//         }catch(e){
//             uni.hideLoading();
//             uni.showToast({
//                 title: '服务端异常',
//                 icon: 'none'
//             })
//         }
        
//     })
// }

// export default http