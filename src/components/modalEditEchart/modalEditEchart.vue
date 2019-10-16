<template>
    <el-dialog class="min-form-dialog" title="编辑图表" :visible="true" width="60%" :modal="true" @close="close">
        <div id="main-container" class="main-container">
            <div id="editFormContainer" class="editFormContainer" style="flex: 1">
                <editTitle @submit="changeEchart" v-if="showEditConfig.isShowEditTitle"></editTitle>
                <editXAxis @submit="changeEchart" v-if="showEditConfig.isShowEditXAxis"></editXAxis>
                <editYAxis @submit="changeEchart" v-if="showEditConfig.isShowEditYAxis"></editYAxis>
            </div>
            <div class="rightContainer" style="width: 66%">
                <div class="editBtn">
                    <div class="btn" @click="showEdit('isShowEditTitle')">编辑标题</div>
                    <div class="btn" @click="showEdit('isShowEditXAxis')">编辑X轴</div>
                    <div class="btn" @click="showEdit('isShowEditYAxis')">编辑Y轴</div>
                </div>
                <div id="chart-panel" class="right-panel" style="width: 100%; height: 100%"></div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">取消</el-button>
            <el-button type="primary" @click="handleSubmit">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import editTitle from '@/components/editForms/editTitle'
    import editXAxis from '@/components/editForms/editXAxis'
    import editYAxis from '@/components/editForms/editYAxis'
    export default {
        name: 'modalEditEchart',
        components: {
            editTitle,
            editXAxis,
            editYAxis
        },
        props: {
            options: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return {
                echart: {},
                showEditConfig: {
                    isShowEditTitle: false,
                    isShowEditXAxis: false,
                    isShowEditYAxis: false
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.echart = this.$echarts.init(document.getElementById('chart-panel'))
                this.echart.setOption(this.options)
            })
        },
        methods: {
            changeEchart(field, obj) {
                this.options[field] = this.options[field] || {}
                Object.assign(this.options[field], obj)
                this.echart.setOption(this.options)
            },
            handleSubmit() {

            },
            close() {
                this.$emit('close')
            },
            showEdit(field) {
                for (let key in this.showEditConfig) {
                    this.showEditConfig[key] = false
                }
                this.showEditConfig[field] = true
            }
        }
    }

</script>

<style>
    .el-dialog__body {
        height: 100%;
    }
    .el-dialog{
        height: 100%;
    }
    .main-container {
        height: 90%;
    }
    .rightContainer {
        position: relative;

    }
    .rightContainer .editBtn {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        z-index: 999;
    }
    .editBtn .btn{
        padding: 5px 10px;
        background-color: rgba(0,0,0,0.3);
        color: #fff;
        margin-right: 10px;
        border-radius: 3px;
        cursor: pointer;
    }
    .main-container {
        display: flex;
    }
</style>
