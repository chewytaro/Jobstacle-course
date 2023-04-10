const router = require('express').Router();

// Home page route
router.get('/', (req, res) => {
  res.render('login');
});

// User and job routes
const userRoutes = require('./api/userRoutes');
const jobRoutes = require('./api/jobRoutes');
router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);

// Welcome route
const welcomeRoutes = require('./welcome');
router.use('/welcome', welcomeRoutes);

module.exports = router;
