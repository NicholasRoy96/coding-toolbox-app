<template>
  <div class="blog">

    <!-- Mobile Only -->
    <div class="lg:hidden">
      <div class="blog__headings lg:hidden pt-8">
        <h1 class="pb-2">Blog</h1>
        <h2 class="pb-2">{{ category }}</h2>
        <img class="mx-auto" src="@/assets/icons/Line.svg" width="10%" />
      </div>
      <div class="pb-16">
        <p class="blog__description">
          {{ description }}
        </p>
        <div class="blog__grid">
          <BlogCard
            v-for="(post, i) in blog.posts"
            :key="i"
            :post="post"
            class="blog__grid__card"
          />
        </div>
      </div>
    </div>

    <!-- Desktop Only -->
    <div class="hidden lg:block">
      <div class="blog__banner hidden lg:flex">
        <div class="blog__banner__content">
          <h1 class="pb-2">Blog</h1>
          <img class="pb-8" src="@/assets/icons/Line_White.svg" />
          <h2>{{ category }}</h2>
        </div>
      </div>
      <div class="px-16 pb-16">
        <div class="blog__container px-16 -mt-16 z-10">
          <div class="blog__description">
            {{ description }}
          </div>
          <div class="blog__grid">
            <BlogCard
              v-for="(post, i) in blog.posts"
              :key="i"
              :post="post"
              class="blog__grid__card"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BlogCard from '@/components/blog/Card.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Blog',
  components: {
    BlogCard
  },
  computed: {
    ...mapState([ 'blog' ]),
    category() {
      return this.blog.selectedCategory || 'ALL'
    },
    description() {
      return 'Welcome to The Coding Toolbox. Read articles on Web Development tips and tricks, career advice and useful tools which you can use to make your life easier'
    }
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  created() {
    const { blog } = this;
    if (!blog || !blog.posts || !blog.posts.length) {
      this.getPosts();
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__headings {
    text-transform: uppercase;
    letter-spacing: 3px;
    h1 {
      color: var(--c-primary);
      font-size: var(--font-lg);
      font-weight: 700;
    }
    h2 {
      color: var(--c-secondary);
      font-size: var(--font-base);
      font-weight: 600;
    }
  }
  &__container {
    position: relative;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: white;
  }
  &__banner {
    width: 100%;
    background-image: url("../../assets/reviews.jpg");
    padding-bottom: 37%;
    background-position: 50% 50%;
    position: relative;
    @media (min-width: 1200px) {
      padding-bottom: 30%;
    }
    &__content {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-transform: uppercase;
      letter-spacing: 3px;
      h1 {
        font-size: var(--font-fucking-massive);
        font-weight: 700;
      }
      h2 {
        font-size: var(--font-xl);
        font-weight: 600;
      }
    }
  }
  &__description {
    margin: 0 auto;
    max-width: 940px;
    font-size: var(--font-sm);
    color: var(--c-secondary);
    line-height: 1.5;
    padding: var(--spacer-sm) var(--spacer-lg);
    @media (min-width: 1024px) {
      padding: var(--spacer-2xl) 0;
    }
  }
  &__grid {
    max-width: 1632px;
    margin: 0 auto;
    padding: var(--spacer-xs);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--spacer-sm);
    justify-content: space-between;
    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--spacer-lg);
      padding-bottom: var(--spacer-lg);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>