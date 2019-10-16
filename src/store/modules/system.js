import screenfull from 'screenfull'

const system = {
    state: {
        menu: [],
        menuSider: [],
        isFullScreen: false,
        isCollapse: false,
        paginationConfig: {
            pageSizes: [10, 15, 20, 50],
        },
        topHeight: '',  //顶部栏高度
        leftWidth: '',  //左边组件栏宽度
        size: 'mini'
    },
    mutations: {
        SET_MENU: (state, list) => {
            state.menu = list
        },
        SET_SIDER_MENU: (state, list) => {
            state.menuSider = list
        },
        SET_COLLAOSE: (state) => {
            state.isCollapse = !state.isCollapse
        },
        SET_FULLSCREEN: (state, status) => {
            state.isFullScreen = status
        },
        SET_TOPHEIGHT: (state, height) => {
            state.topHeight = height
        },
        SET_LEFTWIDTH: (state, width) => {
            state.leftWidth = width
        }
    },
    actions: {
        /**
         * @description 设置顶部高度
         */
        async setTopHeight({commit}, height){
            try {
                commit('SET_TOPHEIGHT', height)
            }catch (err) {
                console.log(err)
            }
        },
        /**
         * @description 设置侧边栏宽度
         */
        async setLeftWidth({commit}, width){
            try {
                commit('SET_LEFTWIDTH', width)
            }catch (err) {
                console.log(err)
            }
        },
        /**
         * @description 设置菜单，会初始化侧边栏
         */
        async setMenu({commit,dispatch},menuList){
            try {
                commit('SET_MENU', menuList)
                await dispatch('setSiderMenu', menuList[0].children)
            } catch (err) {
                console.log(err)
            }
        },
        /**
         * @description 设置侧边栏
         */
        async setSiderMenu({commit}, menuList){
            try {
                commit('SET_SIDER_MENU', menuList)
            } catch (err) {
                console.log(err)
            }
        },
        /**
         * @description 收缩侧边栏
         */
        async toggleSider({commit}) {
            try {
                commit('SET_COLLAOSE')
            } catch (err) {
                console.log(err)
            }
        },
        /**
         * @description 初始化获取全屏状态
         */
        async getFullScreen({commit}) {
            try {
                if (screenfull.enabled) {
                    screenfull.on('change', () => {
                        if (!screenfull.isFullscreen) {
                            commit('SET_FULLSCREEN', false)
                        }
                    })
                }
            } catch (error) {

            }
        },
        /**
         * @description 切换全屏
         */
        async toggleFullScreen({commit}) {
            try {
                if (screenfull.isFullscreen) {
                    screenfull.exit()
                    commit('SET_FULLSCREEN', false)
                } else {
                    screenfull.request()
                    commit('SET_FULLSCREEN', true)
                }
            } catch (err) {
                console.log(err)
            }
        },
    }
}
export default system
