import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({
  template: '<div class="bar" role="bar" style="background:var(--c-orange);"></div>'
});

// Base Pages
// import Home from '../components/views/Home.vue'
import About from '../components/views/About.vue'
import Author from '../components/views/Author.vue'
// import Contact from '../components/views/Contact.vue'

// Blog Specific
import Blog from '../components/views/Blog.vue'
import Post from '../components/views/blog/Post.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Blog
},
{
  path: '/about',
  name: 'About',
  component: About
},
{
  path: '/author/:name',
  name: 'Author',
  component: Author
},
{
  name: 'Blog',
  path: '/blog',
  component: Blog
},
{
  name: 'Blog Post',
  path: '/blog/:id',
  component: Post
}]

Vue.use( Router )

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0);
  NProgress.done()
})

export default router
