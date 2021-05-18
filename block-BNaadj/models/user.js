let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: Number,
  address: String,
  bio: String,
  hobbies: [String],
});

let User = mongoose.model('user', userSchema);

module.exports = User;
