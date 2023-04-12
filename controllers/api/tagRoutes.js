const router = require('express').Router();
const { Tag, Job } = require('../../models');
const withAuth = require('../../utils/auth');

// get all tags
router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [{
          model: Job,
          attributes: ['title'],
        }]
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// get a tag by id
router.get('/:id', async (req, res)=>{
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            include: [{
                model: Job,
                attributes:['title'],
            }]
        })
        if(!tagData){
            res.status(404).json({ message: 'No tag found with this id'});
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// creating a new tag
router.post('/', withAuth, async(req, res) => {
    try{
        const newTag = await Tag.create({
            name: req.body.name,
            job_id: req.body.job_id,
            user_id: req.session.user_id
        });
        res.status(200).json(newTag);
    } catch (err) {
        res.status(400).json(err);
    }
});

// deleting a tag
router.delete('/:id', withAuth, async(req,res) => {
    try {
        const deletedTag = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        })
        if(!deletedTag){
            res.status(404).json({ message: 'No tag found with this id, please try a different id'});
            return;
        }
        res.status(200).json(deletedTag);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;