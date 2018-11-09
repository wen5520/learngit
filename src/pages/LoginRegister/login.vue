<template>
	<div >
		<form  @click.submit.prevent>
	      <p>
	        <input type="text"  name="name" v-model.trim='formData.name' placeholder="请输入账号"><br>
	      </p>
	      <p>
	        <input type="text"  name="password" v-model.trim='formData.password' placeholder="请输入密码"><br>
	      </p>
	      <button type="submit" @click="login()">登录</button>
	    </form>
	</div>
</template>
<script type="text/ecmascript-6">
  export default {
  	data(){
  		return{
  			formData: {
	          name: '',
	          password: ''
	        },
  		}
  	},
  	methods:{
		login(){
			// if(!this.formData.name || !this.formData.password) return;
			this.$store.dispatch("USER_SIGNIN", {userId:1,data:'data'}).then(() => {
				console.log('登录成功')
  				this.$router.replace({path: '/' });
			}).catch(() => {
              console.log('error')
            })
	  	}
	  }
	}
</script>