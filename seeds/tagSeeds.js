const { Tag } = require('../models');

const tagData = [
    {
        name: "Front-End"
      },
      {
        name: "Back-End"
      },
      {
        name: "Fullstack"
      },
      {
        name: "Junior Dev."
      },
      {
        name: "Javascript"
      }
]

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;