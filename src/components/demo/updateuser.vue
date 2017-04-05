<style scoped>
	.layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .addUserContainer{width:400px; padding: 40px}
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
	                <Breadcrumb-item>用户编辑</Breadcrumb-item>
	            </Breadcrumb>
	        </div>
            <div class="layout-content-main">
                <div class="addUserContainer">
                	<Form ref="formCustom"  :rules="ruleCustom" :model="formCustom" :label-width="80">
                        <Form-item label="姓名" prop="user">
                            <Input type="text" v-model="formCustom.user"  :value="formCustom.user"></Input>
                        </Form-item>
                        <Form-item label="密码" prop="passwd">
                            <Input type="password" v-model="formCustom.passwd" placeholder="" ></Input>
                        </Form-item>
                        <Form-item label="确认密码" prop="passwdCheck">
                            <Input type="password" v-model="formCustom.passwdCheck"  placeholder=""></Input>
                        </Form-item>
                        <Form-item label="生日">
                            <Row>
                                <Col span="11">
                                    <Form-item prop="date">
                                        <Date-picker type="date" format="yyyy-MM-dd" :value="formCustom.date" v-model="formCustom.date"></Date-picker>
                                    </Form-item>
                                </Col>
                                
                            </Row>
                        </Form-item>
                         <Form-item label="性别" prop="gender">
                            <Radio-group v-model="formCustom.gender">
                                <Radio label="0">男</Radio>
                                <Radio label="1">女</Radio>
                            </Radio-group>
                        </Form-item>
                        <Form-item>
                            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                        </Form-item>
                    </Form>
                </div>
            </div>
        </i-col>
    </Row> 
</template>
<script  type="application/ecmascript">
	import leftMenu from './menu'
	import api from '../../api/userapi'
    import {fetch} from '../../api/http'
    import * as types from '../../store/types'
	export default {
	  components:{
	  	leftMenu
	  },
	  data () {
        const validatePass = (rule, value, callback) => {
       
            if (this.formCustom.passwdCheck !== '') {
                // 对第二个密码框单独验证
                this.$refs.formCustom.validateField('passwdCheck');
            }
            callback();
           
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value !== this.formCustom.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            formCustom: {
                passwd: '',
                passwdCheck: '',
                user: '',
                gender: '',
                date: '',
            },
            ruleCustom: {
                user: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                passwd: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    {required: true,  validator: validatePassCheck, trigger: 'blur' }
                ],
                gender: [
                    { required: true}
                ],
                date: [
                    { required: true}
                ]
            }
        }
	  },
	  created () {
	 	let v = this,
            uid = window.location.href.split('uid=')[1];

        if(uid != undefined && uid!=""){
            v.uid = uid;
            v.axios.get(api.get_user + uid)
            .then(response =>{
                let data = response.data;
                v.formCustom.user = data.userName;
                v.formCustom.date = v.getDateTime(data.birthDate);

                v.formCustom.gender = data.sex;
            })
            .catch(err =>{
                console.log(err)
            })
        }else{
            v.$Message.error('参数错误');
            v.$router.go(-1);
        }
	  },
	  methods:{
	  	handleSubmit (name) {
            let v = this;
            v.$refs[name].validate((valid) => {
                if (valid) {
                    
                    let obj = {
                        "id": Number(v.uid),
                        "birthDate": v.getDateTime(v.formCustom.date),
                        "confirmPassword": v.formCustom.passwdCheck,
                        "password": v.formCustom.passwd,
                        "sex": v.formCustom.gender,
                        "userName": v.formCustom.user
                    };
                    if(v.formCustom.passwd == ''){
                        delete obj.password;
                        delete obj.confirmPassword;
                    }
                    this.axios.put(api.update_user, JSON.stringify(obj))
                    .then(response => {
                        let data = response.data;
                        console.log(data)
                        if(data.success){
                            v.$Message.success('保存成功!');
                            v.$router.push('/main');
                        }
                       

                    })
                    .catch(function(err){
                        console.log(err)
                        v.$Message.error('保存失败！');
                    })
                    
                } else {
                    v.$Message.error('表单验证失败!');
                }
            })
        },
        getDateTime(date) {
            let v = this;
            let d = new Date(date),
                year = d.getFullYear(),
                month = d.getMonth() + 1  < 10 ? "0" +  d.getMonth()  :  d.getMonth() ,
                day = d.getDate() + 1  < 10 ? "0" +  d.getDate()  :  d.getDate() ;

            return year + "-" + month + "-" + day;
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        toRoute (path){
            let v = this;
            v.$router.push(path);
        }
	  }
	}
</script>

