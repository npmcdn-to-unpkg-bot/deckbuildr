import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/**
 * Function that adds development middleware
 * @param config
 */
export default function addDevMiddleware(config) {
  const app = express();

  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  });
  
  // Sets up webpack for development serving and hot reloading.
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  return app;
}
