<template>
  <div class="home">
    <v-card flat>
      <v-card-title class="justify-center">Welcome to The Coding Toolbox</v-card-title>
    </v-card>
    <CookiePolicy />
  </div>
</template>

<script>
import CookiePolicy from '@/components/shared/CookiePolicy.vue'
export default {
  name: 'Home',
  components: {
    CookiePolicy
  }
}
</script>
