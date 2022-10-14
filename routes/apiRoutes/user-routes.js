const router = require("express").Router();
const user = require("../../models/user").default;

router.get("/", (req, res) => {
  user
    .findAll({
      attributes: { exclude: ["password"] },
    })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  user
    .findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id,
      },
    })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  user
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user with that email address!" });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }

      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    });
});

router.put("/:id", (req, res) => {
  user
    .update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with that id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  user
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
