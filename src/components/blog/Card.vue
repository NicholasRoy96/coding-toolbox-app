<template>
  <div class="card" @click='$router.push({ name: "Blog Post", params: { id: post.uid } })'>
    <div class="card__image-container">
      <img :src="post.data.thumbnail.url" />
      <div class="card__image-container__tag">
        Category
      </div>
    </div>
    <div class="card__content">
      <h3>
        {{ post.data.blog_title[0].text }}
      </h3>
      <p>
        Fetch and transitioning server-render data with Next.js to realtime Firestore data
      </p>
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
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    -ms-transition: 0.5s all ease;
    transition: 0.5s all ease;
    &:hover {
      transform: scale(1.03);
      .card {
        &__content {
          filter: brightness(120%);
        }
      }
    }
    &__image-container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 50%;
      img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &__tag {
        position: absolute;
        top: var(--spacer-base);
        left: var(--spacer-base);
        background-color: darkmagenta;
        color: white;
        border-radius: 16px;
        padding: var(--spacer-xxs) var(--spacer-xs);
        font-weight: bold;
      }
    }
    &__content {
      -webkit-transition: 0.5s all ease;
      -moz-transition: 0.5s all ease;
      -ms-transition: 0.5s all ease;
      transition: 0.5s all ease;
      text-align: start;
      background-color: var(--bg-grey);
      padding: var(--spacer-lg) var(--spacer-sm);
      letter-spacing: 0.5px;
      h3 {
        color: var(--c-white);
        font-family: var(--font-header);
        font-size: var(--font-lg);
        font-weight: bold;
        margin-bottom: var(--spacer-xs);
      }
      p {
        color: var(--c-secondary);
        font-family: var(--font-primary);
        font-size: var(--font-sm);
      }
    }
  }
</style>