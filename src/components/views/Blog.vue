<template>
  <div class="blog">
    <h2 color="primary">Read the latest posts</h2>
    <div class="blog__grid">
      <BlogCard
        v-for="(post, i) in blog.posts"
        :key="i"
        :post="post"
        class="blog__grid__card"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/blog/Card.vue'
import { mapState } from 'vuex'

export default {
  name: 'Blog',
  components: {
    BlogCard
  },
  computed: {
    ...mapState([ 'blog' ])
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__grid {
    padding: var(--spacer-xs);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (min-width: 1024px) {
      padding: var(--spacer-lg) var(--spacer-2xl)
    }
    &__card {
      flex: 0 0 50%;
      padding: var(--spacer-sm);
      @media (min-width: 1024px) {
        flex: 0 0 33%;
        padding: var(--spacer-lg);
      }
    }
  }
}
</style>