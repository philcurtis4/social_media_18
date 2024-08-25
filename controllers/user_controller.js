const {User, Thought} = require('../models');

module.exports = {
	async getAllUsers (req, res) {
		const users = await User.find();

		res.json(users);
	},

	async getSingleUser (req, res) {
		
		const user = await User.findById(req.params.id).populate('thoughts');
		
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

	async updateUser (req, res) {
		const user = await User.findById(req.params.id);

		user.username = req.body.username;

		const updatedUser = await user.save();

		res.json({
			user
		})
	},

	async deleteUser (req, res) {
	
		await User.deleteOne({_id: req.params.id});

		res.json({
			message: 'User deleted successfully'
		})
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
		
		const updatedUser = await User.findByIdAndUpdate(
			req.body.userId,
			{$push: {thoughts: newThought._id}},
			{new: true},
		)
		
		res.json({
			message: 'Successfully create a thought!',
			thought: newThought,
		})
	},

	async updateThought (req, res) {
		const thought = await Thought.findById(req.params.id);

		thought.thoughtText = req.body.thoughtText;

		await thought.save();

		res.json({
			message: 'Thought updateded successfully'
		})

	},

	async deleteThought (req, res) {
		await Thought.deleteOne({_id: req.params.id});

		res.json({
			message: 'Thought deleted successfully'
		})
	}
}