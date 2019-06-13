<template>
    <div class="container">
        <component :is="item.componentName" v-for="item in componentList"/>
    </div>
</template>

<script>
    export default {
        name: 'editView',
        data(){
            return {}
        },
        mounted(){

        },
        computed:{
            componentList(){
                return this.$store.state.viewConfig.saveComponent
            }
        }
    }
</script>
