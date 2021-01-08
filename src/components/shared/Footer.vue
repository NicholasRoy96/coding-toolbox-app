<template>
  <v-footer outlined padless color="gray">
    <v-card flat tile width="100%" class="text-center">
      <v-row align="center">
        <v-col cols="4" sm="2" md="1" offset="2" offset-sm="4" offset-md="5">
          <v-card flat min-height="100">
            <strong>Company</strong>
            <v-btn text @click="$router.push('/about')">About</v-btn>
            <v-btn text @click="$router.push('/contact')">Contact</v-btn>
          </v-card>
        </v-col>
        <v-col cols="4" sm="2" md="1">
          <v-card flat min-height="100">
            <strong>Further Info</strong>
            <v-btn class="text-left" text @click="$router.push('/privacy')">Privacy Policy</v-btn>
            <v-spacer />
          </v-card>
        </v-col>
      </v-row>
      <v-card-text>
          <span class="mr-4"><strong>The Coding Toolbox</strong> {{ new Date().getFullYear() }}</span>
          <a class="social mr-4" v-for="link in social" :key="link.icon" :href="link.url" target="_blank">
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </a>
      </v-card-text>
    </v-card>
  </v-footer>
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
