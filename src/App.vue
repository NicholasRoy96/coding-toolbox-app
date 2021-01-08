<template>
  <div id="app">
    <v-app>
      <Header />
      <v-row>
        <v-col class="ma-0 pa-0" cols="12">
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

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
#app {
  font-family: 'Oxygen', sans-serif;
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
