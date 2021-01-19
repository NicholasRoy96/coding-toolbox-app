const state = {
  mobileMenuOpen: false
}

const getters = {}

const actions = {
  toggleMobileMenu({ commit }) {
    commit('setMobileMenu')
  }
}

const mutations = {
  setMobileMenu( state ) {
    state.mobileMenuOpen = !state.mobileMenuOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}