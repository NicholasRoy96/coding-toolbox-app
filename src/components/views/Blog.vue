<template>
  <div class="blog">

    <!-- Mobile Only -->
    <div class="lg:hidden">
      <div class="blog__headings lg:hidden pt-8">
        <h1 class="pb-2">Blog</h1>
        <h2 class="pb-2">Check out our awesome blogs below</h2>
        <img class="mx-auto" src="@/assets/icons/line.svg" width="10%" />
      </div>
      <div class="pb-4 sm:pb-16">
        <p class="blog__description">
          {{ description }}
        </p>
        <div class="blog__grid">
          <div
            v-for="(post, i) in blog.filteredPosts"
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
    </div>

    <!-- Desktop Only -->
    <div class="hidden lg:block">
      <div class="blog__banner flex">
        <div class="blog__banner__content">
          <h1 class="pb-2">Blog</h1>
          <img class="pb-8 w-1/4 mx-auto" src="@/assets/icons/line_orange.svg" />
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="blog__container flex">
        <BlogFilters class="mx-auto z-50 -mt-24"/>
        <div class="blog__grid">
          <div 
            v-for="(post, i) in blog.filteredPosts"
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
    </div>

  </div>
</template>

<script>
import BlogCard from '@/components/blog/Card.vue'
import BlogFilters from '@/components/blog/Filters.vue'
import { mapState } from 'vuex'

export default {
  name: 'Blog',
  components: {
    BlogCard,
    BlogFilters
  },
  computed: {
    ...mapState([ 'blog' ]),
    description () {
      return 'Lorem ipsum dolor sit amet elit, sed do sed eiusmod tempor incididunt ut labore et.'
    }
  }
}
</script>

<style lang="scss">
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
    padding: var(--spacer-sm) var(--spacer-lg);
    @media (min-width: 1600px) {
      padding: var(--spacer-sm) var(--spacer-xl);
    }
  }
  &__banner {
    width: 100%;
    background-image: linear-gradient(178deg, transparent 84.8%, white 85%), url("../../assets/reviews.jpg");
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
      color: var(--c-offwhite);
      max-width: 500px;
      h1 {
        font-size: var(--font-fucking-massive);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 3px;
      }
      p {
        font-size: var(--font-base);
        font-weight: 400;
        line-height: 1.3;
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
    margin: 0 auto;
    padding-bottom: var(--spacer-lg);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    @media (min-width: 1024px) {
      width: 80%;
    }
    &__inner {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: var(--spacer-sm);
      @media (min-width: 768px) {
        padding: var(--spacer-lg);
      }
      @media (min-width: 1024px) {
        width: 50%;
      }
    }
  }
}
</style>