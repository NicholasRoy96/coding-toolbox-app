<template>
  <section class="menu h-0" :class="{ 'h-screen': menuOpen }">
    <div class="menu__bar">
      <img class="w-1/3" src="@/assets/logo/SVG/Mid_Logo_Black.svg" @click="$router.push('/').catch(err => {}); toggleMobileMenu()" />
      <img @click="toggleMobileMenu" width="20" class="" src="@/assets/icons/close.svg" />
    </div>
    <div class="menu__container pt-4">
      <div class="pb-12">
        <router-link to="/blog" @click.native="toggleMobileMenu">
          <h2 class="pb-4">Blog</h2>
        </router-link>
        <router-link
          v-for="(category, i) in blogCategories"
          :key="i"
          to="/blog"
          @click.native="toggleMobileMenu"
        >
          <h3 class="pt-2">{{ category }}</h3>
        </router-link>
      </div>
      <!-- <router-link to="/about" @click.native="toggleMobileMenu">
        <h2>About</h2>
      </router-link> -->
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MobileMenu',
  computed: {
    ...mapState({
      blogCategories: state => state.blog.categories,
      menuOpen: state => state.modals.mobileMenuOpen
    })
  },
  methods: {
    ...mapActions([ 'toggleMobileMenu' ])
  }
}
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  background: white;
  transition: 0.5s ease-in-out;
  &__bar {
    padding: var(--spacer-lg);
    display: flex;
    justify-content: space-between;
  }
  &__container {
    text-align: center;
    h2 {
      font-family: var(--font-primary);
      color: var(--c-primary);
      font-size: var(--font-3xl);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
    }
    h3 {
      font-family: var(--font-primary);
      color: var(--c-secondary);
      font-size: var(--font-xl);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
    }
  }
}
</style>