<template>
    <div class="formContainer">
        <el-form :model="yAxis" ref="yAxisForm" label-width="100px">
            <el-form-item label="是否显示" prop="show">
                <el-radio-group v-model="yAxis.show" @change="setYAxisItem($event, 'show')">
                    <el-radio :label="true">显示</el-radio>
                    <el-radio :label="false">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="yAxis.name" @input="setYAxisItem($event, 'name')" placeholder="图表Y轴名称"/>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="resetForm">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'editYAxis',
        props: {
            yAxis: {
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
                this.$refs.yAxisForm.resetFields()
                this.$emit('submit', 'yAxis', this.yAxis)
            },
            setYAxisItem(value,field) {
                this.yAxis[field] = value
                this.$emit('submit', 'yAxis', this.yAxis)
            }
        }
    }
</script>
