<template>
  <div class="card" @click='viewBlog'>
    <div class="card__image-container mb-4">
      <img :src="post.data.thumbnail.url" />
    </div>
    <div v-if="techLogos && techLogos.length" class="card__logo-container">
      <img
        v-for="(logo, i) in techLogos"
        :key="i"
        :src="logo"
        class="card__logo-container__logo"
      />
    </div>
    <div class="px-8 flex flex-col">
      <h3 class="card__title mb-1">
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
      const obj = this.post.data.filter_category[0]
      const keys = Object.keys(obj)
      var filteredCats = keys.filter(function(key) {
        return obj[key]
      });
      if (filteredCats.length <= 1) {
        return filteredCats.pop()
      }
      return `${filteredCats[0]} / ${filteredCats[1]}`
    },
    techLogos () {
      const obj = this.post.data.filter_tech[0]
      const keys = Object.keys(obj)
      const filteredTech = keys.filter(function(key) {
        return obj[key]
      });
      const logoPaths = filteredTech.map(tech => {
        return require(`@/assets/icons/logo-${tech}.svg`)
      })
      return logoPaths
    }
  },
  methods: {
    ...mapActions([ 'selectBlog' ]),
    // getContent () {
    
    // },
    async viewBlog() {
      await this.$router.push({ name: 'Blog Post', params: { id: this.post.uid } })
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    position: relative;
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
    &__logo-container {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      background: var(--c-offwhite);
      padding: var(--spacer-sm);
      border-bottom-left-radius: 10px;
      border-top-right-radius: 10px;
      &__logo {
        height: 45px;
        &:not(:last-of-type) {
          margin-right: var(--spacer-xs);
        }
      }
    }
    &__title {
      text-align: start;
      color: var(--c-primary);
      font-family: var(--font-header);
      font-size: var(--font-xl);
      font-weight: bold;
      line-height: 1.3;
      @media (max-width: 767px) {
        font-size: 22px;
      }
    }
    &__category {
      text-align: start;
      color: var(--c-orange);
      font-weight: bold;
      font-family: var(--font-family-primary);
      font-size: var(--font-m);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      @media (max-width: 767px) {
        font-size: var(--font-sm);
      }
    }
    &__description {
      text-align: start;
      color: var(--c-lightgrey);
      font-family: var(--font-secondary);
      font-size: var(--font-sm);
      margin-bottom: var(--spacer-base);
      @media (max-width: 767px) {
        font-size: var(--font-tiny);
      }
    }
  }
</style>