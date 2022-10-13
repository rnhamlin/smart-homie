const router = require("express").Router();

// const apiRoutes = require("./apiRoutes");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/studentRoutes", (req, res) => {
  res.sendFile(path.join(__dirname, ""));
});

router.get((req, res) => {
  res.status(404).end();
});

module.exports = router;
