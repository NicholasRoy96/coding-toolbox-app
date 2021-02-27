<template>
  <section class="blog-post min-h-screen">
    <div class="blog-post__banner flex">
    </div>
    <div class="blog-post__content">
      <div class="blog-post__heading">
        <h1 class="blog-post__heading__title primary--text">{{ title }}</h1>
        <router-link class="blog-post__heading__subtitle" :to="{ name: 'Author', params: { name: authorSlug } }">By {{ author }} | {{ date | formatDate }}</router-link>
        <h3 class="blog-post__heading__subtitle">{{ category }}</h3>
      </div>
      <prismic-rich-text :field="content" :htmlSerializer="HTMLSerializer" class="blog-post__text" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import prismicDOM from 'prismic-dom'

const Elements = prismicDOM.RichText.Elements

const HTMLSerializer = function(type, element, content, children) {
  if (type === Elements.preformatted) {
    return `<pre class="code-block">${children.join(' ')}</pre>`
  }
  if (content === '') {
    return'<p class="spacer" />'
  }
  return null
}

export default {
  name: 'Post',
  data () {
    return {
      HTMLSerializer,
      loading: false
    };
  },
  computed: {
    ...mapGetters([ 'post' ]),
    title() {
      if (!this.post || !this.post.blog_title || !this.post.blog_title.length) {
        return ''
      }
      return this.post.blog_title[0].text
    },
    author() {
      if (!this.post || !this.post.author || !this.post.author.data || !this.post.author.data.name) {
        return ''
      }
      return this.post.author.data.name[0].text
    },
    authorSlug() {
      if (!this.post || !this.post.author || !this.post.author.uid || !this.post.author.slug) {
        return ''
      }
      return this.post.author.slug
    },
    category() {
      if (!this.post || !this.post.category) {
        return ''
      }
      return this.post.category
    },
    date() {
      if (!this.post || !this.post.blog_created_date) {
        return ''
      }
      return this.post.blog_created_date
    },
    bannerImage() {
      if (!this.post || !this.post.banner_image) {
        return {}
      }
      return `background-image:linear-gradient(178deg, transparent 84.8%, white 85%), url(${this.post.banner_image});`
    },
    // image() {
    //   if (!this.post || !this.post.blog_image) {
    //     return {}
    //   }
    //   return {
    //     url: this.post.blog_image.url,
    //     height: this.post.blog_image.dimensions.height,
    //     width: this.post.blog_image.dimensions.width
    //   }
    // },
    content() {
      if (!this.post || !this.post.blog_content) {
        return ''
      }
      return this.post.blog_content
    }
  },
  methods: {
    ...mapActions([ 'togglePageLoader', 'selectBlog' ])
  },
  async created () {
    this.togglePageLoader()
    const blogID = this.$route.params.id ? this.$route.params.id : null
    const { post } = this;
    if ( blogID && (!post || blogID !== post.uid)) {
      const blog = await this.$prismic.client.getByUID('blog_post', blogID, { fetchLinks: 'author.name' })
      this.selectBlog({ uid: blogID, ...blog.data })
    }
    this.togglePageLoader()
  }
}
</script>

<style scoped lang="scss">
.blog-post {
  &__banner {
    width: 100%;
    background-image: linear-gradient(178deg, transparent 84.8%, white 85%), url("../../../assets/reviews.jpg");
    padding-bottom: 37%;
    background-position: 50% 50%;
    position: relative;
    @media (min-width: 1200px) {
      padding-bottom: 30%;
    }
  }
  &__content {
    margin: 0 auto;
    max-width: 760px;
    padding: var(--spacer-lg);
    color: #292929;
    text-align: left;
    font-weight: 400
  }
  &__heading {
    padding-bottom: var(--spacer-xl);
    letter-spacing: -0.5px;
    &__title {
      font-weight: 600;
      padding-bottom: var(--spacer-sm);
      font-size: var(--font-massive);
      line-height: 60px;
    }
    &__subtitle {
      font-weight: 500;
      font-size: var(--font-lg);
      color: #757575; 
      line-height: 28px;
    }
  }
}
</style>

<style lang="scss">
.blog-post {
  &__text {
    padding-bottom: 16px;
    font-size: 20px;
    line-height: 32px;
    h1 {
      font-size: var(--font-3xl);
      margin-bottom: var(--spacer-base);
    }
    h2 {
      font-size: var(--font2xl);
      margin-bottom: var(--spacer-sm)
    }
    h3 {
      font-size: var(--font-xl);
      margin-bottom: var(--spacer-xs);
    }
    h4 {
      font-size: var(--font-lg);
      margin-bottom: var(--spacer-xs);
    }
    .spacer {
      padding-bottom: var(--spacer-xl);
    }
    .code-block {
      background-color: var(--c-darkblue);
      color: white;
      margin: var(--spacer-lg) 0;
      padding: var(--spacer-lg);
      font-size: var(--font-sm);
      overflow-x: scroll;
    }
  }
}
</style>