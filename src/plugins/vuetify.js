import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use( Vuetify );

export default new Vuetify( {
  icons: {
    iconfont: 'mdi'
  },
  options: {
    customProperties: true
  },
  dark: false,
  themes: {
    light: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
      info: '#3f51c2',
      warning: colors.amber.base,
      success: colors.green.accent3
    },
    dark: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#',
      error: '#b71c1c',
      info: '#3f51c2',
      warning: colors.amber.base,
      success: colors.green.accent3
    }
  }
} )