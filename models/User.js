const { Schema, model } = require('mongoose');

// User schema with references to Thought and User (friends):
const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/.+@.+\..+/, 'Must match an email address!'] },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

// Virtual to get the number of friends:
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);
module.exports = User;