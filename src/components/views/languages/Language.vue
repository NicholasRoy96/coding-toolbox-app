<template>
<div class="language">
    <h1>Find amazing {{ language }} tools</h1>
    <router-link :to="`/languages/${language}/testing`">{{ language }} Testing Tools</router-link> |
    <router-link :to="`/languages/${language}/linting`">{{ language }} Linting Tools</router-link>
    <router-view />
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Language',
  components: {},
  computed: {
    ...mapState([ 'languages' ]),
    language() {
      return this.languages && this.languages.selectedLanguage
        ? this.languages.selectedLanguage.name
        : ''
    }
  }
}
</script>
