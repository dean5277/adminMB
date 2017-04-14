<style scoped>
    .top-container{width: 100%; background-color: #222533; position: fixed;z-index: 999}
	.layout-logo{width:266px;height:30px;border-radius:3px;float:left;position:relative;top:10px; line-height: 30px; text-align: center; font-size: 22px;color: #fff;font-weight: bold;border-right:1px solid rgba(255,255,255,.06);}
    .layout-logo em{font-style:normal; font-weight: normal;font-size:20px;}
    
    .ivu-menu-horizontal{min-height: 50px; height: auto; line-height: 50px}
    .ivu-menu-dark{display: flex;flex-flow: wrap;background:#222533;}
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu{color: #fff;border-right:1px solid rgba(255,255,255,.06);}
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu .ivu-menu-item{color: #657180}
    .ivu-btn-text{color: #fff}
    .layout-hide,.layout-language-icon{border-right:1px solid rgba(255,255,255,.06);border-left:1px solid rgba(255,255,255,.06);}
    .flags-sprite, .flags-american, .flags-china, .flags-france, .flags-germany, .flags-italy, .flags-japan, .flags-korea, .flags-portugal, .flags-russia, .flags-spain{
        background-image: url('../../assets/images/flags.png');background-repeat:no-repeat;
    }
    .flags-american { background-position: 0 0; height: 32px;width: 32px;}
    .flags-china{background-position:0 -32px; height: 32px; width: 32px }
    .flag{margin-top: -6px}
    .layout-flag-button{display:block; padding:14px 15px 10px 15px;}
    .ivu-dropdown{display: inline}
    .layout-language-icon .ivu-dropdown-item{line-height: 14px; position: relative;padding:7px 37px 7px 51px;}
    .layout-language-icon .ivu-dropdown-menu li div.flag{position: absolute;top: 3px; left: 10px}
    .demo-badge{width: 42px; height: 42px;background: #eee; border-radius: 6px;display: inline-block;}
    .layout-notice-button{font-size: 24px;color: #fff;padding:7px 16px;}
    .layout-notice-icon .ivu-dropdown-item{line-height: 14px; position: relative;padding:17px 37px 17px 51px;}
    .layout-notice-icon .lni_icon{ border-radius: 50%;width: 35px; height: 35px; text-align: center; position: absolute;left: 10px; top: 3px}
    .layout-notice-icon .lni_icon_normal{background-color: #259aa2 ;border-color: #259aa2;}
    .layout-notice-icon .lni_icon_waring{background-color: #e89d00 ;border-color: #e89d00;}
    .layout-notice-icon .lni_icon_red{background-color: #ff3300 ;border-color: #ff3300;}
    .layout-notice-icon .lni_icon .ivu-icon-email{font-size: 24px; color: #fff; line-height: 35px}
    .layout-user-icon{border-left:1px solid rgba(255,255,255,.06);}
    .layout-user-icon .ivu-dropdown .ivu-dropdown-rel a{position: relative;padding:7px 0px 7px 42px;color: #fff}
    .layout-user-icon .ivu-dropdown .ivu-dropdown-rel a img{width: 30px;height: 30px; border-radius: 50%; position: absolute;top: 0;left: 5px}
    .layout-user-icon .ivu-dropdown-item{line-height: 14px;  position: relative;padding:10px 30px 13px 30px }
    .layout-user-icon .ivu-dropdown-item .lsi-icon{position: absolute;left: 10px;top: 10px}
    .ivu-row{width: 100%}
    .layout-menu-span{min-height: 50px}

</style>
<style>
    .ivu-badge .ivu-badge-count{transform: translateX(10%);top: -10px;right: 0;height: 15px;
 border-radius: 15px;min-width: 15px;padding:0 4px;line-height: 15px}
 .layout-notice-icon .ivu-select-dropdown{margin:16px 0;}
</style>
<template>
    <div class="top-container ivu-menu-horizontal">
         <Row>
            <i-col :span="5">
                <div class="layout-logo">TONGTOOL<em>物流平台</em></div>
            </i-col>

            <i-col :span="1" class="layout-hide">
               <i-button type="text" @click="toggleClick">
                   <Icon type="navicon" size="26"></Icon>
               </i-button>
            </i-col>
            <i-col :span="12" class="layout-menu-span">
               <Menu  mode="horizontal" :theme="theme1" active-name="2">
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
            </i-col>
            <i-col :span="1" class="layout-language-icon" >
               <Dropdown>
                   <a href="javascript:;" class="layout-flag-button">
                       <div class="flag flags-china"></div>
                   </a>
                   <Dropdown-menu slot="list">
                       <Dropdown-item>
                           <div class="flag flags-china"></div>简体中文
                       </Dropdown-item>
                       <Dropdown-item>
                           <div class="flag flags-american"></div>English
                       </Dropdown-item>
                      
                   </Dropdown-menu>
               </Dropdown>
            </i-col>
            <i-col :span="1" class="layout-notice-icon">
               <Badge count="3">
                   <Dropdown>
                       <a href="javascript:;" class="layout-notice-button">
                           <Icon type="email"></Icon>
                       </a>
                       <Dropdown-menu slot="list">
                           <Dropdown-item>
                               <div class="lni_icon lni_icon_normal">
                                   <Icon type="email"></Icon>
                               </div>
                               您有一条新的消息
                           </Dropdown-item>
                           <Dropdown-item>
                               <div class="lni_icon lni_icon_waring">
                                   <Icon type="email"></Icon>
                               </div>
                               服务器维护公告
                           </Dropdown-item>
                           <Dropdown-item>
                               <div class="lni_icon lni_icon_red">
                                   <Icon type="email"></Icon>
                               </div>
                               服务器维护公告
                           </Dropdown-item>
                       </Dropdown-menu>
                   </Dropdown>
               </Badge>
            </i-col>
            <i-col :span="3" class="layout-user-icon" offset="1">
               <Dropdown>
                   <a href="javascript:;">
                       <img src="../../assets/images/g1.jpg" alt="">
                       Administrator
                   </a>
                   <Dropdown-menu slot="list">
                       <Dropdown-item>
                           <div class="lsi-icon">
                               <Icon type="settings"></Icon>
                           </div>
                           个人设置
                       </Dropdown-item>
                       <Dropdown-item>
                           <div class="lsi-icon">
                               <Icon type="chatbox"></Icon>
                           </div>
                           联系客服
                       </Dropdown-item>
                       <Dropdown-item>
                           <div class="lsi-icon">
                               <Icon type="log-out"></Icon>
                           </div>
                           登出
                       </Dropdown-item>
                   </Dropdown-menu>
               </Dropdown>
            </i-col>
        </Row>
    </div>
     
</template>
<script>
    import * as types from '../../store/types'
	export default {
		data () {
            return {
                theme1: 'dark',
                spanLeft:5
            }
        },
        methods:{//方法集
            toggleClick () {//方法，toggleClick () === toggleClick:function()
                let v = this;
                if(v.$store.state.spanLeft > 1){
                    v.$store.commit(types.spanLeft,0);
                }else{
                    v.$store.commit(types.spanLeft,5);
                }
                
            }
        }
	}
</script>