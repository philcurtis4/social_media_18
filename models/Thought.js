const { model, Schema } = require('mongoose');

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

userSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model(Thought, thoughtSchema);

module.exports = Thought;