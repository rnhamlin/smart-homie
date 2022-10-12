const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const assignmentRoutes = require('./assignmentRoutes.js');
const studentRoutes = require('./studentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/assignments', assignmentRoutes); 
router.use('/students', studentRoutes);

module.exports = router;