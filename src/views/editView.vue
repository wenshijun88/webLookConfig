<template>
    <div class="container">
        <div class="view-container">
            <div v-for="item in componentList">
                <component :is="item.componentName" @click.native="showComponentEdit(item)"/>
                <span>{{item.innerText}}</span>
            </div>
        </div>
        <div class="edit-container">
            <el-form v-if="editFormData[curComponentId]">
                <el-form-item label="文本" prop="innerText">
                    <el-input v-model="editFormData[curComponentId].innerText"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'editView',
        data(){
            return {
                editFormData: {},
                curComponentId: '', //当前编辑的组件id
            }
        },
        mounted(){

        },
        computed:{
            componentList(){
                return this.$store.state.viewConfig.saveComponent
            }
        },
        methods: {
            showComponentEdit(item){
                this.curComponentId = item.menuId;
                if(!this.editFormData[item.menuId]){
                    this.$set(this.editFormData,item.menuId,item)
                }
            }
        }
    }
</script>
<style lang="less">
    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .el-form-item{
            display: flex;
            align-items: center;
        }
    }
    .el-radio{
        margin-right: 0;
    }
</style>
