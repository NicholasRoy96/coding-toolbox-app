<template>
  <div>
    <h2 color="primary">Read the latest posts</h2>
    <v-row justify="center">
        <v-row v-if="!blog.posts || !blog.posts.length" justify="center">
          <v-col cols="3" v-for="(skeleton, index) in [1,2,3]" :key="index">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      <v-col v-else cols="3" v-for="(post, index) in blog.posts" :key="index">
        <BlogCard :post="post"></BlogCard>
      </v-col>
    </v-row>
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