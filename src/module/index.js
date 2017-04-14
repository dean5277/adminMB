import "babel-polyfill"
import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import axios from '../api/http'
import 'iview/dist/styles/iview.css'
import store from '../store/store'
/*import '../my-theme/index.less'*/
import * as types from '../store/types'
import userapi from '../api/userapi'
Vue.use(VueRouter)
Vue.use(iView)
Vue.prototype.axios = axios;


//引入组件
//demo
import Baseframe from '../components/logistics/main'//父级路由
import UserList from '../components/logistics/userlist'//用户列表
import AddUser from '../components/logistics/adduser'//增加用户
import UpdateUser from '../components/logistics/updateuser'//修改用户
//帐号设置

//渠道设置

//发货管理


//路由配置
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
 
//全局导航钩子
router.beforeEach ((to, from, next) => {
	if(to.fullPath.indexOf('ticket') > 0){
		let ticket = getQueryString("ticket");
		console.log("lll:" + ticket);
		store.commit(types.ticket,ticket);
		console.log('indexticket:' + store.state.ticket)
		axios.get(userapi.get_token + ticket)
		.then(response =>{
			store.commit(types.token,response.data.datas.token);
			next();
		}).
		catch(err =>{
			console.log(err);
			next();
		});
	}else{
	   next();
	}
	

});

function getQueryString(name) {//获取url里面的参数
	let reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.href.substr(1).match(reg);
    if (r != null){return unescape(r[2]);}else{return null;};
}

//创建实例挂载到#app
const app = new Vue({
  router,
  store
}).$mount('#app');







