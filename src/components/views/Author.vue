<template>
<div>
  <h1>{{ name }}</h1>
  <h2>{{ bio }}</h2>
  <h3>{{ role }}</h3>
  <img :src="image" />
  <div class="blog__grid">
    <div 
      v-for="(post, i) in posts"
      :key="i" 
      class="blog__grid__inner"
    >
      <BlogCard
        :post="post"
        class="blog__grid__card"
      />
    </div>
  </div>
</div>

</template>

<script>
import BlogCard from '@/components/blog/Card.vue'
export default {
  name: 'Author',
  components: {
    BlogCard
  },
  data() {
    return {
      author: null,
      posts: []
    }
  },
  computed: {
    name() {
      if (!this.author || !this.author.data || !this.author.data.name || !this.author.data.name.length) {
        return ''
      }
      return this.author.data.name[0].text
    },
    bio() {
      if (!this.author || !this.author.data || !this.author.data.bio || !this.author.data.bio.length) {
        return ''
      }
      return this.author.data.bio[0].text
    },
    role() {
      if (!this.author || !this.author.data || !this.author.data.role) {
        return ''
      }
      return this.author.data.role
    },
    image() {
      if (!this.author || !this.author.data || !this.author.data.profile) {
        return ''
      }
      return this.author.data.profile.url
    },
    authorID() {
      return this.author.id
    }
  },
  async created() {
    const { name } = this.$route.params
    if (name) {
      this.author = await this.$prismic.client.getByUID('author', name)
      const authorPosts = await this.$prismic.client.query([
        this.$prismic.Predicates.at('document.type', 'blog_post'),
        this.$prismic.Predicates.at('my.blog_post.author', this.authorID)
      ])
      this.posts = authorPosts.results
    }
  }
}

</script>