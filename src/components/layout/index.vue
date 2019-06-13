<template>
    <div class="layout">
        <!-- 半透明遮罩 -->
        <div class="layout-mask full"></div>
        <!-- 主体内容 -->
        <div class="layout-container full">
            <div class="layout-container--header">
                <transition name="fade-scale">
                    <div class="logo" :style="{width:isCollapse?'64px':'200px' }">
                        <img src="../../assets/logo.png" class="logo">
                        <span v-if="!isCollapse">前端可视化</span>
                    </div>
                </transition>
                <div class="toggle-btn" @click="toggleSider">
                    <ws-icon name="bars" />
                </div>
                <!-- 顶栏菜单 -->
                <div class="header-menu">
                    <ws-menu-header :menu="menu" />
                </div>
                <!-- 顶栏右侧 -->
                <div class="header-right">
                    <ws-full-screen />
                </div>
            </div>
            <div class="layout-container--bottom">
                <div class="aside-menu">
                    <ws-menu-sider :menu="menuSider" :isCollapse="isCollapse" />
                </div>
                <transition name="fade-scale">
                    <div class="main-layout">
                        <!--可视化编辑栏-->
                        <div class="main-layout-body">

                        </div>
                        <!-- </div> -->
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import wsMenuHeader from './ws-menu-header'
    import wsMenuSider from './ws-menu-sider'
    import wsFullScreen from './ws-full-screen'
    export default {
        name: 'Layout',
        components: {
            wsMenuHeader,
            wsMenuSider,
            wsFullScreen
        },
        data() {
            return {
                // [侧边栏宽度] 正常状态
                sideWidth: '200px',
                // [侧边栏宽度] 折叠状态
                sideWidthCollapse: '64px'
            }
        },
        computed: {
            menu() {
                return this.$store.state.system.menu
            },
            menuSider() {
                return this.$store.state.system.menuSider
            },
            isCollapse() {
                return this.$store.state.system.isCollapse
            }
        },
        methods: {
            // 菜单栏关闭
            toggleSider() {
                this.$store.dispatch('toggleSider')
            }
        }
    }
</script>

<style>
    .logo{
        width: 50px;
        height: 50px;
    }
    .layout-container--header .logo img{
        width: 50px;
        height: 50px;
    }
</style>
