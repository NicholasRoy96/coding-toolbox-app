<template>
  <section class="menu">
    <div class="menu__bar">
      <h1>Toolbox</h1>
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
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  background: black;
  &__bar {
    padding: var(--spacer-lg);
    display: flex;
    justify-content: space-between;
  }
  &__container {
    text-align: center;
  }
}
</style>