<template>
  <div class="card" @click='viewBlog'>
    <div class="card__image-container">
      <img :src="post.data.thumbnail.url" />
      <div class="card__image-container__category" :style="`background-color: ${categoryColours[post.data.category]}`">
        {{ post.data.category }}
      </div>
    </div>
      <h3 class="card__title">
        {{ post.data.blog_title[0].text }}
      </h3>
      <p v-if="post.data.blog_subtitle.length" class="card__subtitle">
        {{ post.data.blog_subtitle[0].text }}
      </p>
      <p v-else class="card__subtitle">
        Fetch and transitioning server-render data with Next.js to realtime Firestore data
      </p>
      <div class="card__tags">
        <div
          v-for="(tag, i) in post.tags"
          :key="i"
          class="card__tags--tag"
        >
          #{{ tag }}
        </div>
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
    categoryColours () {
      return {
        'Career': 'var(--c-darkblue)',
        'Code': 'var(--c-lightorange)',
        'Tools': 'var(--c-bluegreen)'
      }
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
    background-color: var(--bg-grey);
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    -ms-transition: 0.5s all ease;
    transition: 0.5s all ease;
    &:hover {
      transform: scale(1.03);
      box-shadow: 6px 6px 4px var(--c-secondary);
      filter: brightness(120%);
    }
    &__image-container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 50%;
      margin-bottom: var(--spacer-lg);
      img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &__category {
        position: absolute;
        top: var(--spacer-base);
        left: var(--spacer-base);
        color: white;
        border-radius: 16px;
        padding: var(--spacer-xxs) var(--spacer-sm);
        font-weight: bold;
      }
    }
    &__title {
      text-align: start;
      letter-spacing: 0.5px;
      color: var(--c-white);
      font-family: var(--font-header);
      font-size: var(--font-lg);
      font-weight: bold;
      padding: 0 var(--spacer-sm);
      margin-bottom: var(--spacer-xs);
      height: 72px;
      // When using flex-grow, any additional space on other elements
      // e.g. subtitle is also added to title height, so cannot get consistent
      // height of title if other card content varies
      // flex-grow: 1;
    }
    &__subtitle {
      text-align: start;
      color: var(--c-secondary);
      font-family: var(--font-primary);
      font-size: var(--font-sm);
      margin-bottom: var(--spacer-base);
      padding: 0 var(--spacer-sm);
      flex-grow: 1;

    }
    &__tags {
      display: flex;
      padding: 0 var(--spacer-sm) var(--spacer-lg);
      &--tag {
        background-color: var(--c-darkblue);
        color: var(--c-white);
        font-size: var(--font-sm);
        font-weight: 600;
        padding: var(--spacer-xxs) var(--spacer-xs);
        &:not(:last-child) {
          margin-right: var(--spacer-xxs);
        }
      }
    }
  }
</style>