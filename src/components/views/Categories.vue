<template>
  <div class="categories">
    <h2>Check out some categories below </h2><br />
    <v-btn text v-for="(category, index) in categories.categories" @click='selectCategory(category)' :key='index'>
      {{ category.name }}
    </v-btn>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Categories',
  computed: {
    ...mapState([ 'categories' ])
  },
  methods: {
    ...mapActions([ 'setCategory' ]),
    selectCategory(category) {
      this.setCategory(category)
      this.$router.push(`/categories/${category.slug}`)
    }
  }
}
</script>
