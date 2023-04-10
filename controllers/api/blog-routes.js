// const router = require('express').Router();
// const { Blog } = require('../../models');

const { Blog } = require("../../models");



// POST a new blog
router.post('/', async (req, res) => {
    const blog = new Blog({
        username: req.body.username,
        content: req.body.content
    });

    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//complete