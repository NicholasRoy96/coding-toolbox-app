import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import blog from './modules/blog'
import modals from './modules/modals'
import loaders from './modules/loaders'

Vue.use( Vuex )

export default new Vuex.Store({
  modules: {
    blog,
    modals,
    loaders
  },
  plugins: [
    createPersistedState({})
  ]
})
