import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        uid:'',
        token: null,
        title: ''
    },
    mutations: {
         [types.UID]: (state, data) => {
            state.uid = data;
          
        }
    }
})