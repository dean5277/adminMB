<style scoped>
     /* scoped 代表该样式只对该组件生效，DOM会附加唯一的hash数据 */
    .layout-header{ height: 60px;background: #fff;box-shadow: 0 1px 1px rgba(0,0,0,.1);}
    .layout{background:#f5f7f9}
    .layout-nav{width:420px;margin:0 auto}
    .layout-assistant{width:300px;margin:0 auto;height:inherit}
    .layout-breadcrumb{padding:10px 15px 0}
    .layout-content{min-height:600px;margin:15px;overflow:hidden;background:#fff;border-radius:4px}
    .layout-content-main{padding:10px}
    .layout-copy{text-align:center;padding:10px 0 20px;color:#9ea7b4}
    .layout-hide-text{display: none;}
    .layout-breadcrumb{padding: 13px 15px 0;}
</style>
<template>
    <div class="layout">
        <topMenu></topMenu>
        <div class="layout-content">
            <div class="layout-header">
                <Row>
                    <i-col :span="spanLeft">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                    </i-col>
                    <i-col :span="spanRight">
                        <div  class="layout-breadcrumb">
                            <!-- 面包屑 -->
                            <Breadcrumb>
                                <Breadcrumb-item>{{subMenuName}}</Breadcrumb-item>
                                <Breadcrumb-item replace href="/main">用户列表</Breadcrumb-item>
                            </Breadcrumb>
                        </div>
                    </i-col>
                </Row>
            </div>
            <Row>
                <i-col :span="spanLeft" :class="{'layout-hide-text': spanLeft < 5}">
                     <!-- 左侧菜单组件 -->
                    <leftMenu></leftMenu>
                </i-col>
                <!--router-view 路由组件 -->
                <router-view></router-view>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; Tongtool demo
        </div>
    </div>
</template>
<script>
    /*引入模块,类似于script src 但这是模块化，只抽取模块功能*/
    import topMenu from './topMenu'
    import leftMenu from './leftMenu'
    import * as types from '../../store/types'
    export default {
        components:{
            topMenu,//顶部菜单组件，自定义组件
            leftMenu
        },
        data () {
            return {
                subMenuName:""
            }
        },
        computed:{//动态计算属性
            spanLeft:function(){
                return this.$store.state.spanLeft != 0 ? this.$store.state.spanLeft : 1;
            },
            spanRight:function(){
                return 19 - this.$store.state.spanLeft;
            }
        },
        methods:{//方法集
            toggleClick () {//方法，toggleClick () === toggleClick:function()
                let v = this;
                if(v.spanLeft > 1){
                    v.$store.commit(types.spanLeft,0);
                }else{
                    v.$store.commit(types.spanLeft,5);

                }
                
            }
        }
    }
</script>