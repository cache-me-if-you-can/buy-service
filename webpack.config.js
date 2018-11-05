const path = require('path');

module.exports = {
  entry: './client/src/components/Form.jsx', // tells webpack where to start looking for files
  output: {
    path: path.resolve(__dirname, 'client/dist'), // folder where webpack will put bundle
    filename: 'bundle.js', // what it will name the bundle
  },
  module: {
    // This is causing an error that makes webpack fail. They were here in an attempt to make webpack configure correctly.
    // loaders: [
    //   {test: /\.woff$/, loader: 'url?limit=10240&mimetype=application/font-woff'},
    //   {test: /\.ttf$/, loader: 'url?limit=10240&mimetype=application/x-font-ttf'},
    //   {test: /\.eot$/, loader: 'url?limit=10240&mimetype=application/vnd.ms-fontobject'},
    //   { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    // ], 
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
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }, 
  
  mode: 'development',
};