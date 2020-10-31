const state = {
  mini: false,
  links: [{
    text: 'JavaScript',
    icon: 'mdi-hammer-wrench',
    route: '/languages/javascript'
  },
  {
    text: 'CSS',
    icon: 'mdi-hammer-wrench',
    route: '/languages/css'
  },
  {
    text: 'PHP',
    icon: 'mdi-hammer-wrench',
    route: '/languages/php'
  },
  {
    text: 'Text Editors',
    icon: 'mdi-hammer-wrench',
    route: '/categories/text-editors'
  },
  {
    text: 'Version Control',
    icon: 'mdi-hammer-wrench',
    route: '/categories/version-control'
  },
  {
    text: 'API Clients',
    icon: 'mdi-hammer-wrench',
    route: '/categories/api-clients'
  },
  {
    text: 'DB Clients',
    icon: 'mdi-hammer-wrench',
    route: '/categories/db-clients'
  }]
}

const getters = {}

const actions = {
  toggleSidebar ({ commit }, toggle) {
    commit('toggleSidebar', toggle)
  }
}

const mutations = {
  toggleSidebar (state, toggle) {
    state.mini = toggle
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}