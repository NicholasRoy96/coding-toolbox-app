<template>
  <div class="card" @click='$router.push({ name: "Blog Post", params: { id: post.uid } })'>
    <img v-if="!hideImage" :src="post.data.thumbnail.url" class="card__image" />
    <h2 class="text-left">{{ post.data.blog_title[0].text }}</h2>
    <p class="text-left">{{ post.data.blog_content[0].text }}</p>
    <p class="text-left">{{ post.data.author[0].text }} | {{ post.first_publication_date | formatDate }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: { type: Object, required: true },
    hideImage: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="scss">
  .card {
    cursor: pointer;
    &__image {
      width: 100%;
    }
  }
</style>