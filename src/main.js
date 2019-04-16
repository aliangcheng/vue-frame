// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from './common/axios.js'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = axios;
Vue.prototype.$axios = Axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

