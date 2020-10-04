<template>
<div class="categoryTools">
    <h1>Checkout this amazing {{ category }} tool : {{ tool }}</h1>
</div>
</template>

<script>
export default {
  name: 'CategoryTool',
  components: {},
  computed: {
    category() {
      return this.$route.params.category
    },
    tool() {
      return this.$route.params.tool
    }
  }
}
</script>
