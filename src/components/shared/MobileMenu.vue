<template>
  <section class="menu h-0" :class="{ 'h-screen': menuActive }">
    <div class="menu__bar">
      <img class="w-1/3" src="@/assets/logo/SVG/Mid_Logo_Black.svg" @click="$router.push('/').catch(err => {})" />
      <div @click="$emit('close')">Close</div>
    </div>
    <div class="menu__container">
      <h2 v-for="(item, i) in items" :key="i">
        <router-link :to="item.route">
          <h2>{{ item.text }}</h2>
        </router-link>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    menuActive: {
      type: Boolean,
      required: true,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
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
      font-size: var(--font-4xl);
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}
</style>