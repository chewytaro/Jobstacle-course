const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    // If user is already logged in, this redirects them to the welcome page
    if (req.session.logged_in) {
      res.redirect('/welcome');
      return;
    }
  
    res.render('login');
});