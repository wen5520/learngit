<template>
	<div >
	home{{workTime}}
	<div @click="canjia">报名</div>
	<router-link :to="{path:'/login'}">登录</router-link>
	<div @click="loginOut">退出登录</div>
	<van-loading />
	</div>
</template>
<script type="text/ecmascript-6">
  export default {
  	data(){
  		return {
			workTime:'',
  		}
  	},
	created(){
		let data = {};
	    this.API.workTime(data).then(res=>{
	    	console.log('then',res)
	    }).catch(err=>{
	    	console.log('catch',err)
	    })
  	},
  	methods:{
		canjia(){
			this.islogin.islogin().then(()=>{
					console.log('denglu')
			}).catch(()=>{
					console.log('no')
			})
		},
		// 退出登录
	    loginOut(){
	    	this.Dialog.confirm({
			  title: '退出登录',
			  message: '您是否要退出登录'
			}).then(() => {
			      this.$store.dispatch("USER_SIGNOUT").then(() => {
			      this.$router.replace({path: '/login' });
			    }).catch(() => {
			      console.log('error')
			    })
			}).catch(() => {
			  // on cancel
			});

	        
	    },
  	}
  }
</script>