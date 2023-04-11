const router = require('express').Router();
const { Job, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all jobs and JOIN with user data
        const jobData = await Job.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const jobs = jobData.map((job) => job.get({ plain: true }));

        res.render('welcome', {
            jobs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/newjob', withAuth, (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('newjob', {
        logged_in: req.session.logged_in
    });
});

module.exports = router;