import Vue from 'vue'
import Vuex from 'vuex'
import set from '@/assets/js/localstorage.js'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录


export default {
    state:{
        user:JSON.parse(localStorage.getItem('user')) || {},
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            set.set('user',user);
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state) {
            localStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}