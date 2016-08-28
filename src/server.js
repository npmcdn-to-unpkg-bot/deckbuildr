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

// Configures the server middleware
app.use(configureServer());

// Sets the view engine (pug is jade, they changed the name)
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

/*
 For every available route (*), the routes in the routes.js file are matched with the visited route.
 This returns everything needed about that route and it's component, so you can render it on the server.
 */
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (!props) {
      res.status(404).render('404');
    } else {
      // Object with initial state, API calls could be added here to make this dynamic.
      const initialState = {
        ...categoriesInitialState
      }

      // Sync initialState with store
      const store = configureStore(initialState);
      const react = (
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );

      // Render React as a renderable HTML string
      const reactString = renderToString(react);
      const finalState = store.getState();

      // Render the React in the pug template using the initialState added onto the initial store state.
      res.render('index', { reactString, finalState });
    }
  });
});

// Start the server, listening to a certain PORT
app.listen(PORT, error => {
  if (error) {
    console.log(error);  // eslint-disable-line no-console
  } else {
    console.log(`Listening at port ${PORT}`);
  }
});

/*
 A mock and static initialState for categories, used this to add categories (model) to my state initially.
 This is also used to show server side rendering works, also when you need data from the server in the server side render.
*/
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