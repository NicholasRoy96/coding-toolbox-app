import moment from 'moment'

export default {
  install( Vue ) {
    Vue.filter( 'formatDate', function( value, format = 'D MMMM' ) {
      if( value ) {
        return moment( String( value ) ).format( format )
      }
    } )
  }
};