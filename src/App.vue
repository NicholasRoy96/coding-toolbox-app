<template>
  <div id="app">
    <v-app>
      <Header />
      <v-row id="content">
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

:root {
  // Colours
  --c-primary: #F8FFF4;
  --c-secondary: #232323;
  --c-accent: #87BBA2;

  // Spacers
  --spacer-xxs: 4px;
  --spacer-xs: 8px;
  --spacer-sm: 16px;
  --spacer-base: 24px;
  --spacer-lg: 32px;
  --spacer-xl: 48px;
  --spacer-2xl: 64px;
  --spacer-3xl: 128px;

  // Fonts
  --font-primary: 'Oxygen', sans-serif;
}

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
// 
// #content {
//   background-color: #232323;
// }
</style>
