import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)
 
const router = new Router({
  routes: [
    {
        path: '/', 
        redirect: '/home',
        component: resolve => require(['@/pages'], resolve),
        children:[
            { path: 'home', component: resolve => require(['@/pages/Home'], resolve)},
            { path: 'brand', component: resolve => require(['@/pages/Brand'], resolve)},
            { path: 'member', component: resolve => require(['@/pages/Member'], resolve)},
            { path: 'cart', component: resolve => require(['@/pages/Cart'], resolve)},
            { path: 'me', component: resolve => require(['@/pages/Me'], resolve)}
        ]
    },
    {
        path: '/login', 
        component: resolve => require(['@/pages/LoginRegister/login'], resolve)
    }
  ]
})
router.beforeEach((to, from, next) => {
    // 中断请求
   Vue.prototype.cancelAjax() 
    next();//继续
})

export default router