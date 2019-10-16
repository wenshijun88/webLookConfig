<template>
    <div class="formContainer">
        <el-form :model="title" ref="titleForm" label-width="100px">
            <el-form-item label="是否显示" prop="show">
                <el-radio-group v-model="title.show" @change="setTitleItem($event, 'show')">
                    <el-radio :label="true">显示</el-radio>
                    <el-radio :label="false">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="标题" prop="text">
                <el-input v-model="title.text" @input="setTitleItem($event, 'text')" placeholder="图表标题"/>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="resetForm">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'editTitle',
        props: {
            title: {
                type: Object,
                default() {
                    return {
                        show: true,
                        text: ''
                    }
                }
            }
        },
        data() {
            return {

            }
        },
        methods: {
            resetForm() {
                this.$refs.titleForm.resetFields()
                this.$emit('submit', 'title', this.title)
            },
            setTitleItem(value,field) {
                this.title[field] = value
                this.$emit('submit', 'title', this.title)
            }
        }
    }
</script>

<style>
    .el-form-item__content{
        margin-left: 5px!important;
    }
</style>
