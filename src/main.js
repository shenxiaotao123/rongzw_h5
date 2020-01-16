// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/style/border.css'
import '@/assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import store from './store/store'
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'
import com from '@/assets/js/common.js'
import '@/assets/js/page.js'
import '@/assets/js/http.js'
import '@/assets/js/regions.js'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'N7yMzhN89vDNYLlblQbV942V7ixUfWo4'
})
Vue.prototype.$f = com
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueAwesomeSwiper)
Vue.config.silent = true
com.$router = router
com.vue = Vue

axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = 'http://admintest.rongzw.com'
Vue.directive('input-num', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  store.commit('url', [to.fullPath, from.fullPath])
  next()
})
