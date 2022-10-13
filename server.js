const express = require('express')
const apiRoutes = require('./routes/apiRoutes');
const sequelize = require('./config/connection');

//get route for home directory 
//app.get('/', (req, res) => {
//res.sendFile(path.join(_dirname, 'insert directory name here to get inputted data'))
//})

const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

//middleware
// app.use(express.static(""));

//api routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

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
  app.listen(PORT, () => console.log("Now listening"));
});
