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
      primary: colors.red.lighten3,
      accent: colors.grey.lighten4,
      secondary: colors.amber.lighten2,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    },
    dark: {
      primary: colors.red.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  }
} )