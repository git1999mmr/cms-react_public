const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
      type: String
    },
    name: {
      type: String
    }
  },
  {
    collection: 'tasks'
  }
);
module.exports = mongoose.model('tasks', userSchema);
