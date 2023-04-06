const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Initialize the app

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });


// Set up middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up session middleware

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7200000 }, // This is set for 2 hours
  })
);

// Set up routes

app.use(routes);

// Start the server

(async () => {
  try {
    await sequelize.sync({ force: false }); 
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();