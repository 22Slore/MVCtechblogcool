//requires
const sequelize = require("../config/connection");
const { Comment, User, Blog } = require('../models');

//bring in the comment blog and user seeds...how?
const blogSeeds = require('./blog-seeds.json');
const commentSeeds = require('./comment-seeds.json');
const userSeeds = require('./user-seeds.json');

//create function here
const createFunction = async () => {
    try {
        await sequelize.sync({ force: true })
        await User.bulkCreate(userSeeds, {
            individualHooks: true,
            unique: false,
        });
        await Comment.bulkCreate(commentSeeds);
        await Blog.bulkCreate(blogSeeds);
        process.exit(0);
    } catch (err) {
        console.log(err)
    }
}

//call function here
createFunction()

//complete

//user, blog, and comment seeds completed
