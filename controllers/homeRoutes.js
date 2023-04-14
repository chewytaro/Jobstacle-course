const router = require('express').Router();
const { Job, User, Review, Tag, JobTag } = require('../models');
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

router.get('/editJob/:id', withAuth, async (req, res) => {
    try {
        const jobData = await Job.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['title', 'description', 'salary', 'status'],
            include: [
                {
                    model: Tag,
                    attributes: ['name'],
                    through: JobTag,
                    as: 'tags'
                },
            ],
        });
        if (!jobData) {
            res.status(404).json({ message: 'No job found with this id' });
            return;
        }
        const job = jobData.get({ plain: true });
        const tagsData = await Tag.findAll();
        const tags = tagsData.map(tag => tag.get({ plain: true }));
        console.log(job);
        res.render('editJob', {
            job,
            tags,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;