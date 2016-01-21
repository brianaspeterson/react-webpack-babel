var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry : {
    'index' : './index'
  },
  output : {
    path : path.join(__dirname, 'dist'),
    filename : "[name].js"
  },
  module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['react', 'es2015']
	      }
	    }
	  ]
	}
};