import Vue from 'vue'
import Vuex from 'vuex'
// 引入tab
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  }
})
