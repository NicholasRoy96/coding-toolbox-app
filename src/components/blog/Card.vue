<template>
  <div class="card" @click='$router.push({ name: "Blog Post", params: { id: post.uid } })'>
    <div class="card__inner-div">
      <img :src="post.data.thumbnail.url" class="card__image" />
      <div class="card__overlay">
        <div class="card__overlay__content">
          <h2 class="card__overlay__content--title">
            {{ post.data.blog_title[0].text }}
          </h2>
        </div>
      </div>
      <!-- <h2 class="text-left pt-4 font-bold"></h2>
      <p class="text-left">{{ post.data.blog_content[0].text }}</p>
      <p class="text-left"><strong>{{ post.data.author[0].text }}</strong> | {{ post.first_publication_date | formatDate }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
  .card {
    cursor: pointer;
    width: 100%;
    &:hover .card {
      &__overlay {
        opacity: 0.8;
      }
      &__image {
        transform: scale(1.07);
      }
    }
    &__inner-div {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      height: 100%;
    }
    &__overlay {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      opacity: 0;
      display: flex;
      text-align: center;
      align-items: center;
      -webkit-transition: 0.5s all ease;
      -moz-transition: 0.5s all ease;
      -ms-transition: 0.5s all ease;
      transition: 0.5s all ease;
      &__content {
        padding: 0 20%;
        &--title {
          color: var(--c-primary);
          font-size: var(--font-xl);
          text-transform: uppercase;
          line-height: 1.5;
          letter-spacing: 5px;
          font-weight: 700;
        }
      }
    }
    &__image {
      width: 100%;
      transform-origin: center center;
      -webkit-transition: 1.8s all ease;
      -moz-transition: 1.8s all ease;
      -ms-transition: 1.8s all ease;
      transition: 1.8s all ease;
    }
  }
</style>