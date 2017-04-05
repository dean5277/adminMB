<style scoped>
	
</style>
<template>
	<i-col span="5">
	    <Menu active-name="1-1"  width="auto" @on-select="routeTo"  :open-names="['1']">
	        <Submenu name="1">
	            <template slot="title">
	                <Icon type="ios-navigate"></Icon>
	                用户管理
	            </template>
	            <Menu-item name="1-1">用户列表</Menu-item>
	            <Menu-item name="1-2">新增用户</Menu-item>

	        </Submenu>
	        <Submenu name="2">
	            <template slot="title">
	                <Icon type="ios-keypad"></Icon>
	                导航二
	            </template>
	            <Menu-item name="2-1" >选项 1</Menu-item>
	            <Menu-item name="2-2">选项 2</Menu-item>
	        </Submenu>
	        <Submenu name="3">
	            <template slot="title">
	                <Icon type="ios-analytics"></Icon>
	                导航三
	            </template>
	            <Menu-item name="3-1">选项 1</Menu-item>
	            <Menu-item name="3-2">选项 2</Menu-item>
	        </Submenu>
	    </Menu>
	</i-col>
</template>
<script>
	export default {
		data () {
			return {
				page: [{
                    index: "1",
                    name: '/main'
                }, {
                    index: "2",
                    name: '/main/adduser'
                }]
			}
			
		},
		created (){

		},
		computed :{
			
		},
		methods:{
			routeTo(e) {
                let t = Number(e.split('-')[1]);
                this.$router.push(this.$data.page[t - 1].name);
            },
			
		},
		mounted (){
			let v = this;
			
			
			
		}
	}
</script>