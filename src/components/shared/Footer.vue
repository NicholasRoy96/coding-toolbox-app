<template>
  <footer class="footer flex flex-col md:flex-row justify-center md:justify-between items-center">
    <div class="flex flex-row justify-center items-center mb-6 md:mb-0">
      <img class="mr-2" width="10" src="@/assets/icons/copyright.svg" />
      <span class="footer__name md:mr-5">The Coding Toolbox {{ new Date().getFullYear() }}</span>
      <img class="footer__logo hidden lg:flex cursor-pointer" width="190" src="@/assets/logo/SVG/Long_Logo_2_White.svg" @click="$router.push('/').catch(err => {})" />
    </div>
    <div class="flex flex-row justify-center">
      <a class="footer__social mx-5" v-for="(link, index) in social" :key="index" :href="link.url" target="_blank">
        <img :src="link.icon" height="25" width="25" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      social: [{
        icon: require('@/assets/icons/instagram.svg'),
        url: 'https://www.instagram.com/thecodingtoolbox/'
      }, {
        icon: require('@/assets/icons/youtube.svg'),
        url: 'https://www.youtube.com/channel/UCbFkOXbrNKvyX5kPRyp7MVA'
      }, {
        icon: require('@/assets/icons/github.svg'),
        url: 'https://github.com/NicholasRoy96'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    position: relative;
    background: var(--bg-primary);
    font-size: var(--font-base);
    height: 150px;
    color: var(--c-secondary) !important;
    z-index: 1;
    overflow: visible;
    margin-top: var(--spacer-xl);
    padding: 0 var(--spacer-xl);
    @media (min-width: 768px) {
      padding: 0 var(--spacer-2xl);
    }
    @media (min-width: 1024px) {
      padding: 0 100px;
    }
    @media (min-width: 1600px) {
      margin-top: var(--spacer-2xl);
    }
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: inherit;
      z-index: -1;
      left: 0;
      transform: skewY(-2.2deg);
      transform-origin: bottom left;
    }
    &__name {
      color: var(--c-offwhite);
      font-size: var(--font-tiny);
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    &__logo {
      -o-transition: all 150ms ease-in-out;
      -webkit-transition: all 150ms ease-in-out;
      -moz-transition: all 150ms ease-in-out;
      -ms-transition: all 150ms ease-in-out;
      transition: all 150ms ease-in-out;
      &:hover {
        filter: brightness(0.9);
        transform: scale(1.03);
      }
    }
    &__social {
      text-decoration: none;
      -o-transition: all 150ms ease-in-out;
      -webkit-transition: all 150ms ease-in-out;
      -moz-transition: all 150ms ease-in-out;
      -ms-transition: all 150ms ease-in-out;
      transition: all 150ms ease-in-out;
      &:hover {
        filter: brightness(0.85);
        transform: scale(1.05) skewY(10deg);
      }
    }
  }
</style>
