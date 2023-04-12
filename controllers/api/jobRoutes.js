const router = require('express').Router();
const { Job, Tag, User, JobTag } = require('../../models');
const withAuth = require('../../utils/auth');
// Get all jobs
router.get('/', withAuth, async (req, res) => {
  try {
    const jobsData = await Job.findAll({
      include: [
        {
          model: Tag,
          attributes: ['name'],
          through: JobTag,
          as: 'tags'
        },
        {
          model: User,
          attributes: ['username'],
        }
      ]
    });
    const jobs = jobsData.map((job) => job.get({ plain: true }));
    res.render('alljobs', {
      jobs,
      logged_in: req.session.logged_in
    });
    // res.status(200).json(jobsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get a job by id
router.get('/:id', withAuth, async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Tag,
          attributes: ['name'],
          through: JobTag,
          as: 'tags'
        },
        {
          model: User,
          attributes: ['username'],
        }
      ]
    });
    if (!jobData) {
      res.status(404).json({ message: 'No job found with this id' });
      return;
    }
    const job = jobData.get({ plain: true });
    console.log(job);
    res.render('singleJob', {
      ...job,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
});
// Create a new job (with authentication)
router.post('/', withAuth, async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Update a job by id (with authentication)
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedJob = await Job.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedJob[0]) {
      res.status(404).json({ message: 'No job found with this id' });
      return;
    }
    res.status(200).json(updatedJob);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Delete a job by id (with authentication)
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedJob = await Job.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedJob) {
      res.status(404).json({ message: 'No job found with this id' });
      return;
    }
    res.status(200).json(deletedJob);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;