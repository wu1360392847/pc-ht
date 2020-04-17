import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as $http from './requests/index'
import './globalstyle.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small', zIndex: 2000 });

// 将所有请求数据函数挂载到全局进行使用，不必再单独引入
const http = { ...$http.api, ...$http.apiHome }
Vue.prototype.$http = http

Vue.config.productionTip = false

// 导出Vue实例，router，api，可能会用到this，可使用rootVueObj代替this
const rootVueObj = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

export default rootVueObj
