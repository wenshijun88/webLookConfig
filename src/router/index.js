import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: {
            name: 'editView'
        },
        component: () => import('@/components/layout/index.vue'),
        children: [
            {
                path: '/system/editView',
                name: 'editView',
                meta: {
                    title: '配置可视化'
                },
                component: () => import('@/views/editView')
            },
            {
                path: '/system/previewChart',
                name: 'previewChart',
                meta: {
                    title: '图表预览'
                },
                component: () => import('@/views/previewChart')
            }
        ]
    }]
})
