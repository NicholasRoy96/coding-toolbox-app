<template>
  <div id="app">
    <v-app>
      <Header />
      <v-row>
        <Sidebar />
        <v-col cols="10">
          <router-view />
        </v-col>
      </v-row>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import Sidebar from '@/components/shared/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Sidebar
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
