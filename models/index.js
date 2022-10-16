const User = require("./user");
const Post = require("./Post");
const Assignments = require("./Assignments");
const Students = require("./Students");
const Curricula = require("./Curricula");
const Subjects = require("./Subjects");

User.hasMany(Post, {
  foreignKey: "user_id"
});

User.hasMany(Assignments, {
  foreignKey: "user_id"
});

User.hasMany(Students, {
  foreignKey: "user_id"
});

User.hasMany(Subjects, {
  foreignKey: "user_id"
});

Subjects.belongsTo(Curricula, {
  foreignKey: "subjects_id"
});

Subjects.belongsTo(Assignments, {
  foreignKey: "subjects_id"
});

Post.belongsTo(User, {
  foreignKey: "user_id"
});

Assignments.belongsTo(User, {
  foreignKey: "user_id"
});

Assignments.belongsTo(Students, {
  foreignKey: "assignments_completed"
});

Curricula.belongsTo(User, {
  foreignKey: "user_id"
});

Curricula.belongsTo(Assignments, {
  foreignKey: "curricula_id"
});

module.exports = { User, Post, Assignments, Students, Subjects, Curricula };
