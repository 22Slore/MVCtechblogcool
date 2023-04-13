const router = require('express').Router();
const { User } = require('../../models');

//root post req

//create a user
router.post('/', async (req, res) => {
    try {
        //usersdata as const
        const usersdata = await User.create(req.body);
        //save user id
        req.session.save(() => {
            req.session.user_id = usersdata.id;
            req.session.logged_in = true;

            res.status(200).json(usersdata);
        });
        //catch any errors and res
    } catch (err) {
        console.log("error")
        res.status(400).json(err);
    }
});

//login post req
router.post('/login', async (req, res) => {
    console.log(req.body.email, "email")
    console.log(req.body, 'line 28')
    try {
        //find user who matches with an email
        const usersdata = await User.findOne({
            where:
                { email: req.body.email }
        });
        console.log(usersdata, "usersdata")
        if (!usersdata) {
            res
                .status(400)
                .json({ message: 'wrong email or password' });
            return;
        }

        //verify the pw
        const validPassword = usersdata.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'wrong email or password' });
            return;
        }

        //make session variables from user
        //login
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = usersdata.id;


            res.json({ user: usersdata, message: 'your logged in' });
        });

    } catch (err) {
        res.status(400).json(err);
        console.log("error")
    }
});



//logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        //removes session var
        req.session.destroy(() => {
            res.status(204).end();
            console.log("logged out")
        });
    } else {
        console.log("logged out error")
        res.status(404).end();
    }
});

//export
module.exports = router;

//complete