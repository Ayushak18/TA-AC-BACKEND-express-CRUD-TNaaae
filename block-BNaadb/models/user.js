let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: String,
    age: Number,
    country: String,
  },
  { timestamps: true }
);

let User = mongoose.model('user', userSchema);

module.exports = User;
