<template>
<div class="home">
  <v-card flat>
    <v-card-title class="justify-center">Welcome to The Coding Toolbox</v-card-title>
    {{ categories.categories }} <br />
    --------------- <br />
    {{ languages.languages }} <br />
    --------------- <br />
    {{ tools.tools }}
    
  </v-card>
    <CookiePolicy />
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CookiePolicy from '@/components/shared/CookiePolicy.vue'
export default {
  name: 'Home',
  components: {
    CookiePolicy
  },
  computed: {
    ...mapState([ 'categories', 'languages', 'tools' ])
  },
  methods: {
    ...mapActions([ 'getCategories', 'getLanguages', 'getTools' ])
  },
  async mounted() {
    await Promise.all([
      this.getCategories(),
      this.getLanguages(),
      this.getTools()
    ])
  }
}
</script>
