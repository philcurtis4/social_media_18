const { model, Schema, mongoose } = require('mongoose');
const { hash, compare } = require('bcrypt');

const Thought  = require('./Thought');
 

const userSchema = new Schema ({
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator(val) {
				//validates that the string the user typed is a valid email string
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(val);
			}
		}
	},
	username: {
		type: String,
		unique: true,
		required: true,
		trimmed: true
		
	},
	thoughts: [
		{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Thought'
		}
],
	// friends: {
	// 	references: [Friend]
	// }
});

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;