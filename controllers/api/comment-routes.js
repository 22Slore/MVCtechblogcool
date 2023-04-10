const router = require('express').Router();
const { Comment } = require('../../models');

// POST a new comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        content: req.body.content
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

//complete