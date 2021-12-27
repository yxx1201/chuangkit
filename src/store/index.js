import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isApp: true
  },
  mutations: {
    FisApp(state) {
      state.isApp = !state.isApp
    }
  },
  actions: {
  },
  modules: {
  }
})
