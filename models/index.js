// import models
const Job = require('./Job');
const User = require('./User');
const Tag = require('./Tag');
const JobTag = require('./JobTag');

// Jobs belongsTo Category
Job.belongsTo(User,{
    foreignKey: 'job_id',
  });
  // Users have many Products
  User.hasMany(Job, {
    foreignKey: 'job_id',
  });

Job.belongsToMany(Tag, { through: JobTag });

Tag.belongsToMany(Job, { through: JobTag});

module.exports = {
    Job,
    User,
    Tag,
    JobTag,
  };