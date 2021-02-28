const state = {
  posts: [],
  page: 1,
  pageSize: 6,
  totalPages: null,
  categoryFilters: [],
  techFilters: [],
  selectedCategories: [],
  selectedTech: [],
  selectedBlog: null
}

const getters = {
  post: state => state.selectedBlog
}

const actions = {
  async getPosts({ commit, state }) {
    try {
      // Base query
      const query = [this._vm.$prismic.Predicates.at('document.type', 'blog_post')]

      // Add category filters - currently && not ||
      if (state.selectedCategories.length) {
        state.selectedCategories.forEach(filter => {
          query.push(this._vm.$prismic.Predicates.at(`my.blog_post.filter_category.${filter}`, true))
        })
      }

      // Add tech filters - currently && not ||
      if (state.selectedTech.length) {
        state.selectedTech.forEach(filter => {
          query.push(this._vm.$prismic.Predicates.at(`my.blog_post.filter_tech.${filter}`, true))
        })
      }

      const response = await this._vm.$prismic.client.query(
        query,
        { pageSize : state.pageSize, page: state.page }
      )

      // Set posts
      commit( 'setPosts', response.results )

      // Set total pages based on results returned
      commit( 'setTotalPages', response.total_pages )

      // Store category filters if there are more than in state
      const categoryFilters = [ ...new Set([].concat(...response.results.map(result => Object.keys(result.data.filter_category[0])) )) ]
      if (categoryFilters.length > state.categoryFilters) {
        commit( 'setCategories', categoryFilters )
      }

      // Store tech filters if there are more than in state
      const techFilters = [ ...new Set([].concat(...response.results.map(result => Object.keys(result.data.filter_tech[0])) )) ]
      if (techFilters.length > state.techFilters) {
        commit( 'setTech', techFilters )
      }
    } catch (e) {
      // suppress error
    }
  },
  selectCategory({ state, commit }, filterCategory) {
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
  },
  setPage({ dispatch, commit }, page) {
    commit( 'setPage', page)
    dispatch('getPosts')
  }
}

const mutations = {
  setPosts( state, posts ) {
    state.posts = posts
  },
  setTotalPages( state, totalPage ) {
    state.totalPages = totalPage
  },
  setPage( state, page ) {
    state.page = page
  },
  setCategories( state, categories ) {
    state.categoryFilters = categories
  },
  setTech( state, tech ) {
    state.techFilters = tech
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