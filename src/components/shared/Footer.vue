<template>
  <footer>
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
          <span class="mr-4"><strong>The Coding Toolbox</strong> {{ new Date().getFullYear() }}</span>
          <a class="social mr-4" v-for="link in social" :key="link.icon" :href="link.url" target="_blank">
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </a>
      </v-card-text>
    </v-card>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      social: [{
        icon: 'mdi-github',
        url: 'https://www.github.com/DuncanFenning1008'
      }, {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/duncanfenning'
      }, {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/thecodingtoolbox/'
      }, {
        icon: 'mdi-youtube',
        url: 'https://www.youtube.com/channel/UCbFkOXbrNKvyX5kPRyp7MVA'
      }]
    }
  }
}
</script>

<style scoped>
  .social {
    text-decoration: none;
  }
</style>
