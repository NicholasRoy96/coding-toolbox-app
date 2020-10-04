import axios from 'axios'
import ls from 'localstorage-ttl'
import config from 'config'
const http = axios.create( {
  baseURL: config.api.url
} )

// Request interceptor
http.interceptors.request.use( config => {
  const token = ls.get( 'token' )
  if( token ) config.headers.authorization = `Bearer ${token}`
  return config
},
error => Promise.reject( error )
)

// Response interceptor
http.interceptors.response.use( response => {
  return response.data
}, ( error ) => {
  const { response } = error
  const statusText = response && response.statusText ? response.statusText : 'API Unavailable'
  const message = response && response.data ? response.data : statusText
  return Promise.reject( message )
} );

export default http