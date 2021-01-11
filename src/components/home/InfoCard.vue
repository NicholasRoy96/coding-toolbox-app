<template>
  <div class="card">
    <img :src="cardInfo.image" class="pb-4">
    <h3 class="pb-4">
      {{ cardInfo.title }}
    </h3>
    <p>
      {{ cardInfo.subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    cardInfo: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  color: var(--c-secondary);
  img {
    width: 100%;
    height: 60%;
    border-radius: 5px;
  }
  h3 {
    text-transform: uppercase;
    font-size: var(--font-lg);
  }
  p {
    font-size: var(--font-sm);
  }
}
</style>