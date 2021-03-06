import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import vcolorpicker from 'vcolorpicker'
import 'element-ui/lib/theme-chalk/index.css';
import {saveComponent} from './utils/drag'
import api from './api' //导入api接口

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.saveComponent = saveComponent
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(vcolorpicker)

Vue.component('ws-icon', () => import('@/components/ws-icon'))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
