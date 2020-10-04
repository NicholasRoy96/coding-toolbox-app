<template>
  <div class="categoryTools">
      <h1>Checkout these {{ categories.selectedCategory.name }} tools</h1>
      <v-btn v-for="(tool, index) in tools" @click="selectTool(tool)" :key="index">{{ tool.name }}</v-btn>
      <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CategoryTools',
  computed: {
    ...mapState([ 'categories', 'tools' ])
  },
  methods: {
    ...mapActions(['setTool']),
    selectTool(tool) {
      this.setTool(tool)
      this.$router.push(`/categories/db/${tool.slug}`)
    }
  }
}
</script>
