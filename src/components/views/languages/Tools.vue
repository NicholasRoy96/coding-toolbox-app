<template>
<div class="tools">
    <h1>Find amazing {{ language }} {{ tool }} tools</h1>
    <router-link :to="`/languages/${language}/testing/chaiJS`">ChaiJS Assertions</router-link> |
    <router-link :to="`/languages/${language}/testing/mocha`">Mocha Test Runner</router-link>
    <router-view />
</div>
</template>

<script>
export default {
  name: 'Tools',
  components: {},
  computed: {
    language() {
      return this.$route.params.language
    },
    tool() {
      return this.$route.params.tool
    }
  }
}
</script>
