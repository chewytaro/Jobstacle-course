const seedJobs = require('./jobSeeds');
const seedUsers = require('./userSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedJobs();
  console.log('\n----- JOBS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  process.exit(0);
};

seedAll();