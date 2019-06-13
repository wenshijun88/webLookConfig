<template>
    <div class="ws-menu-sider">
        <el-menu :collapse="isCollapse" :unique-opened="true" mode="vertical" class="el-menu-width">
            <template v-for="submenu in menu" v-if="submenu.visible === 0">
                <el-submenu :index="String(submenu.menuId)" v-if="submenu.children.length>0" :key="submenu.menuId">
                    <template slot="title">
                        <span slot="title">
                          {{submenu.menuName || '未命名菜单'}}
                        </span>
                    </template>
                    <el-menu-item v-for="item in submenu.children" :index="String(item.menuId)" :key="item.menuId"
                                  v-if="item.visible === 0">
                        <li class="dragItem" @dragstart="dragstart" :data-name="item.componentName" draggable="true">
                            <ws-icon :name="item.icon || 'folder-o'" />
                            <span slot="title">
                                <span>{{item.menuName || '未命名菜单'}}</span>
                            </span>
                        </li>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item :index="String(item.menuId)" :key="submenu.menuId" v-else>
                    <ws-icon :name="submenu.icon || 'folder-o'" />
                    <span slot="title">
                       <span>{{submenu.menuName || '未命名菜单'}}</span>
                    </span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: 'ws-menu-sider',
        props: {
            menu: {
                type: Array,
                required: false,
                default: () => {}
            },
            isCollapse: {
                type: Boolean,
            }
        },
        data(){
            return {}
        },
        methods: {
            dragstart(e){
                this.dragStart(e)
            }
        }
    }
</script>
<style lang="less">
    .ws-menu-sider {
        overflow: auto;
        height: 100%;

        &::-webkit-scrollbar {
            display: none;
        }
        .el-menu-item:hover {
            background: #fff;
        }
        .menuitem:hover{
            background: #fff;
        }
    }
    .dragItem{
        cursor: move;
    }
</style>
