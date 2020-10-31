<template>
  <v-toolbar tile flat max-height="60">
    <v-app-bar-nav-icon @click="toggleSidebar(!sidebar.mini)"></v-app-bar-nav-icon>
    <v-toolbar-title @click="$router.push('/')">The Coding Toolbox</v-toolbar-title>
    <v-spacer />
    <v-btn text depressed v-for="(link, index) in links" @click="$router.push(link.route)" :key="index">
      {{ link.text }}
    </v-btn>
    <v-spacer />
    <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      mdi-brightness-4
    </v-icon>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
        text: 'Categories',
        route: '/categories'
      },{
        text: 'Languages',
        route: '/languages'
      },{
        text: 'Contact',
        route: '/contact'
      }]
    }
  },
  computed: {
    ...mapState([ 'sidebar' ])
  },
  methods: {
    ...mapActions([ 'toggleSidebar' ])
  }
}
</script>
