import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import http from './config/http'
import filters from './config/filters'

Vue.use(http)

Object.keys(filters).forEach(function(key) {
  Vue.filter(key, filters[key])
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
