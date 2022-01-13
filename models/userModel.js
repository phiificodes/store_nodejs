const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: "first name is required" },
    last_name: { type: String, required: "last name is required" },
    school: String,
    date0fBirth: Date,
  },
  { timeStamp: true }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
