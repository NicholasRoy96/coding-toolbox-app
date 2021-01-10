<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,600;1,600&display=swap');

:root {
  // Colours
  --c-primary: #474747;
  --c-secondary: #F8FFF4;
  --c-accent: #87BBA2;

  // Background
  --bg-primary: #212121;
  
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
  --font-primary: 'Lato', sans-serif;
  --font-header: 'Raleway', sans-serif;

  // &Font-size
  --font-xxs: 8px;
  --font-xs: 12px;
  --font-sm: 16px;
  --font-base: 20px;
  --font-lg: 24px;
  --font-xl: 28px;
  --font-2xl: 32px;
}

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
