const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes.js');
const assignmentRoutes = require('./assignment-routes.js');
const studentRoutes = require('./studentRoutes');

router.use('/users', userRoutes);
router.use('/assignments', assignmentRoutes); 
router.use('/students', studentRoutes);

module.exports = router;