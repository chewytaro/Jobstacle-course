const { Job } = require('../models');

const jobData = [
    {
		"id": 1,
		"title": "Front-end Developer",
		"description": "Design and develop user-friendly web applications using HTML, CSS, and JavaScript.",
		"salary": 100000,
		"status": "Accepted",
		"user_id": 1,
	},
	{
		"id": 2,
		"title": "Marketing Manager",
		"description": "Develop and implement marketing strategies to promote the company's products and services.",
		"salary": 120000,
		"status": "2nd Interview",
		"user_id": 2,
	},
	{
		"id": 3,
		"title": "Data Scientist",
		"description": "Analyze and interpret complex data sets to identify trends and insights that can be used to improve business operations.",
		"salary": 90000,
		"status": "Accepted",
		"user_id": 1,
	},
	{
		"id": 4,
		"title": "Graphic Designer",
		"description": "Create visual concepts using software or by hand to communicate ideas that inspire, inform, and captivate consumers.",
		"salary": 80000,
		"status": "Applied",
		"user_id": 3,
	},
	{
		"id": 5,
		"title": "IT Support Specialist",
		"description": "Provide technical assistance to computer system users, troubleshoot issues, and install software and hardware.",
		"salary": 60000,
		"status": "Reviewed",
		"user_id": 4,
	}
]

const seedJobs = () => Job.bulkCreate(jobData);

module.exports = seedJobs;