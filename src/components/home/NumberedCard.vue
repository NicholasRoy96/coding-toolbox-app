<template>
  <div class="card">
    <img :src="cardInfo.image" />
    <div class="flex">
      <span>{{ cardInfo.number }}</span>
      <h3>{{ cardInfo.title }}</h3>
    </div>
    <p>
      {{ cardInfo.subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NumberedCard',
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>