<template>
  <div class="filters">
    <div class="filters__top flex justify-center items-center">
      <img
        class="filters__top__shape"
        src="@/assets/icons/filter-shape.svg"
        width="30px"
      />
    </div>
    <div class="filters__content">
      <h3>Category</h3>
      <div
        class="item cursor-pointer flex"
        v-for="category in blog.categoryFilters"
        :key="category"
        @click="toggleCategory(category)"
      >
        <div class="item__checkbox flex justify-center items-center mr-3">
          <img
            class="item__checkbox__icon"
            :class="{ 'active': isActiveCategory(category) }"
            src="@/assets/icons/checkmark.svg"
            width="16px"
          />
        </div>
        <span class="item__name">
          {{ category }}
        </span>
      </div>

      <h3 class="pt-6">Tech Stack</h3>  
      <div
        class="item cursor-pointer flex"
        v-for="tech in blog.techFilters"
        :key="tech"
        @click="toggleTech(tech)"
      >
        <div class="item__checkbox flex justify-center items-center mr-3">
          <img
            class="item__checkbox__icon"
            :class="{ 'active': isActiveTech(tech) }"
            src="@/assets/icons/checkmark.svg"
            width="16px"
          />
        </div>
        <span class="item__name">
          {{ tech }}
        </span>
      </div>
      <button class="item__name mt-4" @click="clearFilters">Clear all</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BlogFilters',
  computed: {
    ...mapState([ 'blog' ])
  },
  methods: {
    ...mapActions([ 'selectCategory', 'selectTech', 'getPosts', 'clearFilters' ]),
    isActiveCategory (filterCategory) {
      return this.blog.selectedCategories.includes(filterCategory)
    },
    isActiveTech (filterTech) {
      return this.blog.selectedTech.includes(filterTech)
    },
    toggleCategory (filterCategory) {
      this.selectCategory(filterCategory)
      this.getPosts()
    },
    toggleTech (filterTech) {
      this.selectTech(filterTech)
      this.getPosts()
    }
  }
}
</script>

<style scoped lang="scss">
.filters {
  height: max-content;
  box-shadow: 1px 1px 8px 5px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  &__top {
    background: var(--c-darkgrey);
    padding: var(--spacer-sm) 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &__content {
    padding: var(--spacer-base) var(--spacer-lg) var(--spacer-lg);
    background: var(--c-primary);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    h3 {
      font-size: var(--font-m);
      font-weight: 700;
      margin: var(--spacer-sm) 0;
      color: var(--c-white);
      text-align: start;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      &:first-of-type {
        margin: 0 0 var(--spacer-sm) 0;
      }
    }
    .item {
      -o-transition: all 100ms ease-in-out;
      -webkit-transition: all 100ms ease-in-out;
      -moz-transition: all 100ms ease-in-out;
      -ms-transition: all 100ms ease-in-out;
      transition: all 100ms ease-in-out;
      &:hover {
        filter: brightness(1.2);
      }
      &:not(:last-of-type) {
        margin-bottom: var(--spacer-sm);
      }
      &__checkbox {
        width: 22px;
        height: 22px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        &__icon {
          -o-transition: opacity 300ms ease-in-out;
          -webkit-transition: opacity 300ms ease-in-out;
          -moz-transition: opacity 300ms ease-in-out;
          -ms-transition: opacity 300ms ease-in-out;
          transition: opacity 300ms ease-in-out;
          opacity: 0;
          &.active {
            -o-transition: opacity 300ms ease-in-out;
            -webkit-transition: opacity 300ms ease-in-out;
            -moz-transition: opacity 300ms ease-in-out;
            -ms-transition: opacity 300ms ease-in-out;
            transition: opacity 300ms ease-in-out;
            opacity: 1;
          }
        }
      }
      &__name {
        color: var(--c-lightgrey);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.1em;
        font-family: var(--font-family-primary);
        font-size: var(--font-sm);
      }
    }
  }
}
</style>