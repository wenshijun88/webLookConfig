import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import {dragStart} from './utils/drag'
import api from './api' //导入api接口

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.dragStart = dragStart

Vue.use(ElementUI)

Vue.component('ws-icon', () => import('@/components/ws-icon'))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
