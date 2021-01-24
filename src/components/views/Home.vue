<template>
  <div class="home">
    <div class="hidden lg:block">
      <div class="home__banner">
      </div>
      <div class="px-16">
        <div class="home__container -mt-16 z-10">
          <div class="main py-16 pl-16 pr-24">
            <h3 class="pb-8">
              Hi
            </h3>
            <p class="main__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 class="pb-14">
              What is the coding toolbox?
            </h3>
            <div class="flex">
              <InfoCard :cardInfo="cardInfoArray[0]" class="w-1/2 pr-4"/>
              <InfoCard :cardInfo="cardInfoArray[1]" class="w-1/2"/>
            </div>
            <h3>
              Why the coding toolbox?
            </h3>
            <div class="flex">
              <NumberedCard :cardInfo="numberedCardArray[0]" class="w-1/3 pr-2" />
              <NumberedCard :cardInfo="numberedCardArray[1]" class="w-1/3 pr-2" />
              <NumberedCard :cardInfo="numberedCardArray[2]" class="w-1/3" />
            </div>
          </div>
          <div class="side py-16 px-12">
            <h3>
              Recent Articles
            </h3>
            <BlogCard
              v-for="(post, i) in blog.posts.slice(0, 5)"
              :key="i"
              :post="post"
              class="mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from '@/components/home/InfoCard.vue'
import NumberedCard from '@/components/home/NumberedCard.vue'
import BlogCard from '@/components/blog/Card.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      cardInfoArray: [
        { image: require('@/assets/laptop.jpg'), title: 'Tried and Test Tools', subtitle: 'Organised tools for all tech needs. From IDEs to Project Management, find everything you need right here.' },
        { image: require('@/assets/reviews.jpg'), title: 'REVIEWS AND TUTORIALS', subtitle: 'Get real life feedback on the tools being used. Make use of the blogs and tutorials helping you..' }
      ],
      numberedCardArray: [
        { image: require('@/assets/laptop.jpg'), number: '1', title: 'Independent Reviews', subtitle: 'Organised tools for all tech needs. From IDEs to Project Management, find everything you need right here.' },
        { image: require('@/assets/reviews.jpg'), number: '2', title: 'Everything in one place', subtitle: 'Get real life feedback on the tools being used. Make use of the blogs and tutorials helping you..' },
        { image: require('@/assets/reviews.jpg'), number: '3', title: 'Top tips and tricks', subtitle: 'Get real life feedback on the tools being used. Make use of the blogs and tutorials helping you..' }
      ]
    }
  },
  components: {
    BlogCard,
    InfoCard,
    NumberedCard
  },
  computed: {
    ...mapState([ 'blog' ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__banner {
    width: 100%;
    background-image: url("../../assets/reviews.jpg");
    padding-bottom: 37%;
    background-position: 50% 50%;
    position: relative;
    @media (min-width: 1200px) {
      padding-bottom: 30%;
    }
  }
  &__container {
    position: relative;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: white;
    display: flex;
    h3 {
      text-transform: uppercase;
      font-size: var(--font-2xl);
      font-weight: bold;
      line-height: 1.33;
      color: var(--c-primary);
      letter-spacing: 10%;
    }
    .main {
      width: 70%;
      text-align: start;
      &__description {
        font-size: var(--font-lg);
        color: var(--c-secondary);
        line-height: 1.25;
        font-weight: 400;
        padding-bottom: var(--spacer-2xl);
      }
    }
    .side {
      width: 30%;
      display: flex;
      flex-direction: column;
      background: var(--bg-secondary);
      border-radius: 10px;
    }
  }
}
</style>
