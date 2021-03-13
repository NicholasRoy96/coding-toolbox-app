const state = {
  mobileMenuOpen: false,
  contactModalOpen: false
}

const getters = {}

const actions = {
  toggleMobileMenu({ commit }) {
    commit('setMobileMenu')
  },
  toggleContactModal({ commit }) {
    commit('setContactModal')
  }
}

const mutations = {
  setMobileMenu( state ) {
    state.mobileMenuOpen = !state.mobileMenuOpen
  },
  setContactModal( state ) {
    state.contactModalOpen = !state.contactModalOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}