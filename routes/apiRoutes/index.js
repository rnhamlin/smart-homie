const express = require('express');
const router = express.Router();

router.use(require('./assignmentRoutes'));
//add other routes

module.exports = router;