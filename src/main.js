import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import filters from '@/filters'
import PrismicVue from '@prismicio/vue'
import linkResolver from '@/plugins/prismic/linkResolver.js';
import './assets/styles/index.css';

Vue.use(PrismicVue, {
  endpoint: 'https://thecodingtoolbox.cdn.prismic.io/api/v2',
  preview: false,
  linkResolver,
  apiOptions: { accessToken: process.env.VUE_APP_PRISMIC_API_KEY }
});

Vue.use( filters );

new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' )