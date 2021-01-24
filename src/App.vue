<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
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
