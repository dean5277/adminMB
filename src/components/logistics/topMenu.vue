<style scoped>
	.layout-logo{width:100px;height:30px;background:#5b6270;border-radius:3px;float:left;position:relative;top:15px;left:20px}
    .ivu-menu-dark{display: flex;flex-flow: wrap}
    .ivu-menu-horizontal{min-height: 60px; height: auto}
</style>
<template>
	<Menu mode="horizontal" theme="dark" active-name="2">
        <row>
            <div class="layout-logo col-2"></div>
            <Menu mode="horizontal" :theme="theme1" active-name="2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="settings"></Icon>
                        帐号设置
                    </template>
                    <Menu-group title="子菜单">
                        <Menu-item name="1-1">认证信息</Menu-item>
                        <Menu-item name="1-2">接口配置</Menu-item>
                        <Menu-item name="1-3">修改密码</Menu-item>
                    </Menu-group>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="earth"></Icon>
                        渠道管理
                    </template>
                    <Menu-group title="子菜单">
                        <Menu-item name="2-1">认证信息</Menu-item>
                        <Menu-item name="2-2">接口配置</Menu-item>
                    </Menu-group>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="plane"></Icon>
                        发货管理
                    </template>
                    <Menu-group title="子菜单">
                        <Menu-item name="3-1">待处理的包裹</Menu-item>
                        <Menu-item name="3-2">已处理的包裹</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </row>
    </Menu>
</template>
<script>
	export default {
		data () {
            return {
                theme1: 'dark'
            }
        }
	}
</script>