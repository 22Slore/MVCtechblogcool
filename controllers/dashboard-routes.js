const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log(req.session.user_id)
    try {
        const findAllBlogs = await Blog.findAll({
            where: { user_id: req.session.user_id, },

        })

    }
    catch (err) { res.redirect("login") }
});

module.exports = router;