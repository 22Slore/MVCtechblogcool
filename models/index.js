const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

//associations
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

//exports
module.exports = { User, Blog, Comment };

//complete