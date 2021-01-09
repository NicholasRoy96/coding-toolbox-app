<template>
  <nav class="header flex items-center justify-between flex-wrap w-full z-10 p-0 top-0">
    <div class="header__logo flex items-center flex-shrink-0 text-white mr-6">
      <img src="@/assets/logo/SVG/Long_Logo_2_White.svg" @click="$router.push('/').catch(err => {})" />
    </div>
    <div class="header__menu block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
      <div class="list-reset lg:flex justify-end flex-1 items-center">
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
  background-color: var(--c-secondary) !important;
  padding: 0 20px;
  height: 80px;
  
  &__menu {
    margin: 0 10px;
  }
  
  &__logo {
    margin: 0 10px 0 0;
    cursor: pointer;
  }
  
  &__link {
    font-size: 24px !important;
    margin-bottom: 20px;
    color: var(--c-primary) !important;
    &:hover {
      color: var(--c-accent) !important;
      
    }
  }
}


</style>
