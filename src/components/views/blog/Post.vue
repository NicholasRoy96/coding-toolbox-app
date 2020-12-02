<template>
  <section v-if="!loading" class="post">
    <img :src="image.url" class="post__image" />
    <div class="post__content">
      <div class="post__heading">
        <h1 class="post__heading__title" color="primary">{{ title }}</h1>
        <h4 class="post__heading__subtitle">By {{ author }} | {{ date | formatDate }}</h4>
      </div>
      <div v-for="(paragraph, index) in content" :key="index" class="post__text">
        {{ paragraph.text }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      post: null,
      loading: true
    };
  },
  computed: {
    blogID() {
      return this.$route.params.id
    },
    title() {
      if (!this.post || !this.post.blog_title || !this.post.blog_title.length) {
        return ''
      }
      return this.post.blog_title[0].text
    },
    author() {
      if (!this.post || !this.post.author || !this.post.author.length) {
        return ''
      }
      return this.post.author[0].text
    },
    date() {
      if (!this.post || !this.post.blog_created_date) {
        return ''
      }
      return this.post.blog_created_date
    },
    image() {
      if (!this.post || !this.post.blog_image) {
        return {}
      }
      return {
        url: this.post.blog_image.url,
        height: this.post.blog_image.dimensions.height,
        width: this.post.blog_image.dimensions.width
      }
    },
    content() {
      if (!this.post || !this.post.blog_content) {
        return ''
      }
      return this.post.blog_content
    }
  },
  methods: {
    getContent () {
      this.loading = true
      this.$prismic.client.getByUID('blog_post', this.blogID, { fetchLinks: 'author.name' }).then((document) => {
        if (document && document.data) {
          this.post = document.data
        }
        this.loading = false
      })
    }
  },
  mounted () {
    this.getContent();
  }
}
</script>

<style scoped lang="scss">
  .post {
    &__image {
      width: 100%;
    }
    &__content {
      margin: 0 auto;
      max-width: 680px;
      padding: 32px;
      color: #292929;
      text-align: left;
      font-weight: 400
    }
    &__heading {
      padding-bottom: 40px;
      letter-spacing: -0.5px;
      &__title {
        font-weight: 500;
        padding-bottom: 16px;
        font-size: 48px;
        line-height: 60px;
      }
      &__subtitle {
        font-weight: 500;
        font-size: 22px;
        color: #757575; 
        line-height: 28px;
      }
    }
    &__text {
      padding-bottom: 16px;
      font-size: 20px;
      line-height: 32px;
    }
  }
</style>