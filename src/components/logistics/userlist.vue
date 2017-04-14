<style scoped>
	.tableContainer{padding: 10px}
	.addUser{justify-content: flex-end;padding:5px;}
	.ivu-table .demo-table-info-row td{background-color:#2db7f5;color:#fff}
    .ivu-table .demo-table-error-row td{background-color:#f60;color:#fff}
    .ivu-table td.demo-table-info-column{background-color:#2db7f5;color:#fff}
    .ivu-table .demo-table-info-cell-name{background-color:#2db7f5;color:#fff}
    .ivu-table .demo-table-info-cell-age{background-color:#f60;color:#fff}
    .ivu-table .demo-table-info-cell-address{background-color:#187;color:#fff}

</style>
<style>
    .table-container{margin-bottom: 25px;margin-top: 0;padding:0;}
    .table-header{ background-color: #ffffff; border-color: #e7eaec; border-image: none; border-style: solid solid none;border-width: 2px 0 0;color: inherit;margin-bottom: 0;padding: 15px 15px 7px;
    min-height: 48px;}
    .table-header h5{display: inline-block;font-size: 14px;margin: 0 0 7px;padding: 0;text-overflow: ellipsis;float: left;}
    .table-tools{display: block;float: none;margin-top: 0;position: relative;
    padding: 0;text-align: right;}
    .table-content{    background-color: #ffffff;color: inherit;padding: 15px 20px 20px 20px;
 border-color: #e7eaec;border-image: none;border-style: solid solid none;border-width: 1px 0;}
    .table-page{margin: 10px;overflow: hidden}
    .table-page-right{float: right}
    .arrowStatusTrans{display: none}
</style>
<template>
	 
        	
    <div class="layout-content-main">
        <Row>
            <i-col :span="24">
                <div class="table-container">
                    <div class="table-header">
                        <h5>用户列表</h5>
                        <div class="table-tools">
                            <i-button type="text" @click="toogleContentDisplay">
                                  <Icon :type="arrowStatus"></Icon>
                            </i-button>
                          
                        </div>
                    </div>
                    <div class="table-content" :class="{arrowStatusTrans : arrowDislay}">
                		<div class="flexBox addUser">
                			<Button type="primary" @click="routeTo('/main/adduser','新增用户')">新增用户</Button>
                		</div>
                		<Table  border :context="self" :columns="columns7" :data="data6"></Table>
                        <div class="table-page">
                            <div class="table-page-right">
                                <Page :total="100" show-elevator></Page>
                            </div>
                        </div>
                        
                	</div>
                </div>
            </i-col>
        </Row>
    </div>
        
</template>
<script  type="application/ecmascript">
	import api from '../../api/userapi'
    import {fetch} from '../../api/http'
    import Mixin from '../mixin/methods';
	export default {
      mixins: [ Mixin ],
	  data () {
	  	return {
	  	  self: this,
          arrowStatus:"chevron-down",
          arrowDislay:false,
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
                className: 'demo-table-info-column',
                render (row,column, index){
                	return row.birthDate;
                }
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
                    return `<i-button  size="small" @click="show(${index})">查看</i-button> <i-button  size="small" @click="editUser(${row.id})">编辑</i-button> <i-button type="error"  size="small" @click="remove(${index},${row.id})">删除</i-button>`;
                }
            }
	      ],
          param:{
	      	pageNum:"1",
			pageSize:"10"
	      }
	    }
	  },
      computed:{
        spanRight:function(){
            return 24 - this.$store.state.spanLeft
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
        .catch(err =>{
        	console.log(err)
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
        
        toogleContentDisplay (){
            let v = this;
            if(v.arrowStatus == "chevron-up"){
                v.arrowStatus = "chevron-down";
                v.arrowDislay = false;
            }else{
                v.arrowStatus = "chevron-up";
                v.arrowDislay = true;
            }
            
        }
	  }
	}
</script>

