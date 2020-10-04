import http from '@/utils/http'

const state = {
  categories: [],
  selectedCategory: null
}

const getters = {}

const actions = {
  async getCategories({ commit }) {
    const categories = await http.get('/categories')
    commit('setCategories', categories)
  },
  setCategory({ commit }, category) {
    commit('selectCategory', category)
  }
}

const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  selectCategory(state, category) {
    state.selectedCategory = category
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}