const api = {
  url: 'https://coding-toolbox-api.herokuapp.com'
}

const auth = {
  domain: 'saasio.eu.auth0.com',
  clientID: 's2XrP9Rp33p21hR0vq2ei4QZpVDIG35b',
  audience: 'coding-toolbox',
  namespace: 'https://www.codingtoolbox.co.uk'
}

if( process.env.NODE_ENV === 'development' ) {
  // set local config here
  api.url = 'http://localhost:3030'
}

module.exports = {
  api,
  auth
}