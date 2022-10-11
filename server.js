const express = require('express')
const db = require ('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const sequelize = require('./config/connection'); 

//get route for home directory 
//app.get('/', (req, res) => {
//res.sendFile(path.join(_dirname, 'insert directory name here to get inputted data'))
//})

// repeat above for multiple get routes

//add post routes

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes (should this be simply "routes"?)
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.json({
        message: 'Working'
    });
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
