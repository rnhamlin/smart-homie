const router = require('express').Router();
const sequelize = require('../../config/connection'); 
const { Assignments, User, Post } = require('../../models');

//get all assignments
router.get('/assignments', (req, res) => {
    console.log('======');
    Assignments.findAll({
        attributes: ['id', 'title', 'curricula_id', 'grade', 'subject_id', 'thisWeek', 'completed', 'created_at'
        [sequelize.literal('(SELECT COUNT(*) FROM assignments)'), 'user-id']],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
              model: curricula,
              attributes: ['curricula_id']
            },
            {
              model: subjects,
              attributes: ['subject_id']
            }
        ]
    })
    .then(dbAssignmentsData => {
      const assignments = dbAssignmentsData.map(assignments => assignments.get({ plain: true }));
      
      res.render('userdashboard', {
        assignments,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err=> {
      console.log(err);
      res.status(500).json(err);
    });
  }); 

//get assignments to complete this week
router.get('/assignments/:thisWeek', (req, res) => {
    Assignments.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'curricula_id', 'grade', 'subject_id', 'thisWeek', 'completed', 'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM assignments WHERE assigment.thisWeek = true'), 'thisWeek']
      ],
      include: [
        {
            model: User,
            attributes: ['username']
        },
        {
          model: curricula,
          attributes: ['curricula_id']
        },
        {
          model: subjects,
          attributes: ['subject_id']
        }
    ]
    })
    .then(dbAssignmentsData => {
        if(!dbAssignmentsData) {
            res.status(404).json({ message: 'No assignment found with this id' });
            return;
        }

        const assignments = dbAssignmentsData.get({ plain: true });
        
        res.render('thisWeek', {
          assignments,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err=> {
        console.log(err);
        res.status(500).json(err);
      });
    });

    router.get('/login', (req, res) => {
      if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }

      res.render('login');
    });


//create an assignment
router.post('/', (req, res) => {
    Assignments.create({
        title: req.body.title,
        curricula_id: req.body.curricula_id,
        grade: req.body.grade,
        subject_id: req.body.subject_id,
        thisWeek: req.body.thisWeek,
        completed: req.body.completed,
        user_id: req.body.user_id
    })
    .then(dbAssignmentsData => res.json(dbAssignmentsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//update assignment's completion status (will need front end js for this on logged-in user page, a modal with dropdown of assignments, select, check "complete"?, sequelize will record date of update?)
router.put('/:id', (req, res) => {
  Assignments.update(
    {
      completed: req.body.completed
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbAssignmentsData => {
    if (!dbAssignmentsData) {
      res.status(404).json({ message: 'No assignments found with this id'});
      return;
    }
    res.json(dbAssignmentsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });  //check order, no .then on put method
})


//delete an assignment
router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
