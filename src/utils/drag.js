export function saveComponent(e, item) {
    let componentName = e.target.getAttribute('data-name');
    let componentInfo = {
        id: Math.random().toString(),
        componentName:componentName,
        attrs:{
            position: {
                left: e.clientX- this.$store.state.system.leftWidth,
                top: e.clientY- this.$store.state.system.topHeight
            }
        },
        options: item.options,
        childComponents:[],
        innerText:''
    }
    this.$store.state.viewConfig.saveComponent.push(componentInfo)
}
