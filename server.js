const express = require('express')
const apiRoutes = require('./routes/apiRoutes');
const sequelize = require('./config/connection');

//get route for home directory
//app.get('/', (req, res) => {
//res.sendFile(path.join(_dirname, 'insert directory name here to get inputted data'))
//})

//connects session to the sequelize database 
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// repeat above for multiple get routes

//add post routes

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes (should this be simply "routes"?)
app.use('/api', apiRoutes);


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.json({
    message: "Working",
  });
  res.status(404).end();
});

// Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
