const { model, Schema } = require('mongoose');
const Reaction = require('./Reaction');

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
	reactions: {
		references: [Reaction]
	}
});

thoughtSchema.virtual('reactionCount').get(function() {
	this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;