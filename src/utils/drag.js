export function dragStart(e) {
    let componentName = e.target.getAttribute('data-name');
    console.dir(e.target.getAttribute('data-name'))
    let componentInfo = {
        id: Math.random().toString(),
        componentName:componentName,
        attrs:[],
        childComponents:[],
        innerText:''
    }

    this.$store.state.viewConfig.saveComponent.push(componentInfo)
}
