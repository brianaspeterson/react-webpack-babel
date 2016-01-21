var path = require('path');

module.exports = {
  entry : {
    'index' : './index'
  },
  output : {
    path : path.join(__dirname, 'dist'),
    filename : "[name].js"
  }
};