const router = require('express').Router();
const sequelize = require('../config/connection'); 
const { Post, User } = require('../models'); 

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'conent',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email', 'password'],
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
        // pass a single post object into homepage template
        res.render('homepage', dbPostData[0]);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

    // res.render('userdashboard', {
    //     id: 1, 
    //     content: 'A comment about doing homework',
    //     created_at: new Date(),
    //     username: {
    //         username: 'test_user'
    //     }
    // });
});

module.exports = router;
