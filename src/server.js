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
      // Set initialState here if needed.
      const initialState = {};

      const store = configureStore(initialState);
      const react = (
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );

      const reactString = renderToString(react);
      const finalState = store.getState();

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

function generateToken(user) {
  const u = {
   username: user.username,
   id: user.id.toString(),
  };

  return jwt.sign(u, JWT_SECRET, {
     expiresIn: 60 * 60 * 24
  });
}

// app.post('/signup', (req, res, next) => {
//  const body = req.body;
//  const hash = bcrypt.hashSync(body.password.trim(), 10);
//  const user = new User({
//   username: body.username.trim(),
//   password: hash,
//  });

//  user.save((err, user) => {
//     if (err) {
//       throw err
//     }

//     const token = utils.generateToken(user);

//     res.json({
//        user,
//        token
//     });
//  });
// });

app.post('/login', (req, res) => {
  console.log('hello');
  const user = {
    username: "jorifgp",
    id: 123
  }

  const token = generateToken(user);
  res.json({ token });
});