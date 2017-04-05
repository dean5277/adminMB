<style scoped>
   .layout{border:1px solid #d7dde4;background:#f5f7f9}
.layout-logo{width:100px;height:30px;background:#5b6270;border-radius:3px;float:left;position:relative;top:15px;left:20px}
.layout-nav{width:420px;margin:0 auto}
.layout-assistant{width:300px;margin:0 auto;height:inherit}
.layout-breadcrumb{padding:10px 15px 0}
.layout-content{min-height:600px;margin:15px;overflow:hidden;background:#fff;border-radius:4px}
.layout-content-main{padding:10px}
.layout-copy{text-align:center;padding:10px 0 20px;color:#9ea7b4}
.ivu-menu-dark{display: flex;flex-flow: wrap}
.ivu-menu-horizontal{min-height: 60px; height: auto}
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="2">
            <row>
                <div class="layout-logo col-2"></div>
                <Menu mode="horizontal" :theme="theme1" active-name="2">
                    <Menu-item name="1">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </Menu-item>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Menu-item name="4">
                        <Icon type="settings"></Icon>
                        综合设置
                    </Menu-item>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Submenu name="7">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Submenu name="8">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Submenu name="9">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计3分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Submenu name="10">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计3分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                </Menu>
            </row>
        </Menu>

        <div class="layout-content">
            <router-view></router-view>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; Tongtool demo
        </div>
    </div>
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