const { User } = require('../models');

const userData = [
  {
    username: "johnsmith",
    password: "password123",
  },
  {
    username: "janedoe",
    password: "mypassword",
  },
  {
    username: "bobross",
    password: "happytrees",
  },
  {
    username: "sarahlee",
    password: "pastrychef",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

