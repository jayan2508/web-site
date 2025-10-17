const path = require('path');

module.exports = {
  entry: './dist/website/server/main.server.mjs',
  target: 'node',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'netlify/functions/ssr'),
    filename: 'ssr.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    express: 'commonjs express'
  }
};
