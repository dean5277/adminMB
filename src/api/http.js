/**
 * Created by superman on 17/3/30.
 * http配置
 */

import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'


// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
axios.defaults.responseType = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error)
        if (error.response) {
            console.log('error')
        }
        return Promise.reject(error.response.data)
    });

export default axios;
