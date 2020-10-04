<template>
<div class="tool">
    <h2>Checkout this {{ language }} {{ tool }} tool : {{ name }}</h2>
</div>
</template>

<script>
export default {
  name: 'LanguageTool',
  components: {},
  computed: {
    language() {
      return this.$route.params.language
    },
    tool() {
      return this.$route.params.tool
    },
    name() {
      return this.$route.params.name
    }
  }
}
</script>
