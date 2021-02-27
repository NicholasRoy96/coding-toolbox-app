<template>
  <div id="app">
    <PageLoader v-if="loaders.pageLoaderActive" />
    <template v-else>
      <Header />
      <router-view />
      <Footer />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import PageLoader from '@/components/shared/PageLoader.vue'

export default {
  name: 'Home',
  data () {
    return {
      loading: true
    }
  },
  components: {
    Header,
    Footer,
    PageLoader
  },
  computed: {
    ...mapState([ 'loaders' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  async created() {
    const { blog } = this;
    if (!blog || !blog.posts || !blog.posts.length) {
      await this.getPosts();
    }
  }
}

</script>

<style lang="scss">

#app {
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
