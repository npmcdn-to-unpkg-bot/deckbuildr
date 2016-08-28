import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import configureServer from '../tools/server/configureServer.js';
import jwt from 'jsonwebtoken';
const PORT = process.env.PORT || 3005;
const app = express();
const JWT_SECRET = "Jori";

app.use(configureServer());

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (!props) {
      res.status(404).render('404');
    } else {
      const initialState = {
        ...categoriesInitialState
      }

      const store = configureStore(initialState);
      const react = (
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );

      const reactString = renderToString(react);
      const finalState = store.getState();

      console.log(finalState);
      res.render('index', { reactString, finalState });
    }
  });
});

app.listen(PORT, error => {
  if (error) {
    console.log(error);  // eslint-disable-line no-console
  } else {
    console.log(`Listening at port ${PORT}`);
  }
});

const categoriesInitialState = {
  categoryIds: [
    'standard',
    'legacy',
    'commander',
    'modern',
    'pauper',
    'casual'
  ],
  categoriesById: {
    ['standard']: {
      id: 'standard',
      name: 'standard'
    },
    ['legacy']: {
      id: 'legacy',
      name: 'legacy'
    },
    ['commander']: {
      id: 'commander',
      name: 'commander'
    },
    ['modern']: {
      id: 'modern',
      name: 'modern'
    },
    ['pauper']: {
      id: 'pauper',
      name: 'pauper'
    },
    ['casual']: {
      id: 'casual',
      name: 'casual'
    }
  }
}