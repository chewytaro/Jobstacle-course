const seedJobs = require('./jobSeeds');
const seedUsers = require('./userSeeds');
const seedTags = require('./tagSeeds');
const seedJobTags = require('./jobtagSeeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedJobs();
  console.log('\n----- JOBS SEEDED -----\n');
  
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedJobTags();
  console.log('\n----- JOBTAGS SEEDED -----\n');
  
  process.exit(0);
};

seedAll();