<template>
    <div class="ws-menu-sider">
        <el-menu :collapse="isCollapse" :unique-opened="true" mode="vertical" class="el-menu-width">
            <template v-for="submenu in menu" v-if="submenu.visible === 0">
                <el-submenu :index="String(submenu.menuId)" v-if="submenu.children.length>0" :key="submenu.menuId">
                    <template slot="title">
                        <span slot="title">
                          {{submenu.menuName || '未命名图表库'}}
                        </span>
                    </template>
                    <el-menu-item v-for="item in submenu.children" :index="String(item.menuId)" :key="item.menuId"
                                  v-if="item.visible === 0">
                        <li class="dragItem" @dragstart="dragstart" @dragend="dragEnd($event, item)" :data-name="item.componentName" draggable="true">
                            <p>{{item.title}}</p>
                            <img :src="item.chartImgSrc" alt="">
                        </li>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item :index="String(item.menuId)" :key="submenu.menuId" v-else>
                    <ws-icon :name="submenu.icon || 'folder-o'" />
                    <span slot="title">
                       <span>{{submenu.menuName || '未命名图表库'}}</span>
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
            return {
                dragStartX: '',
                dragEndX: '',
            }
        },
        methods: {
            dragstart(e){
                this.dragStartX = e.offsetX
            },
            dragEnd(e, item){
                console.log(e, item)
                this.dragEndX = e.offsetX
                if(this.dragEndX - this.dragStartX > 130){
                    this.saveComponent(e, item)
                }
            },
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
    .el-submenu .el-menu-item{
        padding-top: 10px;
        height: auto;
    }
    .dragItem{
        cursor: move;
    }
    .dragItem p {
        height: 16px;
        line-height: 16px;
    }
    .dragItem img{
        height: 80px;
        width: 90px;
    }
</style>
