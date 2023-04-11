const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('welcome', { name: req.session.username });
});

module.exports = router;
