const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//no unlogged in users may view the homepage
router.get('/', async (req, res) => {
    try {
        console.log("hello");
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) =>
            project.get({ plain: true }));
        res.render('home', {
            users,
            //passing login flag to template
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    //if theres an existing session then redirect to home
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// router.get('/logout', (req, res) => {
//     //if theres an existing session then redirect to home
//     if (req.session.logged_out) {
//         res.redirect('/');
//         return;
//     }

//     res.render('logout');
// });


//export router
module.exports = router;

//complete