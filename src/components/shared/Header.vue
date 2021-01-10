<template>
  <nav class="header flex items-center justify-between flex-wrap w-full z-10 p-0 top-0">
    <div class="header__logo flex items-center flex-shrink-0 text-white">
      <img src="@/assets/logo/SVG/Long_Logo_2_White.svg" @click="$router.push('/').catch(err => {})" />
    </div>
    <div class="header__menu block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
        <v-icon @click="showMobileMenu = !showMobileMenu" class="header__menu__icon">mdi-menu</v-icon>
      </button>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0" :class="{ hidden: showMobileMenu }" id="nav-content">
      <div class="lg:flex justify-end flex-1 items-center">
        <button class="header__link mr-8" v-for="(link, index) in links" @click="$router.push(link.route).catch(err => {})" :key="index">
          {{ link.text }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      showMobileMenu: true,
      links: [{
        text: 'Blog',
        route: '/blog'
      },{
        text: 'About',
        route: '/about'
      },{
        text: 'Contact',
        route: '/contact'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.header {
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
    margin: 10px;
    padding: 10px;
    cursor: pointer;
  }
  
  &__link {
    font-size: var(--font-lg);
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
