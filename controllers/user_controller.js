const {User, Thought} = require('../models');

module.exports = {
	async getAllUsers (req, res) {
		const users = await User.find();

		res.json(users);
	},

	async getSingleUser (req, res) {
		
		const user = await User.findById(req.params.id);
		
		res.json(user);
	},

	async createUser (req, res) {
		
		const newUser = await User.create({
			email: req.body.email,
			username: req.body.username,
		});

		res.json({
			message: 'New user added successfully',
			user: newUser
		});
	},

	async getAllThoughts (req, res) {
		const thoughts = await Thought.find();

		res.json(thoughts);
	},

	async getSingleThought (req, res) {
		const thought = await Thought.findById(req.params.id);

		res.json(thought);
	},

	async createThought (req, res) {
		const newThought = await Thought.create({
			thoughtText: req.body.thoughtText,
			username: req.body.username,
		});

		res.json({
			message: 'Successfully create a thought!',
			thought: newThought,
		})
	}
}