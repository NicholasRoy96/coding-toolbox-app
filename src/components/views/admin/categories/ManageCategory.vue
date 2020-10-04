<template>
  <div class="ManageCategory">
    <h1>Managing Category: {{ category }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ManageCategory',
  computed: {
    category() {
      return this.$route.params.category
    }
  }
}
</script>