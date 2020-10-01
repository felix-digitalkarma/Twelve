const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  shared: {
    type: Date,
    default: Date.now
  }
});

module.exports = Story = mongoose.model('story', StorySchema);