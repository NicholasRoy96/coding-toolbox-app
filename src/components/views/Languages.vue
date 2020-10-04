<template>
  <div class="languages">
    <v-btn text v-for="(language, index) in languages.languages" @click='selectLanguage(language)' :key='index'>
      {{ language.name }}
    </v-btn>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Languages',
  computed: {
    ...mapState([ 'languages' ])
  },
  methods: {
    ...mapActions([ 'setLanguage' ]),
    selectLanguage(language) {
      this.setLanguage(language)
      this.$router.push(`/languages/${language.slug}`)
    }
  }
}
</script>
