var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'],
    externals: {
      jquery: 'jQuery'
    },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      OpenWeatherMap: 'app/api/openWeatherMap.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devTool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015', 'stage-1']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      //{test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ],
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]
};
