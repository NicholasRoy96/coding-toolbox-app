<template>
  <nav class="header flex items-center justify-between flex-wrap w-full z-10 py-0 my-0 top-0">
    <div class="header__logo flex items-center">
      <img class="hidden lg:flex my-4" src="@/assets/logo/SVG/Long_Logo_2_White.svg" width="250" @click="$router.push('/').catch(err => {})" />
      <img class="py-0 my-0 lg:hidden" src="@/assets/logo/Coding_Toolbox_Logo_White.jpg" height="120" width="120" @click="$router.push('/').catch(err => {})" />
    </div>
    <button class="ml-24 text-white uppercase font-bold" @click="toggleContactModal">Contact</button>
    <ContactModal />
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-4 hidden" :class="{ hidden: showMobileMenu }" id="nav-content">
      <!-- <div class="lg:flex justify-end flex-1 items-center">
        <button class="header__link mr-8 uppercase" v-for="(link, index) in links" @click="$router.push(link.route).catch(err => {})" :key="index">
          {{ link.text }}
        </button> -->
      <!-- </div> -->
    </div>
    <div class="header__menu block lg:hidden">
      <button @click="toggleMobileMenu" id="nav-toggle" class="flex items-center px-3 py-2">
        <img class="header__menu__icon" src="@/assets/icons/menu.svg" width="20" />
      </button>
      <MobileMenu />
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import MobileMenu from './MobileMenu'
import ContactModal from './ContactModal'

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
    MobileMenu,
    ContactModal
  },
  methods: {
    ...mapActions([ 'toggleMobileMenu', 'toggleContactModal' ])
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
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(159deg) brightness(104%) contrast(102%);
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
