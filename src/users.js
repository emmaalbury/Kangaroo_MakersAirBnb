const mongoose = require('mongoose');

  const usersSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String }
  });

module.exports = mongoose.model('users', usersSchema)
