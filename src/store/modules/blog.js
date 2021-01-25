const state = {
  posts: [],
  categories: [],
  selectedCategory: null,
  selectedBlog: null
}

const getters = {
  post: state => state.selectedBlog
}

const actions = {
  async getPosts({ commit }) {
    try {
      const response = await this._vm.$prismic.client.query('')
      commit( 'setPosts', response.results )
      const categories = [ ...new Set(response.results.map(result => result.data.category )) ]
      commit( 'setCategories', categories)
    } catch (e) {
      // suppress error
    }
  },
  selectCategory({ commit }, category) {
    commit( 'setCategory', category )
  },
  selectBlog({ commit }, blog) {
    commit( 'setBlog', blog )
  }
}

const mutations = {
  setPosts( state, posts ) {
    state.posts = posts
  },
  setCategories( state, categories ) {
    state.categories = categories
  },
  setCategory( state, category ) {
    state.selectedCategory = category
  },
  setBlog( state, blog ) {
    state.selectedBlog = blog
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}