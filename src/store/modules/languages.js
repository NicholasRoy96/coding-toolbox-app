import http from '@/utils/http'

const state = {
  languages: [],
  selectedLanguage: null
}

const getters = {}

const actions = {
  async getLanguages({ commit }) {
    const languages = await http.get('/languages')
    commit('setLanguages', languages)
  },
  setLanguage({ commit }, language) {
    commit('selectLanguage', language)
  }
}

const mutations = {
  setLanguages(state, languages) {
    state.languages = languages
  },
  selectLanguage(state, language) {
    state.selectedLanguage = language
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}