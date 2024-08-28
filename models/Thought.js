const { model, Schema, Types } = require('mongoose');


const reactionSchema = new Schema({
	reactionId: {
		type: Schema.Types.ObjectId,
		default: () => new Types.ObjectId()
	},
	reactionBody: {
		type: String,
		required: true,
		maxlength: 280,
	},
	username: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (createdAt) => {
			return new Date(createdAt).toDateString();
		}
	}
}, {
	_id: false
});



const thoughtSchema = new Schema ({
	thoughtText: {
		type: String,
		required: true,
		maxlength: 280,
		minlength: 1,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: function (timestamp) {
			return new Date(timestamp).toLocaleString();
		}
	},
	username: {
		type: String,
		required: true
	},
	reactions: [reactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function() {
	this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;