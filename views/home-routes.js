const { Router } = require("express");
const sequelize = require('../config/connection');
const { User, Post, Assignments } = require('../models'); 
const router = require("../controllers/apiRoutes");

Router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'content',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('posts', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
