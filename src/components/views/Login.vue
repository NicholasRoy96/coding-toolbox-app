<template>
  <form>
    <v-text-field placeholder="email"/>
    <v-text-field placeholder="password"/>
    <v-btn @click="login">Login</v-btn>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      console.log('logging in')
    }
  }
}
</script>