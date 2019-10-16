<template>
    <div class="component_box " draggable="true">
        <component :is="model.menuName"></component>
        <box-children v-for="item in model.children" v-if="model.children.length>0" :model="item"></box-children>
    </div>
</template>
<script>
    export default {
        name: 'boxChildren',
        props: {
            model: {
                required: false,
                defaults: {}
            }
        },
        data(){
            return {}
        },
        methods: {

        }
    }
</script>
