const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin: Date,
  },
  { timestamps: {} }
);

module.exports = User = mongoose.model("users", userSchema);
