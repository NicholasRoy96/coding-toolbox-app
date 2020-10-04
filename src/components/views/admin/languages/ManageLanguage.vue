<template>
  <div class="manageLanguage">
    <h1>Managing Language: {{ language }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ManageLanguage',
  computed: {
    language() {
      return this.$route.params.language
    }
  }
}
</script>