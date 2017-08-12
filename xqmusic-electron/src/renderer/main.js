import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

import App from './App'
import router from './router'

import 'font-awesome-webpack'

/* Vuex store */
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

