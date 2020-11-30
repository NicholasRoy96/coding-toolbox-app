import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use( Vuex )

export default new Vuex.Store({
  modules: {},
  plugins: [
    createPersistedState({})
  ],
  state: {
    showCookiePolicy: true
  },
  actions: {
    toggleCookiePolicy({commit}, toggle) {
      commit('setCookiePolicy', toggle)
    }
  },
  mutations: {
    setCookiePolicy(state, toggle) {
      state.showCookiePolicy = toggle
    }
  }
})
