<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', '宋体', Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 样式重置
  color: $font-color-small;
  font-size: $font-size-small;
  background: $bg-color-small;
  height: 100%;
  min-width: 720px;
}
</style>
