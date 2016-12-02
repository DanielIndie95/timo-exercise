var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

new WebpackDevServer(webpack(webpackConfig), {
	publicPath: "/",
	inline: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
	console.log(err);
  }

  console.log('Listening at localhost:3000');
});
