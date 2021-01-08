<template>
  <div>
    <h2 color="primary">Read the latest posts</h2>
    <v-row justify="center">
        <v-row v-if="!posts.length" justify="center">
          <v-col cols="3" v-for="(skeleton, index) in [1,2,3]" :key="index">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      <v-col v-else cols="3" v-for="(post, index) in posts" :key="index">
        <BlogCard :post="post"></BlogCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogCard from '@/components/blog/Card.vue'

export default {
  name: 'Blog',
  components: {
    BlogCard
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts() {
      this.$prismic.client.query('').then((response) => {
        this.posts = response.results;
      });
    }
  },
  created() {
    this.getPosts()
  }
}
</script>