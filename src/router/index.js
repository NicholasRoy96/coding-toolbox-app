import Vue from 'vue'
import Router from 'vue-router'

// Base Pages
import Home from '../components/views/Home.vue'
import About from '../components/views/About.vue'
import Contact from '../components/views/Contact.vue'
import Login from '../components/views/Login.vue'
import Admin from '../components/views/Admin.vue'

// Admin Specific
import ManageCategories from '../components/views/admin/categories/ManageCategories.vue'
import ManageCategory from '../components/views/admin/categories/ManageCategory.vue'
import ManageLanguages from '../components/views/admin/languages/ManageLanguages.vue'
import ManageLanguage from '../components/views/admin/languages/ManageLanguage.vue'

// Category Specific
import Categories from '../components/views/Categories.vue'
import CategoryTools from '../components/views/categories/Tools.vue'
import CategoryTool from '../components/views/categories/Tool.vue'

// Language Specific
import Languages from '../components/views/Languages.vue'
import Language from '../components/views/languages/Language.vue'
import LanguageTools from '../components/views/languages/Tools.vue'
import LanguageTool from '../components/views/languages/Tool.vue'

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
  name: 'Login',
  path: '/login',
  component: Login
},
{
  name: 'Privacy',
  path: '/privacy',
  component: Home
},
{
  name: 'Admin',
  path: '/admin',
  component: Admin,
  children: [{
    path: 'categories',
    component: ManageCategories,
    children: [{
      path: ':category',
      component: ManageCategory
    }]
  }, {
    path: 'languages',
    component: ManageLanguages,
    children: [{
      path: ':language',
      component: ManageLanguage
    }]
  }]
},
{
  name: 'Categories',
  path: '/categories',
  component: Categories,
  children: [{
    path: ':category',
    component: CategoryTools,
    children: [{
      path: ':tool',
      component: CategoryTool
    }]
  }]
},
{
  name: 'Languages',
  path: '/languages',
  component: Languages,
  children: [{
    path: ':language',
    component: Language,
    children: [{
      path: ':tool',
      component: LanguageTools,
      children: [{
        path: ':name',
        component: LanguageTool
      }]
    }]
  }]
}
]

Vue.use( Router )

const router = new Router({
  mode: 'history',
  routes
})

export default router
