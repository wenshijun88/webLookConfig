export function saveComponent(e, item) {
    let componentName = e.target.getAttribute('data-name');
    let componentInfo = {
        id: Math.random().toString(),
        componentName:componentName,
        position: {
            left: e.clientX- this.$store.state.system.leftWidth,
            top: e.clientY- this.$store.state.system.topHeight-35
        },
        size: {
            width: 380,
            height: 300
        },
        options: item.options,
        childComponents:[],
        innerText:''
    }
    this.$store.state.viewConfig.saveComponent.push(componentInfo)
}
