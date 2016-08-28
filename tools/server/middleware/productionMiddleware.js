import express from 'express';
import compression from 'compression';

/**
 * Function that sets up the production server middleware
 * @param config
 */
export default function addProdMiddleware(config) {
  const app = express();

  // Adds compression
  app.use(compression());
  app.use(config.output.publicPath, express.static(__dirname + config.output.publicPath));

  return app;
}
