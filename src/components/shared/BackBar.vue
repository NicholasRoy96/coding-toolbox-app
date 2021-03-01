<template>
  <div class="back-bar">
    <button @click="$router.push('/')" class="back-bar__button">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BackBar',
  props: {
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.back-bar {
  width: 100%;
  background: rgba(255, 153, 1, 0.08);
  padding: var(--spacer-base) 0;
  &__button {
    text-transform: uppercase;
    color: var(--c-white);
    font-family: var(--font-primary);
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: var(--spacer-sm) 20px;
    background: linear-gradient(97.57deg, var(--c-orange) 50%, #F6836A 107.15%);
    border-radius: 8px;
    -o-transition: all 200ms ease-in-out;
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -ms-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    &:hover {
      filter: brightness(0.92);
    }
  }
}
</style>