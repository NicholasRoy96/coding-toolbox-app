import Vue from 'vue'
import Router from 'vue-router'

// Base Pages
import Home from '../components/views/Home.vue'
import About from '../components/views/About.vue'
import Contact from '../components/views/Contact.vue'

// Blog Specific
import Blog from '../components/views/Blog.vue'
import Post from '../components/views/blog/Post.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  component: About
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact
},
{
  name: 'Privacy',
  path: '/privacy',
  component: Home
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

export default router
