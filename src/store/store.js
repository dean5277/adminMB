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
        title: ''
    },
    mutations: {
        [types.spanLeft]: (state, data) => {
            state.spanLeft = data;
        }
    }
})