<template>
    <div class="container">
        <!--顶部工具栏-->
        <div class="tools">
            <div class="tip">
                <span>背景色</span>
                <colorPicker v-model="color" v-on:change="headleChangeColor"/>
            </div>
        </div>

        <div class="view-container" :style="{'background': color}">
            <div style="width: 100%; height: 100%">
                <vue-draggable-resizable class-name="component_wraper" :key="item.id" v-for="(item,index) in componentList" :minh="50" :w="widthConfig[item.id]" :h="heightConfig[item.id]" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
                    <div style="width: 100%; height: 100%" @mousedown="setCurEditItem(item)">
                        <div class="editChart" @click="editEchart(item, index)">编辑图表</div>
                        <div class="removeChart" @click="removeEchart(index)">删除</div>
                        <div class="component_box" :id="item.id"></div>
                    </div>
                </vue-draggable-resizable>
            </div>
        </div>
        <modalEditEchart :options="editChartConfig.options" @submit="saveEditEchart" @close="closeModalEditEchart" v-if="isShowModalEditChart"></modalEditEchart>
    </div>
</template>

<script>
    import modalEditEchart from "@/components/modalEditEchart/modalEditEchart"
    import VueDraggableResizable from 'vue-draggable-resizable-gorkys'
    export default {
        name: 'editView',
        components: {
            modalEditEchart,
            VueDraggableResizable
        },
        data(){
            return {
                editFormData: {},
                curComponentId: '', //当前编辑的组件id
                myEchart: {},
                editChartConfig: {
                    options: {}
                },
                dragCurItemConfig: {
                    id: '',
                    options: {}
                },
                widthConfig: {

                },
                heightConfig: {

                },
                isShowModalEditChart: false,
                color: '#dae5f0'
            }
        },
        mounted(){

        },
        computed:{
            componentList(){
                if(this.$store.state.viewConfig.saveComponent.length<1) return;
                this.$nextTick(()=>{
                    let id = this.$store.state.viewConfig.saveComponent[this.$store.state.viewConfig.saveComponent.length-1].id
                    let options = this.$store.state.viewConfig.saveComponent[this.$store.state.viewConfig.saveComponent.length-1].options
                    this.myEchart[id] = this.$echarts.init(document.getElementById(id))
                    this.myEchart[id].setOption(options)
                })
                this.initSizeConfig(this.$store.state.viewConfig.saveComponent)
                return this.$store.state.viewConfig.saveComponent
            }
        },
        methods: {
            showComponentEdit(item){
                this.curComponentId = item.id;
                if(!this.editFormData[item.id]){
                    this.$set(this.editFormData,item.id,item)
                }
            },
            initSizeConfig(componentList) {
                componentList.forEach(item => {
                    this.$set(this.widthConfig, item.id, 380)
                    this.$set(this.heightConfig, item.id, 300)
                })
            },
            dragEnter(e){
                console.log(e)
            },
            editEchart(item, index) {
                this.editChartConfig.index = index
                this.editChartConfig.id = item.id
                this.editChartConfig.options = item.options;
                this.isShowModalEditChart = true
            },
            // 删除
            removeEchart(index){
                this.$store.dispatch('removeEchart', index)
            },
            // 保存图表编辑
            saveEditEchart(options) {
                this.myEchart[this.editChartConfig.id].setOption(options)
                this.$store.dispatch('saveEchartChange', {index: this.editChartConfig.index, options: options})
            },
            closeModalEditEchart() {
                this.isShowModalEditChart = false
            },
            onResize: function (x, y, width, height) {
                let {id, options} = this.dragCurItemConfig
                this.myEchart[id].resize();
            },
            onDrag: function (x, y, item) {

            },
            setCurEditItem(item) {
                this.dragCurItemConfig = item
            },
            headleChangeColor(color) {
                console.log(color)
            }
        }
    }
</script>
<style lang="less">
    @import '../style/vue-draggable-resizable.css';
    .container{
        width: 100%;
        justify-content: space-between;
        .view-container{
            width: 100%;
            height: 100%;
            flex: 1;
            position: relative;
            .component_wraper{
                position: absolute;
                .div_box{
                    width: 50px;
                    height: 50px;
                    border: 1px solid #ccc;
                }
            }
        }
        .el-form-item{
            display: flex;
            align-items: center;
        }
    }
    .component_box {
        width: 100%;
        height: 100%;
    }
    .component_wraper .editChart{
        padding: 5px 13px;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        display: none;
        cursor: pointer;
    }
    .component_wraper .removeChart{
        padding: 5px 13px;
        background-color: rgba(213,0,0,0.5);
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 999;
        display: none;
        cursor: pointer;
    }
    .component_wraper:hover .editChart{
        display: block;
    }
    .component_wraper:hover .removeChart{
        display: block;
    }
    .el-radio{
        margin-right: 0;
    }
    .m-colorPicker .box.open {
        z-index: 999;
    }
    .tools {
        margin-bottom: 10px;
    }
    .tools .tip{
        display: inline-block;
        font-size: 12px;
        border: 1px solid #888;
        border-radius: 3px;
        line-height: 100%;
        padding: 3px 5px;
    }
    .tools .tip span{
        vertical-align: middle;
    }
    .tools .tip .m-colorPicker {
        vertical-align: middle;
    }
</style>
