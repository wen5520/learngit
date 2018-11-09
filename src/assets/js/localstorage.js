
function set(user,value){
    console.log('set')
        var curTime = new Date().getTime();
        localStorage.setItem(user,JSON.stringify({data:value,time:curTime})); 
    }
function get(user,exp){
        var data = localStorage.getItem(user);
        if(data){
        	var dataObj = JSON.parse(data);
	        if (new Date().getTime() - dataObj.time>exp) {
	            localStorage.removeItem(user);
	            console.log('信息已过期');
	            return false;
	        }else{
	            return true;
	        }
        }else{
        	return false;
        }

    }

function islogin(){
    return new Promise((resolve, reject) => {
        var dataObjData=get('user',1000*60*60*24*30);
        if (dataObjData) {
            resolve();
        }else{
            console.log('未登录，请先登录');
            reject();
        } 
    })  
}
export default {
    set,
    islogin
}