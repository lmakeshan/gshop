<template>
  <div id="app">
    <router-view></router-view>  <!--router-view  渲染，同级中不可存在多个，多个再同级中可能出现紊乱 -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  // component的意思是组件
  components: {
    FooterGuide
  },
  // export default导出默认值
  created () {
    // 异步获取address
    this.$store.dispatch('getAddress')
    // 异步获取登录信息
    this.$store.dispatch('getUserInfo')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
   #app
      width 100%  // width的意思是宽
      height  100%  // height的意思是高
      background #f5f5f5  // background的意思是背景颜色
</style>
