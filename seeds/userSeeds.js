const { User } = require('../models');

const userData = [
  {
    "user_id": 1,
    "username": "johnsmith",
    "password": "password123",
  },
  {
    "user_id": 2,
    "username": "janedoe",
    "password": "mypassword",
  },
  {
    "user_id": 3,
    "username": "bobross",
    "password": "happytrees",
  },
  {
    "user_id": 4,
    "username": "sarahlee",
    "password": "pastrychef",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

