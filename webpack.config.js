const path = require('path');

module.exports = {
  entry: './client/src/index.js', // tells webpack where to start looking for files
  output: {
    path: path.resolve(__dirname, 'client/dist'), // folder where webpack will put bundle
    filename: 'bundle.js', // what it will name the bundle
  },
  module: {
    rules: [
      { // everything that babel needs to run
        test: /\.jsx?$/, // .js OR .jsx files
        exclude: /(node_modules)/, // if the file is in the node_modules folder, don't transpile
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  },
  mode: 'development',
};