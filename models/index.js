const User = require('./User');
const Post = require('./Post');
const Assignments = rquire('./Assignment');
const Student = require('./Student');

module.exports = { User, Post, Assignments, Student };

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Assignments.belongsTo(User, {
    foreignKey: 'user_id',
});
