<template>
  <section class="blog-post min-h-screen">
    <div v-if="bannerImage" class="blog-post__banner flex" :style="bannerImage" />
    <div class="blog-post__container">
      <div class="blog-post__heading">
        <h1 class="blog-post__heading__title primary--text">{{ title }}</h1>
        <div class="flex justify-center items-center">
          <h4 class="blog-post__heading__date">{{ date | formatDate }}</h4>
          <img class="mx-6" width="40" src="@/assets/avatars/boy-1.svg" />
          <h4 class="blog-post__heading__author" >
            By
            <router-link
              class="blog-post__heading__author__name"
              :to="{ name: 'Author', params: { name: authorSlug } }"
            >
              {{ author }}
            </router-link>
          </h4>
        </div>
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
      if (!this.post) return ''
      const bannerImage = this.post.banner_image
      if (!bannerImage || !Object.keys(bannerImage).length) {
        return ''
      }
      return {
        '--img-url': `url('${bannerImage.url}')`
      };
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
    background-image: linear-gradient(178deg, transparent 84.8%, white 85%), var(--img-url);
    padding-bottom: 37%;
    background-position: 50% 50%;
    position: relative;
    @media (min-width: 1200px) {
      padding-bottom: 30%;
    }
  }
  &__container {
    margin: 0 auto;
    max-width: 910px;
    padding: var(--spacer-lg);
    color: #292929;
    text-align: left;
    font-weight: 400
  }
  &__heading {
    position: relative;
    width: 100%;
    padding: var(--spacer-lg) 0;
    margin: -180px 0 var(--spacer-xl);
    letter-spacing: -0.5px;
    text-align: center;
    background: var(--c-offwhite);
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    &__title {
      color: var(--c-primary);
      font-weight: 700;
      padding-bottom: var(--spacer-base);
      font-family: var(--font-header);
      font-size: var(--font-massive);
      line-height: 1.5;
      max-width: 80%;
      margin: 0 auto;
    }
    &__date {
      font-family: var(--font-family-primary);
      font-weight: 700;
      color: var(--c-primary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: var(--font-sm);
    }
    &__author {
      font-weight: 400;
      font-family: var(--font-primary);
      font-size: var(--font-m);
      color: var(--c-primary);
      &__name {
        font-weight: 700;
        color: var(--c-orange);
        &:hover {
          color: transparent;
          -webkit-text-stroke: 1px var(--c-orange);
        }
        @supports not(-webkit-text-stroke: 2px red) {
          a:hover {
            text-shadow:
              2px 2px 0 var(--c-orange),
              -1px -1px 0 var(--c-orange),
              1px -1px 0 var(--c-orange),
              -1px 1px 0 var(--c-orange),
              1px 1px 0 var(--c-orange);
          }
        }
      }
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
    p {
      color: var(--c-darkgrey);
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