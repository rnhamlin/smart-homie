const User = require("./user");
const Post = require("./Post");
const Assignments = require("./Assignments");
const Students = require("./Students");

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Assignments.belongsTo(User, {
  foreignKey: "user_id",
});

Assignments.belongsTo(Students, {
  foreignKey: "assignments_completed",
});

Students.hasMany(Assignments, {
  foreignKey: "completed",
});

module.exports = { User, Post, Assignments, Students };
