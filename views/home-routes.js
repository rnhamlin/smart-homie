const { Router } = require("express");

Router.get('/login', (req, res) => {
    res.render('login');
})