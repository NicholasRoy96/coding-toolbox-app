import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from '@/plugins/vuetify'
import filters from '@/filters'
import PrismicVue from '@prismicio/vue'
import linkResolver from '@/plugins/prismic/linkResolver.js';

Vue.use(PrismicVue, {
  endpoint: 'https://thecodingtoolbox.cdn.prismic.io/api/v2',
  linkResolver,
  apiOptions: { accessToken: process.env.VUE_APP_PRISMIC_API_KEY }
});

Vue.use( filters );

new Vue( {
  vuetify,
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' )