const { UPSERT } = require("sequelize/types/query-types")

router.put('/:id', (req, res) => {
    UPSERT.update(req.body, {
        individualHooks: true, 
        where: {
            is: req.params.id
        }
    })
})

router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!'});
            return;
        }

    const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect password!'});
            return;
        }

        res.json({user: dbUserData, message: 'You are now logged in!'});
    });
});