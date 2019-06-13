import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import viewConfig from './modules/viewConfig'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        system,
        viewConfig
    },
    getters
})

export default store
