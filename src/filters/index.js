import moment from 'moment'
import http from '@/utils/http';

export default {
  install( Vue ) {
    Vue.prototype.$http = http;
    Vue.filter( 'formatDate', function( value, format = 'D MMMM' ) {
      if( value ) {
        return moment( String( value ) ).format( format )
      }
    } )
  }
};