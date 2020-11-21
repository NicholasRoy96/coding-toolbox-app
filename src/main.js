import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from '@/plugins/vuetify'
import prismic from '@/plugins/prismic/prismic'
import filters from '@/filters'
Vue.use( filters );

new Vue( {
  vuetify,
  prismic,
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' )