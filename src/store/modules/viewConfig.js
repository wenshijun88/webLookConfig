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
        },
        SAVE_ECHART_POSITION: (state, {index, left, top}) => {
            state.saveComponent[index].position.left = left;
            state.saveComponent[index].position.top = top;
        },
        SAVE_ECHART_SIZE: (state, {index, width,height}) => {
            state.saveComponent[index].size.width = width;
            state.saveComponent[index].size.height = height;
            console.log(state.saveComponent)
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
                commit('SAVE_ECHART_CHANGE', obj)
            } catch (err) {
                console.log(err)
            }
        },
        async saveEchartPosition({commit}, obj) {
            try {
                console.log(obj)
                commit('SAVE_ECHART_POSITION', obj)
            } catch (err) {
                console.log(err)
            }
        },
        async saveEchartSize({commit}, obj) {
            try {
                console.log(obj)
                commit('SAVE_ECHART_SIZE', obj)
            } catch (err) {
                console.log(err)
            }
        }
    }
}

export default viewConfig
