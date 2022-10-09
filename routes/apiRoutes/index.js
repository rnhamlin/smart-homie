const express = require('express');
const router = express.Router();

router.use(require('./assignmentRoutes'));
router.use(require('./studentRoutes'))
//add other routes

module.exports = router;