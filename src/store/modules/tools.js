import http from '@/utils/http'

const state = {
  tools: [],
  selectedTool: null
}

const getters = {}

const actions = {
  async getTools({ commit }) {
    const tools = await http.get('/tools')
    commit('setTools', tools)
  },
  setTool({commit}, tool) {
    commit('selectTool', tool)
  }
}

const mutations = {
  setTools(state, tools) {
    state.tools = tools
  },
  selectTool(state, tool) {
    state.selectedTool = tool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}