<template>
  <nav class="header flex items-center justify-between flex-wrap w-full z-10 py-0 my-0 top-0">
    <div class="header__logo flex items-center flex-shrink-0 text-white">
      <img class="hidden lg:flex my-4" src="@/assets/logo/SVG/Long_Logo_2_White.svg" @click="$router.push('/').catch(err => {})" />
      <img class="py-0 my-0 lg:hidden" src="@/assets/logo/Coding_Toolbox_Logo_White.jpg" height="120" width="120" @click="$router.push('/').catch(err => {})" />
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-4 hidden" :class="{ hidden: showMobileMenu }" id="nav-content">
      <!-- <div class="lg:flex justify-end flex-1 items-center">
        <button class="header__link mr-8 uppercase" v-for="(link, index) in links" @click="$router.push(link.route).catch(err => {})" :key="index">
          {{ link.text }}
        </button> -->
      <!-- </div> -->
    </div>
    <div class="header__menu block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
        <v-icon @click="toggleMobileMenu" class="header__menu__icon">mdi-menu</v-icon>
      </button>
      <MobileMenu />
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import MobileMenu from './MobileMenu'

export default {
  name: 'Header',
  data() {
    return {
      showMobileMenu: false
    // links: [{
      //   text: 'Blog',
      //   route: '/blog'
      // },{
      //   text: 'About',
      //   route: '/about'
      // }]
    }
  },
  components: {
    MobileMenu
  },
  methods: {
    ...mapActions([ 'toggleMobileMenu' ])
  }
}
</script>

<style scoped lang="scss">
.header {
  * {
    font-family: var(--font-header)
  }

  background-color: var(--bg-primary);
  padding: 0 20px;

  &__menu {
    margin: 0 10px;

    #nav-toggle {
      &:focus {
        outline: none;
      }
    }

    &__icon {
      color: var(--c-secondary) !important;
    }
  }
  
  &__logo {
    cursor: pointer;
  }
  
  &__link {
    font-size: var(--font-base);
    margin-bottom: 20px;
    color: var(--c-secondary);
    &:focus, &:active {
      outline: none;
    }
    &:hover {
      color: var(--c-accent);
    }
  }
}


</style>
