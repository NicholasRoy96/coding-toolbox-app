<template>
  <v-toolbar tile flat min-height="120" max-height="120">
    <v-img src="../../assets/logo.png" class="logo" @click="$router.push('/')" />
    <v-spacer />
    <v-btn class="link" large text depressed v-for="(link, index) in links" @click="$router.push(link.route)" :key="index">
      {{ link.text }}
    </v-btn>
    <v-spacer />
    <v-icon class="themeToggle" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      mdi-brightness-4
    </v-icon>
  </v-toolbar>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      links: [{
        text: 'Home',
        route: '/'
      },{
        text: 'About',
        route: '/about'
      },{
        text: 'Blog',
        route: '/blog'
      },{
        text: 'Contact',
        route: '/contact'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  cursor: pointer;
  max-width: 110px;
  max-height: 110px;
  margin-left: 32px;
  margin-top: 50px;
}
.link {
  font-size: 24px !important;
  margin-top: 50px;
}
.themeToggle {
  margin-top: 50px;
}
</style>
