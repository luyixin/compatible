const utils = require('./utils')
const config = require('../config_base')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config.build.productionSourceMap,
    extract: true
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
