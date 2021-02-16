const state = {
  posts: [],
  filteredPosts: [],
  allCategories: [],
  allTech: [],
  selectedCategories: [],
  selectedTech: [],
  selectedBlog: null
}

const getters = {
  post: state => state.selectedBlog
}

const actions = {
  async getPosts({ commit, dispatch, state }) {
    try {
      const response = await this._vm.$prismic.client.query('')
      commit( 'setPosts', response.results )
      const allCategories = [ ...new Set([].concat(...response.results.map(result => Object.keys(result.data.filter_category[0])) )) ]
      commit( 'setCategories', allCategories)
      const allTech = [ ...new Set([].concat(...response.results.map(result => Object.keys(result.data.filter_tech[0])) )) ]
      commit( 'setTech', allTech)
      dispatch( 'filterPosts', state.posts )
    } catch (e) {
      // suppress error
    }
  },
  filterPosts({ state, commit }) {
    let posts = state.posts
    // Filter by category
    let filteredCategoryPosts = posts
    if (state.selectedCategories.length) {
      filteredCategoryPosts = posts.filter(post => {
        const filterCategory = post.data.filter_category[0]
        if (!filterCategory || !Object.keys(filterCategory).length) return
        const activeCategories = Object.keys(filterCategory).filter(key => filterCategory[key])
        return state.selectedCategories.some(tech => activeCategories.includes(tech))
      })
    }
    // Filter by tech
    let filteredTechPosts = posts
    if (state.selectedTech.length) {
      filteredTechPosts = posts.filter(post => {
        const filterTech = post.data.filter_tech[0]
        if (!filterTech || !Object.keys(filterTech).length) return
        const activeTech = Object.keys(filterTech).filter(key => filterTech[key])
        return state.selectedTech.some(tech => activeTech.includes(tech))
      })
    }

    // No filters selected
    if (!state.selectedCategories.length && !state.selectedTech.length) {
      return commit( 'setFilteredPosts', posts )
    }

    // Only category filters selected
    if (state.selectedCategories.length && !state.selectedTech.length) {
      return commit( 'setFilteredPosts', filteredCategoryPosts )
    }

    // Only tech filters selected
    if (!state.selectedCategories.length && state.selectedTech.length) {
      return commit( 'setFilteredPosts', filteredTechPosts )
    }

    // Both filters selected
    if (state.selectedCategories.length && state.selectedTech.length) {
      const filteredPosts = [ ...new Set([...filteredCategoryPosts,...filteredTechPosts]) ]
      return commit( 'setFilteredPosts', filteredPosts )
    }
  },
  selectCategory({ commit }, filterCategory) {
    let newCategories = state.selectedCategories
    if (state.selectedCategories.includes(filterCategory)) {
      newCategories = state.selectedCategories.filter(category => {
        return category !== filterCategory
      })
    }
    else {
      newCategories.push(filterCategory)
    }
    commit( 'setFilterCategory', newCategories )
  },
  selectTech({ state, commit }, filterTech) {
    let newTech = state.selectedTech
    if (state.selectedTech.includes(filterTech)) {
      newTech = state.selectedTech.filter(tech => {
        return tech !== filterTech
      })
    }
    else {
      newTech.push(filterTech)
    }
    commit( 'setFilterTech', newTech )
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
  setTech( state, tech ) {
    state.allTech = tech
  },
  setFilterCategory( state, categories ) {
    state.selectedCategories = categories
  },
  setFilterTech( state, tech ) {
    state.selectedTech = tech
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