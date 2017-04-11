<style scoped>
	 
	 
</style>
<template>
	<Row>	
		<i-col >
			<Menu  :active-name="active"  width="auto" @on-select="routeTo"  :open-names="['4']">
		        <Submenu name="1">
		            <template slot="title">
		                <Icon type="settings"></Icon>
		                帐号设置
		            </template>
		            <Menu-item name="1-1">认证信息</Menu-item>
                    <Menu-item name="1-2">接口配置</Menu-item>
                    <Menu-item name="1-3">修改密码</Menu-item>

		        </Submenu>
		        <Submenu name="2">
		            <template slot="title">
		                <Icon type="earth"></Icon>
		                渠道管理
		            </template>
		            <Menu-item name="2-1">认证信息</Menu-item>
		            <Menu-item name="2-2">接口配置</Menu-item>
		        </Submenu>
		        <Submenu name="3">
		            <template slot="title">
		                <Icon type="plane"></Icon>
		                发货管理
		            </template>
		            <Menu-item name="3-1">待处理的包裹</Menu-item>
		            <Menu-item name="3-2">已处理的包裹</Menu-item>
		        </Submenu>
		        <Submenu name="4">
		            <template slot="title">
		                <Icon type="lightbulb"></Icon>
		                demo
		            </template>
		            <Menu-item name="4-1">用户列表</Menu-item>
		            <Menu-item name="4-2">新增用户</Menu-item>

		        </Submenu>
		    </Menu>
		</i-col>
	</Row>

</template>
<script>
	import menuapi from '../../api/menuapi'
	export default {
		data () {
			return {
				active:'4-1',
				page: menuapi.lightbulb,
				breadcrumbObj:[]
                
			}
			
		},
		created () {
		},
		methods:{
			routeTo (e) {
                let [v,p1,p2] = [this,Number(e.split('-')[0]),Number(e.split('-')[1])];
                v.$router.push(v.$data.page[p1 - 1][p2 - 1].link);
            }
			
		},
		mounted (){
			let v = this;
		}
	}
</script>