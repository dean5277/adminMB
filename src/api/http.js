/**
 * Created by superman on 17/3/30.
 * http配置
 */

import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import userapi from './userapi'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
axios.defaults.responseType = 'json';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Accept'] = "application/json; charset=utf-8";
/*axios.defaults.headers.post['responseType'] = 'json';*/
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json';
// http request 拦截器
axios.interceptors.request.use(
    config => {
        console.log("token:" + store.state.token);
        if (store.state.token) {
            config.headers.Authorization = `${store.state.token}`;
        }else{
            store.commit(types.ticket,'');
        }
        return config;
    },
    err => {
        console.log(err)
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        let url = window.location.href;
        if(response.data.code == 999998 && store.state.ticket == ""){
            store.commit(types.token,null);
            if(url.indexOf("ticket") > 0) url = url.split('?ticket')[0];
            window.location.href = "http://10.0.6.238/?u=" + encodeURIComponent(url);
        }else{
            return response;
        }
       
    },
    error => {
        console.log(error)
        if (error.response) {
            console.log('error')
        }
        return Promise.reject(error.response.data)
    });

export default axios;
