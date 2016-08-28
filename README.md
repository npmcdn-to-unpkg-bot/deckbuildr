#Magic the Gathering deckbuilder

deckbuildr is een

## Technieken

  - Isomorphic web application (server side rendering)
  - Initial state injection
  - Node.js
  - Express
  - Jade
  - React
  - Redux
  - React-router
  - Babel
  - Fetch
  - Heroku
  - Localstorage
  - ESLint (airbnb preset)
  - Webpack (webpack-dev-middleware & webpack-hot-middleware)
  - React hot reload (react-hot-loader)
  - ES2015 & ES2016 (deels)
  - Functional programming (immutable state & pure functions)

## Features
 - Server-side rendered, volledige functionaliteit zit erin, alleen gedemonstreerd via static data voor initial state.
 - Heroku continuous integrated, gemakkelijk dit project overnemen en er mee doorwerken.
 - State wordt gesynchroniseerd met localstorage zodat je opgeslagen decks worden behouden
 - Zoeken van cards door middel van een zoeksysteem gekoppeld aan de Deckbrew API. Belangrijk hierbij dat kaarten worden opgeslagen in de applicatiestate, dus niet onnodig een request doen :)
 - Kaarten toevoegen aan een deck.
 - Decks aanmaken
 - Decks filteren op basis van categorieën
 - Decks favoriten
 - Decks verwijderen
 - Lazy loading van kaarten als ze niet binnen viewport zijn
 - Loader tijdens async operaties
