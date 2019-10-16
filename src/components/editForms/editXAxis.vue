<template>
    <div class="formContainer">
        <el-form :model="xAxis" ref="xAxisForm" label-width="100px">
            <el-form-item label="是否显示" prop="show">
                <el-radio-group v-model="xAxis.show" @change="setXAxisItem($event, 'show')">
                    <el-radio :label="true">显示</el-radio>
                    <el-radio :label="false">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="xAxis.name" @input="setXAxisItem($event, 'name')" placeholder="图表标题"/>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="resetForm">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'editXAxis',
        props: {
            xAxis: {
                type: Object,
                default() {
                    return {
                        show: true,
                        name: ''
                    }
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            resetForm() {
                this.$refs.xAxisForm.resetFields()
                this.$emit('submit', 'xAxis', this.xAxis)
            },
            setXAxisItem(value,field) {
                this.xAxis[field] = value
                this.$emit('submit', 'xAxis', this.xAxis)
            }
        }
    }
</script>
