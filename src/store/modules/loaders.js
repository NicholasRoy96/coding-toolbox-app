const state = {
  pageLoaderActive: false
}

const getters = {}

const actions = {
  togglePageLoader({ commit }) {
    commit('setPageLoader')
  }
}

const mutations = {
  setPageLoader( state ) {
    state.pageLoaderActive = !state.pageLoaderActive
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}