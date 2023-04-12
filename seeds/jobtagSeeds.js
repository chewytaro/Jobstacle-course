const { JobTag } = require('../models');

const jobTagData = [
    {
      job_id: 1,
      tag_id: 3,
    },
    {
      job_id: 2,
      tag_id: 5,
    },
    {
      job_id: 3,
      tag_id: 4,
    },
    {
      job_id: 5,
      tag_id: 2,
    },
    {
    job_id: 4,
    tag_id: 1,
    },
  ];
  
  const seedJobTags = () => JobTag.bulkCreate(jobTagData);
  
  module.exports = seedJobTags;