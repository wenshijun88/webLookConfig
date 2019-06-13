<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    this.$api.system.init().then(res => {
      this.$store.dispatch('setMenu', res.data.data)
    })
  }
}
</script>

<style lang="less">
  @import 'style/general.less';
  @import 'style/variables.less';
  @import 'style/theme/base.less';
  @import 'style/theme/reset.less';
  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
  }
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration:none;
  }
  ul,li{
    list-style: none;
  }
#app {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  color: #606266;
  background-color: @theme-bg-color;
}
</style>
