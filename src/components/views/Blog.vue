<template>
  <div>
    <h2 color="primary">Read the latest posts</h2>
    <v-row justify="center">
      <v-col cols="3" v-for="(post, index) in posts" :key="index">
        <div class="post" @click='$router.push({ name: "Blog Post", params: { id: post.uid } })'>
          <v-img :src="post.data.thumbnail.url" height="300" width="300" />
          <h2 class="text-left">{{ post.data.blog_title[0].text }}</h2>
          <p class="text-left">{{ post.data.blog_content[0].text }}</p>
          <p class="text-left">{{ post.data.author[0].text }} | {{ post.first_publication_date | formatDate }}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts() {
      this.$prismic.client.query('').then((response) => {
        this.posts = response.results;
      });
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style scoped lang="scss">
  .post {
    cursor: pointer;
  }
</style>