var path = require('path'),
    express = require('express'),
    app = express(),
    DIST_DIR = path.join(__dirname, "dist"),
    PORT = process.env.PORT || 3001;

app.use(express.static('public'));

//using webpack dev-server as middlewre
if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware')
      webpackHotMiddleware = require('webpack-hot-middleware'),
      webpack = require('webpack'),
      config = require('./webpack.config'),
      compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(DIST_DIR));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port ', PORT);
  }
})
