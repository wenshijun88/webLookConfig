<template>
    <div class="component-container">
        <el-form :model="editComponentForm">
            <el-form-item label="文本">
                <el-input v-model="editComponentForm.text"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'editRadio',
        data(){
            return {
                editComponentForm: {
                    text: ''
                }
            }
        }
    }
</script>
