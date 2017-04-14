<style scoped>
	 .leftMenu{position: fixed;bottom: 0;top: 50px;height: 100%; background-color: #fff}
	 .leftMenuHeader{height: 49px; padding:17px 10px 17px 25px; font-size: 16px; border-right: 1px solid #e1e1e1}
	 .leftMenuHeader .ivu-icon-grid{padding-right: 10px}
	 .layout-copy{position: absolute;bottom: 50px; left: 0;width: 100%; height: 49px; line-height: 49px; text-align: center}

</style>
<template>
	<div class="leftMenu ivu-col-span-5">
		<div class="leftMenuHeader">
			<Icon type="grid"></Icon>
			
		</div>
		<Row>	
			<i-col >
				<Menu  :active-name="active" :v="active"  width="auto" @on-select="routeTo"  :open-names="openNames">
			        <Submenu v-for="(item,index) in page" :name="index" :key="item.id">
			            <template slot="title">
			                <Icon :type="item.iconName"></Icon>
			                {{item.mainTitle}}
			            </template>
			            <Menu-item v-for="(subItem,i) in item.subMenu" :key="item.id" :name="index + '-' + i">{{subItem.name}}</Menu-item>
	                   <!--  <Menu-item name="1-2">接口配置</Menu-item>
	                   <Menu-item name="1-3">修改密码</Menu-item> -->

			        </Submenu>
			       <!--  <Submenu name="2">
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
			       
			       </Submenu> -->
			    </Menu>
			</i-col>
		</Row>
		<div class="layout-copy">
            2017 &copy; Tongtool demo
        </div>
	</div>
</template>
<script>
	import menuapi from '../../api/menuapi'
	import * as types from '../../store/types'
	export default {
		data () {
			return {
				active:"3-0",
				page: menuapi.lightbulb,
				breadcrumbObj:[],
				openNames:[3]
                
			}
			
		},
		created (){
			let [v,p1,p2] = [this,Number(this.active.split('-')[0]),Number(this.active.split('-')[1])];
			let ldp = v.page[p1];
			let bm = {
				firstMenu:ldp.mainTitle,
				subMenu:[ldp.subMenu[p2]]
			}
            v.$store.commit(types.breadMenu,bm);
		},
		methods:{
			routeTo (e) {
                let [v,p1,p2] = [this,Number(e.split('-')[0]),Number(e.split('-')[1])];
                let ldp = v.page[p1];
                let bm = {
					firstMenu:ldp.mainTitle,
					subMenu:[ldp.subMenu[p2]]
				};
                v.$store.commit(types.breadMenu,bm);
                v.$router.push(ldp.subMenu[p2].link);
            }
			
		}
	}
</script>