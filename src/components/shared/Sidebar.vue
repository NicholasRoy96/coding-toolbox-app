<template>
  <v-navigation-drawer
    class="pa-0 ma-0"
    :mini-variant="sidebar.mini"
    style="max-height: 800px"
    clipped
    floating
  >
    <v-btn v-for="(button, index) in sidebar.links"
      :key="index"
      class="text-capitalize"
      :class="[
        /* { 'active-button-dark': selected(category) && darkMode },
        { 'active-button-light': selected(category) && !darkMode } */
      ]"
      large
      block
      text
      tile
      @click="$router.push(button.route)">
      <v-col cols="1">
        <!-- <v-icon left class="category-icon pr-2" :class="selected(category) ? 'active-icon' : ''"> -->
        <v-icon left class="category-icon pr-2">
          {{ button.icon }}
        </v-icon>
      </v-col>
      <v-col>
        <!-- <span :class="selected(category) ? 'font-weight-black' : 'font-weight-light'"> -->
        <span>
          {{ button.text }}
        </span>
      </v-col>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
 
export default {
  name: 'Sidebar',
  computed: {
    ...mapState([ 'sidebar' ]),
    darkMode () {
      return this.$vuetify.theme.isDark
    }
  }
}
</script>

<style scoped>
  .v-btn > .v-btn__content .v-icon.category-icon {
    color: #5F5F5F;
  }
</style>