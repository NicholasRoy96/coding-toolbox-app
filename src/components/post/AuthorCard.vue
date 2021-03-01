<template>
  <div class="author-card flex flex-row justify-center items-center">
    <div class="author-card__image flex justify-center items-center">
      <img class="mx-6" width="80" src="@/assets/avatars/boy-1.svg" />
    </div>
    <div class="author-card__content">
      <p class="author-card__content__description mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, a obcaecati mollitia explicabo velit quasi voluptatum delectus facilis dolorem perferendis officiis nam optio quia sequi. Odio corporis quibusdam excepturi sunt!</p>
      <div class="flex justify-between items-center">
        <div class="author-card__content__links flex">
          <a href="https://github.com/NicholasRoy96" target="_blank">
            <img class="icon" src="@/assets/icons/github.svg" width="25">
          </a>
          <a href="https://www.linkedin.com/in/nicholas-roy-b1078a19a/" target="_blank">
            <img class="icon" src="@/assets/icons/linkedin.svg" width="25">
          </a>
        </div>
        <button
          @click="$router.push({ name: 'Author', params: { name: authorSlug } })"
          class="author-card__content__button"
        >
          More By This Author
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorCard'
}
</script>

<style scoped lang="scss">
.author-card {
  display: flex;
  justify-content: flex-end;
  position: relative;
  max-width: 758px;
  border-radius: 10px;
  background: var(--c-offwhite);
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
  &__image {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20%;
    background: var(--c-lightred);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &__content {
    width: 80%;
    text-align: start;
    padding: var(--spacer-lg);
    &__links {
      :not(:last-child) {
        margin-right: var(--spacer-sm);
      }
      > a {
        text-decoration: none;
        -o-transition: all 150ms ease-in-out;
        -webkit-transition: all 150ms ease-in-out;
        -moz-transition: all 150ms ease-in-out;
        -ms-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
        &:hover {
          filter: brightness(0.85);
        }
      }
    }
    &__description {
      font-family: var(--font-secondary);
      font-size: var(--font-sm);
      color: var(--c-lightgrey);
    }
    &__button {
      background-image: linear-gradient(#d99a5a, #d99a5a);
      background-size: 0% 0.1em;
      background-position-y: 100%;
      background-position-x: 0%;
      background-repeat: no-repeat;
      transition: background-size 250ms ease-in-out;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.3);
      font-family: var(--font-primary);
      font-weight: 700;
      letter-spacing: 0.1em;
      font-size: var(--font-tiny);
      &:hover, :focus, :active {
        background-size: 100% 0.1em;
      }
    }
  }
}
</style>