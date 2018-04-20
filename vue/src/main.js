import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 设置懒加载
Vue.use(VueLazyload, {
  // 配置项
  loading: require('./assets/imgs/timg.gif'),
  error: require('./assets/imgs/timg.gif')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
