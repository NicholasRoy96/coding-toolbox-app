const state = {
  posts: [],
  filteredPosts: [],
  allCategories: [],
  allTags: [],
  selectedCategory: null,
  selectedTags: [],
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
      let tagsArr = []
      response.results.forEach(result => tagsArr.push(...result.tags))
      const tags = [ ...new Set(tagsArr) ]
      commit( 'setTags', tags)
    } catch (e) {
      // suppress error
    }
  },
  filterPosts({ state, commit }) {
    let posts = state.posts
    // Filter by category
    if (state.selectedCategory) {
      posts = posts.filter(post => {
        return post.data.category === state.selectedCategory
      })
    }
    // Filter by tag
    if (state.selectedTags.length) {
      posts = posts.filter(post => {
        return state.selectedTags.some(tag => post.tags.includes(tag))
      })
    }
    commit( 'setFilteredPosts', posts )
  },
  selectCategory({ commit }, category) {
    commit( 'setFilterCategory', category )
  },
  selectTags({ state, commit }, filterTag) {
    let newTags = state.selectedTags
    if (state.selectedTags.includes(filterTag)) {
      newTags = state.selectedTags.filter(tag => {
        return tag !== filterTag
      })
    }
    else {
      newTags.push(filterTag)
    }
    commit( 'setFilterTags', newTags )
  },
  selectBlog({ commit }, blog) {
    commit( 'setBlog', blog )
  }
}

const mutations = {
  setPosts( state, posts ) {
    state.posts = posts
  },
  setFilteredPosts( state, posts) {
    state.filteredPosts = posts
  },
  setCategories( state, categories ) {
    state.allCategories = categories
  },
  setTags( state, tags ) {
    state.allTags = tags
  },
  setFilterCategory( state, category ) {
    state.selectedCategory = category
  },
  setFilterTags( state, tags ) {
    state.selectedTags = tags
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