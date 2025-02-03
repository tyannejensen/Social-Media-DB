// ...existing code...
const { Schema, model, Types } = require('mongoose');

// Example Reaction subdocument:
const ReactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

// Thought references User for population:
const ThoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
// ...existing code...