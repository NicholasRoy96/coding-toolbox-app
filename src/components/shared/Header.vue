<template>
  <toolbar class="toolbar">
    <img src="../../assets/logo/SVG/Long_Logo_2_White.svg" id="logo" @click="$router.push('/').catch(err => {})" />
    <button class="link mr-2 p-1" v-for="(link, index) in links" @click="$router.push(link.route).catch(err => {})" :key="index">
      {{ link.text }}
    </button>
  </toolbar>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      links: [{
        text: 'Home',
        route: '/'
      },{
        text: 'About',
        route: '/about'
      },{
        text: 'Blog',
        route: '/blog'
      },{
        text: 'Contact',
        route: '/contact'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.toolbar {
  background-color: var(--c-secondary) !important;
  max-height: 300px;
}

#logo {
  cursor: pointer;
  max-height: 100px;
  max-width: 300px;
  margin-left: 32px;
  margin-top: 60px;
}
.link {
  color: var(--c-primary) !important;
  font-size: 24px !important;
  margin-bottom: 20px;
}
.themeToggle {
  margin-top: 50px;
}
</style>
