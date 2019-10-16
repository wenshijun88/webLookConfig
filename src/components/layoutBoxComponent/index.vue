<template>
    <div class="component_box" draggable="true" v-for = "item in componentItem.children">
        <boxChildren :model="item"></boxChildren>
    </div>
</template>
<script>
    import boxChildren from './boxChildren'
    export default {
        name: 'layoutBoxComponent',
        components: {
            boxChildren
        },
        props: {
            componentItem: {
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
