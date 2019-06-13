<template>
    <el-tooltip effect="dark" :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
        <el-button class="d2-mr btn-text can-hover" type="text" @click="toggle">
            <ws-icon v-if="isFullScreen" name="compress" />
            <ws-icon v-else name="arrows-alt" style="font-size: 16px" />
        </el-button>
    </el-tooltip>
</template>

<script>
    export default {
        computed: {
            isFullScreen() {
                return this.$store.state.system.isFullScreen
            }
        },
        methods: {
            toggle() {
                this.$store.dispatch('toggleFullScreen')
            }
        }
    }
</script>
