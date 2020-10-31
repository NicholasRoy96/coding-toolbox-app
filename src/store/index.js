import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Modules
import categories from './modules/categories'
import languages from './modules/languages'
import sidebar from './modules/sidebar'
import tools from './modules/tools'

Vue.use( Vuex )

export default new Vuex.Store({
  modules: {
    categories,
    languages,
    sidebar,
    tools
  },
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
