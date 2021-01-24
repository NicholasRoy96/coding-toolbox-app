<template>
  <div class="card" @click='$router.push({ name: "Blog Post", params: { id: post.uid } })'>
    <div class="card__image-container">
      <img :src="post.data.thumbnail.url" />
      <div class="card__image-container__category" :style="`background-color: ${categoryColours[post.data.category]}`">
        {{ post.data.category }}
      </div>
    </div>
    <div class="card__content">
      <h3>
        {{ post.data.blog_title[0].text }}
      </h3>
      <p>
        Fetch and transitioning server-render data with Next.js to realtime Firestore data
      </p>
      <div class="card__content__tags">
        <div
          v-for="(tag, i) in post.tags"
          :key="i"
          class="card__content__tags--tag"
        >
          #{{ tag }}
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
  },
  computed: {
    categoryColours () {
      return {
        'Career': 'var(--c-darkblue)',
        'Code': 'var(--c-lightorange)',
        'Tools': 'var(--c-bluegreen)'
      }
    }
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
      box-shadow: 6px 6px 4px var(--c-secondary);
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
      &__category {
        position: absolute;
        top: var(--spacer-base);
        left: var(--spacer-base);
        color: white;
        border-radius: 16px;
        padding: var(--spacer-xxs) var(--spacer-sm);
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 72px;
      }
      p {
        color: var(--c-secondary);
        font-family: var(--font-primary);
        font-size: var(--font-sm);
        margin-bottom: var(--spacer-base);
      }
      &__tags {
        display: flex;
        &--tag {
          background-color: var(--c-darkblue);
          color: var(--c-white);
          font-size: var(--font-xs);
          font-weight: 600;
          padding: var(--spacer-xxs) var(--spacer-xs);
          &:not(:last-child) {
            margin-right: var(--spacer-xxs);
          }
        }
      }
    }
  }
</style>