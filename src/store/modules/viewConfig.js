const viewConfig = {
    state: {
        saveComponent: [

        ]
    },
    mutations: {
        REMOVE_ECHART:(state, index) => {
            state.saveComponent.splice(index,1)
        },
        SAVE_ECHART_CHANGE: (state, {index, options}) => {
            Object.assign(state.saveComponent[index], {options})
        }
    },
    actions: {
        async removeEchart({commit}, index) {
            try {
                commit('REMOVE_ECHART', index)
            } catch (err) {
                console.log(err)
            }
        },
        async saveEchartChange({commit},obj) {
            try {
                console.log(obj)
                commit('SAVE_ECHART_CHANGE', obj)
            } catch (err) {
                console.log(err)
            }
        }
    }
}

export default viewConfig
