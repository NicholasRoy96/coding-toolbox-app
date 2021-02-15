<template>
  <div class="blog">

    <!-- Mobile Only -->
    <div class="lg:hidden">
      <div class="blog__headings lg:hidden pt-8">
        <h1 class="pb-2">Blog</h1>
        <h2 class="pb-2">Check out our awesome blogs below</h2>
        <img class="mx-auto" src="@/assets/icons/Line.svg" width="10%" />
      </div>
      <div class="pb-16">
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
          <img class="pb-8" src="@/assets/icons/Line_White.svg" />
          <h2>Check out our awesome blogs below</h2>
        </div>
      </div>
      <div class="blog__container flex">
        <div class="blog__filters">
          <div class="categories">
            <h3>Category</h3>
            <div class="tech__container">
              <div
                class="tech__tech"
                :class="{ 'active': isActiveCategory(category) }"
                v-for="category in blog.allCategories"
                :key="category"
                @click="toggleCategory(category)"
              >
                {{ category }}
              </div>
            </div>
          </div>
          <div class="tech">
            <h3>Tech Stack</h3>  
            <div class="tech__container">
              <div
                class="tech__tech"
                :class="{ 'active': isActiveTech(tech) }"
                v-for="tech in blog.allTech"
                :key="tech"
                @click="toggleTech(tech)"
              >
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Blog',
  components: {
    BlogCard
  },
  computed: {
    ...mapState([ 'blog' ]),
    description () {
      return 'Welcome to The Coding Toolbox. Read articles on Web Development tips and tricks, career advice and useful tools which you can use to make your life easier'
    }
  },
  methods: {
    ...mapActions([ 'selectCategory', 'selectTech', 'filterPosts' ]),
    isActiveCategory (filterCategory) {
      return this.blog.selectedCategories.includes(filterCategory)
    },
    isActiveTech (filterTech) {
      return this.blog.selectedTech.includes(filterTech)
    },
    toggleCategory (filterCategory) {
      this.selectCategory(filterCategory)
      this.filterPosts()
    },
    toggleTech (filterTech) {
      this.selectTech(filterTech)
      this.filterPosts()
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
    padding: var(--spacer-sm) var(--spacer-lg);
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
  &__filters {
    width: 20%;
    h3 {
      font-size: var(--font-base);
      font-weight: 600;
      margin: var(--spacer-sm) 0;
    }
    .categories {
      &__option {
        cursor: pointer;
        &.active {
          color: red;
          font-size: 50px;
          font-weight: bold;
          text-decoration: wavy;
        }
      }
    }
    .tech {
      &__container {
        display: flex;
        max-width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: center;
      }
      &__tech {
        cursor: pointer;
        background-color: transparent;
        color: var(--c-secondary);
        font-size: var(--font-sm);
        font-weight: 400;
        padding: var(--spacer-xxs) var(--spacer-xs);
        margin-right: var(--spacer-xs);
        margin-bottom: var(--spacer-xs);
        border-radius: 3px;
        border: 1px solid var(--c-lightgrey);
        -webkit-transition: 0.5s all ease;
        -moz-transition: 0.5s all ease;
        -ms-transition: 0.5s all ease;
        transition: 0.5s all ease;
        &:hover {
          border-color: var(--c-secondary);
        }
        &.active {
          background-color: var(--c-darkblue);
          color: var(--c-white);
        }
      }
    }
  }
  &__grid {
    margin: 0 auto;
    padding-bottom: var(--spacer-lg);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-between;
    &__inner {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: var(--spacer-sm);
      @media (min-width: 1024px) {
        width: 50%;
      }
      // @media (min-width: 1600px) {
      //   width: 33.33%;
      // }
    }
  }
}
</style>