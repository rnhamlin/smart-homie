const router = require("express").Router();

// const apiRoutes = require("./apiRoutes");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/studentRoutes", (req, res) => {
  res.sendFile(path.join(__dirname, "../userdashboard.html"));
});

router.get("/assignmentRoutes", (req, res) => {
  res.sendFile(path.join(__dirname, "../userdashboard.html"));
});

router.get("/user-routes", (req, res) => {
  res.sendFile(path.join(__dirname, "../userdashboard.html"));
});

module.exports = router;
