<template>
    <div class="formContainer">
        <el-form ref="backgroundColorForm" label-width="100px">
            <el-form-item label="图表背景色" prop="text">
                <el-input v-model="echartBgColor" @input="setBackgroundItem" placeholder="图表背景色"/>
                <colorPicker v-model="echartBgColor" v-on:change="headleChangeColor"/>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'editBackgroundColor',
        props: {
            backgroundColor: {
                type: String,
                default: "#fff"
            }
        },
        data() {
            return {
                echartBgColor: this.backgroundColor
            }
        },
        methods: {
            setBackgroundItem() {
                this.$emit('submit', 'backgroundColor', this.echartBgColor)
            },
            headleChangeColor() {
                this.$emit('submit', 'backgroundColor', this.echartBgColor)
            }
        }
    }
</script>

<style scoped>
    .el-form-item__content{
        position: relative;
        align-items: center;
    }
    .m-colorPicker {
        position: absolute;
        right: -15px;
        top: 10px;
    }
</style>
