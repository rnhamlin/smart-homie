const router = require('express').Router();

const apiRoutes = require('./api');

router.use('./api', apiroutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = routes; 