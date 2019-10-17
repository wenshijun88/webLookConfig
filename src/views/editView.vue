<template>
    <div class="container">
        <div class="view-container">
            <div style="width: 100%; height: 100%">
                <vue-draggable-resizable :key="item.id" v-for="item in componentList" :w="widthConfig[item.id]" :h="heightConfig[item.id]" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
                    <div style="width: 100%; height: 100%" @mousedown="setCurEditItem(item)">
                        <div class="editChart" @click="editEchart(item)">编辑图表</div>
                        <div class="component_box" :id="item.id"></div>
                        <div class="component_box" draggable="true" v-if="item.componentName === 'div'">
                            <div class="component_box div_box" @dragenter="dragEnter">

                            </div>
                        </div>
                    </div>
                </vue-draggable-resizable>
            </div>
        </div>
        <modalEditEchart :options="editChartConfig.options" @close="closeModalEditEchart" v-if="isShowModalEditChart"></modalEditEchart>
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
                this.curComponentId = item.menuId;
                if(!this.editFormData[item.menuId]){
                    this.$set(this.editFormData,item.menuId,item)
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
            editEchart(item) {
                this.editChartConfig.options = item.options;
                this.isShowModalEditChart = true
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
            }
        }
    }
</script>
<style lang="less">
    @import '../style/vue-draggable-resizable.css';
    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .view-container{
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
        background-color: rgba(0,0,0,0.6);
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
    .component_wraper:hover .editChart{
        display: block;
    }
    .el-radio{
        margin-right: 0;
    }
</style>
