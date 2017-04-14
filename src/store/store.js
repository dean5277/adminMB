import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        menuJson: {},
        userType:"",
        spanLeft:5,
        uid:'',
        token: null,
        title: '',
        ticket:'',
        breadMenu:{firstMenu:"",subMenu:[{link:"",name:"",index:""}]}
    },
    mutations: {
        [types.spanLeft]: (state, data) => {
            state.spanLeft = data;
        },
        [types.breadMenu]: (state,data) =>{
            state.breadMenu = data;
        },
        [types.token]: (state,data) =>{
            state.token = data;
        },
        [types.ticket]: (state,data) =>{
            state.ticket = data;
        }
    }
})