<template>
  <div class="home">
    <v-row>
      <v-col cols="12" md="5" offset-md="2">
        <v-card class="ma-0" flat>
          <v-card-title class="justify-left landing__heading">Welcome to The Coding Toolbox</v-card-title>
          <v-spacer />
          <v-card-text class="text-left landing__content">
            Hi everyone and welcome. Thanks for checking out The Coding Toolbox. <br /><br />
            I'm Duncan. I work full time as a Technical Director for a Web Development company in London.
            I spend my free time learning and sharing my experiences with you all.<br /><br /> 
            The idea behind this <b>site</b>, <b>blog</b> and <b>YouTube channel</b> is to share awesome tech tips and tools to help you along your Software Engineering journies.<br /><br />
            Hopefully you find this site useful. If you have any feedback for the tips and tools shared either here or on my channel, please get in touch!
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="ma-0" flat>
          <v-card-title class="landing__heading">Most recent articles</v-card-title>
          <v-col cols="12" v-for="(post, index) in blog.posts" :key="index">
            <BlogCard :post="post" :hideImage="true"></BlogCard>
            <v-divider></v-divider>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogCard from '@/components/blog/Card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    BlogCard
  },
  computed: {
    ...mapState([ 'blog' ])
  },
  methods: {
    ...mapActions([ 'getPosts' ])
  },
  async created() {
    await this.getPosts()
  }
}
</script>

<style lang="scss" scoped>
  .landing {
     &__heading {
        font-size: 36px;
     }
     &__content {
       font-size: 20px;
     }
  }
</style>
