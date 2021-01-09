const state = {
  posts: []
}

const getters = {}

const actions = {
  async getPosts({ commit }) {
    try {
      const response = await this._vm.$prismic.client.query('')
      commit( 'setPosts', response.results )
    } catch (e) {
      // suppress error
    }
  }
}

const mutations = {
  setPosts( state, posts ) {
    state.posts = posts
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}