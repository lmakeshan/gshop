// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // store：存储
import '@/mock/mockServer' // 加载mockServer即可
import Split from './components/Split/Split.vue' // Split是分割的意思

// 注册全局组件标签
Vue.component('Split', Split)
Vue.config.productionTip = false // config是设置的意思

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  components: { App },
  template: '<App/>',
  store
})
