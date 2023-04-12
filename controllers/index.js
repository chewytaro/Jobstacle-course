const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const welcomeRoutes = require('./welcome');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// Welcome route
router.use('/welcome', welcomeRoutes);

module.exports = router;
