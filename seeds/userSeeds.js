const { User } = require('../models');

const userData = [
    {
    username: "johnsmith",
      password: "password123",
    },
    {
    // id: 2,
      username: "janedoe",
      password: "mypassword",
    //   job_id: 2
    },
    {
    // id: 3,
      username: "bobross",
      password: "happytrees",
    //   job_id: 3
    },
    {
    // id: 4,
      username: "sarahlee",
      password: "pastrychef",
    //   job_id: 4
    }
  ];

  const seedUsers = () => User.bulkCreate(userData);
  module.exports = seedUsers;
