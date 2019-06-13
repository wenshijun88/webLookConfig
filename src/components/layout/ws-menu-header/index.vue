<template>
    <div class="ws-menu-header">
        <div v-for="item in menu" @click="changeMenu(item)" class="menu-tab">
            <span>{{item.menuName}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ws-menu-header',
        props: {
            menu: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            changeMenu(item) {
                this.$store.dispatch('setSiderMenu', item.children)
            }
        }
    }
</script>

<style lang="less" scoped>
    .ws-menu-header {
        display: flex;
        flex-direction: row;

        .menu-tab {
            cursor: pointer;
            // padding: 0 8px 0 16px;
            padding: 10px;
            padding-right: 20px;
            height: 60px;
            box-sizing: border-box;
            line-height: 40px;
            display: inline-block;
            list-style: none;
            font-size: 14px;
            font-weight: 500;
            color: #606266;
            position: relative;

            &:hover {
                color: #409EFF;
                background: hsla(0, 0%, 100%, .5);
            }

            .fa {
                margin-left: 8px;
            }
        }

        .active {
            background: #fff;
        }

    }
</style>
