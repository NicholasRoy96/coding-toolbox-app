<template>
  <div class="card" @click='viewBlog'>
    <div class="card__image-container mb-4">
      <img :src="post.data.thumbnail.url" />
    </div>
    <div class="px-8">
      <h3 class="card__title mb-2">
        {{ post.data.blog_title[0].text }}
      </h3>
      <h4 class="card__category mb-4">
        {{ category }}
      </h4>
      <p v-if="post.data.blog_subtitle.length" class="card__description">
        {{ post.data.blog_subtitle[0].text }}
      </p>
      <p v-else class="card__description">
        Fetch and transitioning server-render data with Next.js to realtime Firestore data
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BlogCard',
  props: {
    post: { type: Object, required: true }
  },
  data() {
    return {
      blog: null
    }
  },
  computed: {
    category () {
      const categories = Object.entries(this.post.data.filter_category[0])
      return categories.filter(cat => cat[1] === true).pop()[0]
    }
  },
  methods: {
    ...mapActions([ 'selectBlog' ]),
    getContent () {
    
    },
    async viewBlog() {
      const blog = await this.$prismic.client.getByUID('blog_post', this.post.uid, { fetchLinks: 'author.name' });
      if (blog && blog.data) {
        this.selectBlog(blog.data)
        await this.$router.push({ name: 'Blog Post', params: { id: this.post.uid } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    background-color: var(--offwhite);
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    -ms-transition: 0.5s all ease;
    transition: 0.5s all ease;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: scale(1.03);
    }
    &__image-container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 45%;
      img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
    &__title {
      text-align: start;
      color: var(--c-primary);
      font-family: var(--font-header);
      font-size: var(--font-lg);
      font-weight: bold;
      // height: 72px;
    }
    &__category {
      text-align: start;
      color: var(--c-orange);
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    &__description {
      text-align: start;
      color: var(--c-secondary);
      font-family: var(--font-primary);
      font-size: var(--font-sm);
      margin-bottom: var(--spacer-base);
      flex-grow: 1;
    }
  }
</style>