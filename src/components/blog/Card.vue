<template>
  <div class="card" @click='$router.push({ name: "Blog Post", params: { id: post.uid } })'>
    <img v-if="!hideImage" :src="post.data.thumbnail.url" class="card__image" />
    <h2 class="text-left pt-4 font-bold">{{ post.data.blog_title[0].text }}</h2>
    <p class="text-left">{{ post.data.blog_content[0].text }}</p>
    <p class="text-left"><strong>{{ post.data.author[0].text }}</strong> | {{ post.first_publication_date | formatDate }}</p>
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
    overflow: hidden;
    &:hover .card__image{
      transform: scale(1.02);
    }
    &__image {
      width: 100%;
      border-radius: 8px;
      transition: transform 0.2s ease-in-out;
      transform-origin: center center;
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      -ms-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }
  }
</style>