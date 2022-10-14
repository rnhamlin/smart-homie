const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3001;
const app = express();

// const apiRoutes = require("./routes/apiRoutes");
// const sequelize = require("./config/connection");

// const SequelizeStore = require("connect-session-sequelize")(session.Store);

//for handlebars
app.use(express.static(__dirname + "/public"));
//for body-parser, just in case
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handlebars settings
app.set("view engine", "hbs");
app.engine(
  "handlebars",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "index",
    layouts: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes (should this be simply "routes"?)
// app.use("/api", apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.json({
    message: "Working",
  });
  res.status(404).end();
});

//turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Listening to server ${PORT}`));
// });

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});

//landing page
app.get("/", (req, res) => {
  res.render("main");
});
