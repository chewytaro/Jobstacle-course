const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/tags', tagRoutes);

module.exports = router;