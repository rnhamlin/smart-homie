const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//get route for home directory
//app.get('/', (req, res) => {
//res.sendFile(path.join(_dirname, 'insert directory name here to get inputted data'))
//})

// repeat above for multiple get routes

//add post routes

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use apiRoutes
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
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});
