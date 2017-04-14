<style scoped>
    .addUserContainer{width:400px; padding: 40px}
</style>
<template>
	 <!-- <Row>
             <i-col span="19"> -->
            <div class="layout-content-main">
                <div class="addUserContainer">
                	<Form ref="formCustom"  :rules="ruleCustom" :model="formCustom" :label-width="80">
                        <Form-item label="姓名" prop="user">
                            <Input type="text" v-model="formCustom.user" placeholder="请输入姓名"></Input>
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
                                        <Date-picker type="date" placeholder="选择日期" v-model="formCustom.date"></Date-picker>
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
        <!-- </i-col>
            </Row>  -->
</template>
<script  type="application/ecmascript">
	
	import api from '../../api/userapi'
    import {fetch} from '../../api/http'
	export default {
	  
	  data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formCustom.passwd) {
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
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                ]
            }
        }
	  },
	  methods:{
	  	handleSubmit (name) {
            let v = this;
            v.$refs[name].validate((valid) => {
                if (valid) {
                   let obj = {
                        "birthDate": v.getDateTime(v.formCustom.date),
                        "confirmPassword": v.formCustom.passwdCheck,
                        "password": v.formCustom.passwd,
                        "sex": v.formCustom.gender,
                        "userName": v.formCustom.user
                    };
                    this.axios.post(api.add_user, JSON.stringify(obj))
                    .then(response => {
                        let data = response.data;
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
        routeTo (path){
            let v = this;
            v.$router.push(path);
        }
	  }
	}
</script>

