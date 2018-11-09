// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/router'
import store from '@/store/store'

import 'lib-flexible/flexible'

//加载公共组件
import components from '@/components/components' 
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

import '@/assets/css/base.css'
import '@/assets/css/common.css'

// request
import api from '@/request/api.js'
import islogin from '@/assets/js/localstorage.js'

import { Loading,Dialog } from 'vant';
import 'vant/lib/index.css';
Vue.use(Loading);

//定义全局变量
Vue.prototype.API = api;
Vue.prototype.islogin = islogin;
// Vue.prototype.Loading = Loading;
Vue.prototype.Dialog = Dialog;


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) 
})
