<template>
  <v-bottom-sheet v-model="showCookiePolicy" inset tile>
    <v-card flat>
      <v-card-title class="pb-0">
        Your Privacy
        <v-icon>mdi-lock</v-icon>
      </v-card-title>
      <v-row class="pt-0">
        <v-col cols="8">
          <v-card-text class="pt-0 pb-0">
            We use cookies to help personalise content, tailor and measure ads, and provide a safer experience. By navigating the site, you agree to the use of cookies to collect information on and off The Coding Toolbox.
            Read our <a href="/"><strong>Cookie Policy</strong></a> to learn more or go to Cookie Preferences to manage your settings.
          </v-card-text>
        </v-col>
        <v-col cols="4">
          <v-btn @click="toggleCookiePolicy(!showCookiePolicy)" class="mr-1" outlined color="primary">Cookie Preferences</v-btn>
          <v-btn @click="toggleCookiePolicy(!showCookiePolicy)" outlined color="secondary">Save Settings</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CookiePolicy',
  computed: {
    ...mapState(['showCookiePolicy'])
  },
  methods: {
    ...mapActions(['toggleCookiePolicy'])
  }
}
</script>

