import Vue from 'vue'
import axios from 'axios'

var CryptoJS= require("@/assets/js/crypto-js");
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var httpUrl="http://";//你的域名

// 基础参数
var baseParams={};


// token加密
function Token(){
	var t = new Date().getTime();
	var k = "";//令牌k
	var enStr = CryptoJS.CryptoJS.AES.encrypt(CryptoJS.CryptoJS.enc.Utf8.parse(t.toString()), CryptoJS.CryptoJS.enc.Utf8.parse(k), {
	    mode: CryptoJS.CryptoJS.mode.ECB,
	    padding: CryptoJS.CryptoJS.pad.Pkcs7
	});
	return enStr.toString()
}

// cancel token取消请求
Vue.prototype.$ajax=axios; 
const CancelToken = axios.CancelToken;
let cancel;

Vue.prototype.cancelAjax = function(){ //切换页面强行中断请求 router.beforeEach中用到 
	if(cancel){ 
	  	cancel('中断请求'); 
	} 
}

function initFn(params, callback, argument){
	// 如果没有参数
	if(typeof argument == 'function'){
		callback = argument;
		params = {};
	}

	// 对象合并，确定最后参数
	return {
		nparams : $.extend({}, params, baseParams),
		callback : callback
	}
}

// post
function request(apiUrl,data){
	return new Promise(function(resolve, reject) {
	var url = httpUrl + apiUrl;
    Vue.prototype.$ajax({
	        method: 'post',
	        url,
			data,
			headers:{
			    'IsoksToken': Token(),
			},
			timeout: 300000,
	        cancelToken: new CancelToken(c => { //强行中断请求要用到的
	        cancel = c
	        })
	     }).then(res =>{
			resolve(res.data)
		},res=>{ //中断请求和请求出错都会走这里
			reject(res);
			if(res.message == '中断请求') return;
        })
	})
};
export {
	request
}