const router = require('express').Router();
const { Job, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('welcome');
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