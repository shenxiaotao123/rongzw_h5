// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import less from 'less'
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
});

axios.interceptors.request.use((config) => {
  if (config.method === 'get') {
    var querystring = require('querystring');
    config.data = querystring.encode(config.data);
  }
  if (config.method === 'post') {
    var querystring = require('querystring');
    config.data = querystring.encode(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

Vue.prototype.$f = com
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueAwesomeSwiper)
Vue.use(less)
Vue.config.silent = true
com.$router = router
com.vue = Vue
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
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
