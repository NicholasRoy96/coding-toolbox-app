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
    position: relative;
    padding-top: 65%;
    &:hover .card {
      &__overlay {
        opacity: 0.8;
      }
      &__image {
        transform: scale(1.07);
      }
    }
    &__inner-div {
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
    &__overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(255,255,255, 0.5) 0%, rgba(255,255,255,1) 25%);
      opacity: 0;
      display: flex;
      text-align: center;
      align-items: center;
      -webkit-transition: 0.5s all ease;
      -moz-transition: 0.5s all ease;
      -ms-transition: 0.5s all ease;
      transition: 0.5s all ease;
      &__content {
        max-width: 75%;
        margin: 0 auto;
        &--title {
          color: var(--c-primary);
          font-size: var(--font-sm);
          text-transform: uppercase;
          line-height: 1.5;
          letter-spacing: 5px;
          font-weight: 700;
          @media (min-width: 1024px) {
            font-size: var(--font-lg);
          }
        }
      }
    }
    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      object-fit: cover;
      transform-origin: center center;
      -webkit-transition: 1.8s all ease;
      -moz-transition: 1.8s all ease;
      -ms-transition: 1.8s all ease;
      transition: 1.8s all ease;
    }
  }
</style>