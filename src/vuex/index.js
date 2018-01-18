// import Vue from 'vue'
var Vue = require('vue').default;
import Vuex from 'vuex'

import userInfo from './modules/user-info'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    userInfo
  },
  strict: debug
})
