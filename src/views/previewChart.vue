<template>
    <el-dialog title="预览图表" :visible="true" :fullscreen="true" :modal="true" @close="close">
        <div id="previewChart"></div>
    </el-dialog>
</template>

<script>
    export default {
        name: 'preViewChart',
        data () {
            return {
                previewChartConfig: {
                    chartList: this.$store.state.viewConfig.saveComponent,
                },
                myEchart: {}
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.init()
            })
        },
        methods: {
            init() {
                document.getElementById('previewChart').style.cssText = 'position:relative; width: 100%; height: 100%';
                this.createChartDom();
                this.initCharts()
            },
            createChartDom () {
                let parentDom = document.getElementById('previewChart')
                this.previewChartConfig.chartList.forEach(item => {
                    let tempDiv = document.createElement("div")
                    tempDiv.id = item.id
                    console.log(item.size.height)
                    tempDiv.style.cssText = `position: absolute;width:${item.size.width}px;height:${item.size.height}px; left: ${item.position.left}px; top: ${item.position.top}px`
                    parentDom.appendChild(tempDiv)
                })
            },
            // 初始化图表
            initCharts () {
                this.previewChartConfig.chartList.forEach(item => {
                    this.myEchart[item.id] = this.$echarts.init(document.getElementById(item.id))
                    this.myEchart[item.id].setOption(item.options)
                })
            },
            close() {
                this.$emit('close')
            }
        }
    }
</script>
