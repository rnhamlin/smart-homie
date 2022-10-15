const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const assignmentRoutes = require('./assignmentRoutes.js');
const studentRoutes = require('./studentRoutes');

router.use('/user-routes', userRoutes);
router.use('/post-routes', postRoutes);
router.use('/assignmentRoutes', assignmentRoutes); 
router.use('/studentRoutes', studentRoutes);

module.exports = router;