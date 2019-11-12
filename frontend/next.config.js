require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.resolve(__dirname, '../.env'),
        systemvars: true
      })
    ]
    config.devtool = 'eval-source-map'
    return config
  }
}
