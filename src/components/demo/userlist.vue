<style scoped>
	.layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .tableContainer{padding: 10px}
	.addUser{justify-content: flex-end;padding:5px;}
	.ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<style>
.flexBox{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
</style>
<template>
	 <Row>
        <leftMenu></leftMenu>
        <i-col span="19">
        	<div class="layout-breadcrumb">
	            <Breadcrumb>
	                <Breadcrumb-item href="#">首页</Breadcrumb-item>
	                <Breadcrumb-item href="#">用户管理</Breadcrumb-item>
	                <Breadcrumb-item>用户列表</Breadcrumb-item>
	            </Breadcrumb>
	        </div>
            <div class="layout-content-main">
            	<div class="tableContainer">
            		<div class="flexBox addUser">
            			<Button type="primary" @click="toRoute('/main/adduser')">新增用户</Button>
            		</div>
            		<Table border :context="self" :columns="columns7" :data="data6"></Table>
            	</div>
            </div>
        </i-col>
    </Row> 
</template>
<script  type="application/ecmascript">
	import leftMenu from './menu'
	import api from '../../api/userapi'
    import {fetch} from '../../api/http'
	export default {
	  components:{
	  	leftMenu
	  },
	  data () {
	  	return {
	  	  self: this,
	  	  list:[],
	      data6: [],
	      columns7:[
  			{
                title: '姓名',
                key: 'userName',
                render (row, column, index) {
                    return `<Icon type="person"></Icon> <strong>${row.userName}</strong>`;
                }
            },
            {
                title: '生日',
                key: 'birthDate',
                sortable: true,
                className: 'demo-table-info-column'
            },
            {
                title: '性别',
                key: 'sex'
            },
            {
                title: '操作',
                key: 'action',
                width: 250,
                align: 'center',
                render (row, column, index) {
                    return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="primary" size="small" @click="editUser(${row.id})">编辑</i-button> <i-button type="error"  size="small" @click="remove(${index},${row.id})">删除</i-button>`;
                }
            }
	      ],

	      param:{
	      	pageNum:"1",
			pageSize:"10"
	      }
	    }
	  },
	  created () {
	 	let v = this;
	  	v.axios.post(api.user_list, JSON.stringify(v.param))
        .then(response => {

        	let data = response.data.datas.data;
        	var date = new Date();
        	v.data6 = data.map(function(x){
        	    x['sex'] == 0 ? x['sex'] = '男' : x['sex'] = '女';
        	    x['birthDate']  = v.getDateTime(x['birthDate']);
        		return x;
        	})

        })
	  },
	  methods:{
	  	show (index) {
            this.$Modal.info({
                title: '用户信息',
                content: `姓名：${this.data6[index].userName}<br>生日：${this.data6[index].birthDate}<br>性别：${this.data6[index].sex}`
            })
        },
        sortMethod (a,b,type) {
        },
        getDateTime(date) {
        	let v = this;
        	let d = new Date(date),
        		year = d.getFullYear(),
        		month = d.getMonth() + 1  < 10 ? "0" +  d.getMonth()  :  d.getMonth() ,
        		day = d.getDate() + 1  < 10 ? "0" +  d.getDate()  :  d.getDate() ;

        	return year + "-" + month + "-" + day;
        },
        remove (index,id) {
        	let v = this;
           
            v.axios.delete(api.user_del + id)
            .then(response => {
            	 v.data6.splice(index, 1);
            	 v.$Message.info('删除成功！');
            })
            .catch(function(err){
		        v.$Message.error('删除失败！');
		    })
        },
        editUser (id){
        	let v = this;
        	v.$router.push({path:'/main/updateuser',query:{uid:id}})
        },
        toRoute (path){
        	let v = this;
        	v.$router.push(path);
        }
	  }
	}
</script>

