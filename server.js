const path = require("path");
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const sequelize = require("./config/connection");
const session = require("express-session");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

//handlebars setting
app.set("view engine", "hbs");
app.engine("hbs", hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use("/api", apiRoutes);

//data
const { Assignments } = require("./models/Assignments");

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
  app.listen(PORT, () => console.log("Now listening."));
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to db successful");
  })
  .catch((error) => {
    console.error("Unable to connect to db: ", error);
  });

//landing page
app.get("/", (req, res) => {
  res.render("main", { title: "Smart Homie" });
});

//userdashboard page
app.get("userdashboard", (req, res) => {
  res.render("userdashboard", { Assignments: Assignments });
});

//discussion-board page
app.get("discussion", (req, res) => {
  res.render("discussion", { subtitle: "Discussion Board" });
});

//calendar page
app.get("calendar", (req, res) => {
  res.render("calendar", { subtitle: "Calendar" });
});

//grades page
app.get("grades", (req, res) => {
  res.render("grades", { subtitle: "Grades" });
});

//resources page
app.get("resources", (req, res) => {
  res.render("resources", { subtitle: "Recources" });
});

//not found
app.get("*", (req, res) => {
  res.render("notfound", { message: "Sorry, page not found." });
});
