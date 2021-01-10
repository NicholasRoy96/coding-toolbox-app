<template>
  <footer class="footer flex flex-col justify-center">
    <div class="mt-8 flex flex-row justify-center font-bold">
      <button class="footer__links mx-6" v-for="(page, index) in pages" :key="index" @click="$router.push(page.link).catch(err => {})">
        {{ page.text.toUpperCase() }}
      </button>
    </div>
    <div class="mb-6 flex flex-row justify-center">
      <a class="footer__social mx-5 pt-6" v-for="(link, index) in social" :key="index" :href="link.url" target="_blank">
        <img :src="link.icon" height="25" width="25" />
      </a>
    </div>
    <div class="mb-8 flex flex-row justify-center font-black">
      <span class="mt-2 mx-4">THE CODING TOOLBOX {{ new Date().getFullYear() }}</span>
      <img class="hidden lg:flex pt-1.5 cursor-pointer" height="200" width="200" src="@/assets/logo/SVG/Long_Logo_2_White.svg" @click="$router.push('/').catch(err => {})" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      pages: [{
        text: 'Blog',
        link: '/blog'
      },{
        text: 'About',
        link: '/about'
      },{
        text: 'Get Involved',
        link: '/contact'
      }],
      social: [{
        icon: require('@/assets/icons/instagram.svg'),
        url: 'https://www.instagram.com/thecodingtoolbox/'
      }, {
        icon: require('@/assets/icons/youtube.svg'),
        url: 'https://www.youtube.com/channel/UCbFkOXbrNKvyX5kPRyp7MVA'
      }, {
        icon: require('@/assets/icons/github.svg'),
        url: 'https://www.github.com/DuncanFenning1008'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: var(--bg-primary);
    font-size: var(--font-base);
    height: 200px;
    color: var(--c-secondary) !important;

    button {
      outline: none;
    }
  }
  .social {
    text-decoration: none;
  }
</style>
