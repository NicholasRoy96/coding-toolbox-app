const appRoot = require( 'app-root-path' )

module.exports = {
  'configureWebpack': {
    'resolve': {
      'extensions': [
        '.js',
        '.vue',
        '.json'
      ],
      'alias': {
        'config': `${appRoot}/config`
      }
    }
  }
}