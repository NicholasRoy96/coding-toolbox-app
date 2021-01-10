<template>
  <div class="blog">
    <h1>Read the latest posts</h1>
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
  h1 {
    margin-top: 30px;
    color: var(--c-primary);
    font-size: var(--font-2xl)
  } 
  &__grid {
    padding: var(--spacer-xs);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    justify-content: space-between;
    @media (min-width: 1024px) {
      padding: var(--spacer-lg) var(--spacer-2xl);
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>