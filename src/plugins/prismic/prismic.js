import Vue from 'vue';
import PrismicVue from '@prismicio/vue'
import linkResolver from '@/plugins/prismic/linkResolver.js';

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: 'https://thecodingtoolbox.cdn.prismic.io/api/v2',
  linkResolver,
  apiOptions: { accessToken: 'MC5YN1Z1VXhJQUFFdm1fVm16.I03vv71M77-977-9MUvvv73vv73vv71t77-977-9DwIBdu-_ve-_vWxzBWbvv73vv70r77-9ZQLvv719' }
});