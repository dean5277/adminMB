import "babel-polyfill"
import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import axios from '../api/http'
import 'iview/dist/styles/iview.css'
import store from '../store/store'
/*import '../my-theme/index.less'*/
/*import * as types from '../store/types'*/

Vue.use(VueRouter)
Vue.use(iView)
Vue.prototype.axios = axios;

import Baseframe from '../components/logistics/main'//父级路由
import UserList from '../components/logistics/userlist'//用户列表
import AddUser from '../components/logistics/adduser'//增加用户
import UpdateUser from '../components/logistics/updateuser'//修改用户
const routes = [
   {path : "/main" ,component: Baseframe,//父级路由
	   children:[//子级路由
	   	{
	   		path:'/',
	   		component:UserList
	   	},
	   	{
	   		path:'adduser',
	   		component:AddUser
	   	},
	   	{
	   		path:'updateuser',
	   		component:UpdateUser
	   	}
	   ]
	}
]

const router = new VueRouter({
  mode: 'hash',
  history:false,
  base: __dirname,
  routes
})

const app = new Vue({
  router,
  store
}).$mount('#app');







