const { Review } = require('../models');

const reviewData = [
    {
		"id": 1,
		"content": "Great company culture and opportunities for growth, but demanding workload.",
		"user_id": 1,
		"job_id": 2,
	},
	{
		"id": 2,
		"content": "Flexible hours and remote work option, but lower pay than industry average.",
		"user_id": 2,
		"job_id": 3,
	},
	{
		"id": 3,
		"content": "Collaborative team environment, but outdated technology stack.",
		"user_id": 1,
		"job_id": 4,
	},
	{
		"id": 4,
		"content": "Challenging projects and high salary, but limited work-life balance.",
		"user_id": 2,
		"job_id": 5,
	},
	{
		"id": 5,
		"content": "Fast-paced and dynamic work environment, but lack of clear direction from management.",
		"user_id": 3,
		"job_id": 1,
	}
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;