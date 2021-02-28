import moment from 'moment'

export default {
  install( Vue ) {
    Vue.filter( 'formatDate', function( value, format = 'MMMM YYYY' ) {
      if( value ) {
        return moment( String( value ) ).format( format )
      }
    } )
  }
};