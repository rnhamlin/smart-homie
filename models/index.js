const user = require("./user").default;
const Post = require("./Post");
const Assignments = require("./Assignments");
const Students = require("./Students");

user.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(user, {
  foreignKey: "user_id",
});

Assignments.belongsTo(user, {
  foreignKey: "user_id",
});

Assignments.belongsTo(Students, {
  foreignKey: "assignments_completed",
});

Students.hasMany(Assignments, {
  foreignKey: "completed",
});

module.exports = { user, Post, Assignments, Students };
