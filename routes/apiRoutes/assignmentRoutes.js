const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
  Assignments,
  Subjects,
  Curricula,
  User,
  Post
} = require("../../models");

//get all assignments
router.get("/", (req, res) => {
  Assignments.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "title",
      "curricula_id",
      "grade",
      "subject_id",
      "thisWeek",
      "completed",
      "created_at",
      [
        (sequelize.literal("(SELECT * FROM assignments)"), "assignments")
      ]
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Curricula,
        attributes: ["curricula_id"]
      },
      {
        model: Subjects,
        attributes: ["subject_id"]
      }
    ]
  })
    .then((dbAssignmentsData) => 
    {
      const assignments = dbAssignmentsData.map((assignments) =>
        assignments.get({ plain: true })
      );
      res.render("assignments", {
        assignments,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get assignments to complete this week
router.get("/:thisWeek", (req, res) => {
  Assignments.findOne({
    attributes: [
      "id",
      "title",
      "curricula_id",
      "grade",
      "subject_id",
      "thisWeek",
      "completed",
      "created_at"
      [
        sequelize.literal(
          "(SELECT * FROM assignments WHERE assigments.thisWeek = true"
        ),
        "thisWeek"
      ]
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Curricula,
        attributes: ["curricula_id"]
      },
      {
        model: Subjects,
        attributes: ["subject_id"]
      }
    ]
  })
    .then((dbAssignmentsData) => {
      if (!dbAssignmentsData) {
        res.status(404).json({ message: "No assignment found with this id" });
        return;
      }

      const thisWeek = dbAssignmentsData.get({ plain: true });

      res.render("thisWeek", {
        thisWeek,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//create an assignment
router.post("/", (req, res) => {
  Assignments.create({
    title: req.body.title,
    curricula_id: req.body.curricula_id,
    grade: req.body.grade,
    subject_id: req.body.subject_id,
    thisWeek: req.body.thisWeek,
    completed: req.body.completed,
    user_id: req.body.user_id
  })
    .then((dbAssignmentsData) => res.json(dbAssignmentsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update assignment's completion status (will need front end js for this on logged-in user page)
router.put("/:id", (req, res) => {
  Assignments.update(
    {
      completed: req.body.completed
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    }); //check order, no .then on put method; right, thanks, Gracie! fixed
});

//delete an assignment
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
