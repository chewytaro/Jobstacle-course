// import models
const Job = require('./Job');
const User = require('./User');
const Tag = require('./Tag');
const JobTag = require('./JobTag');
const Review = require('./Review');

Job.belongsTo(User,{
    foreignKey: 'user_id',
  });

User.hasMany(Job, {
    foreignKey: 'user_id',
  });

User.hasMany(Review, {
  foreignKey: 'user_id',
});  

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

Review.belongsTo(Job, {
  foreignKey: 'job_id',
});

Job.belongsToMany(Tag, { through: JobTag });

Tag.belongsToMany(Job, { through: JobTag});

module.exports = {
    Job,
    User,
    Tag,
    JobTag,
    Review
  };