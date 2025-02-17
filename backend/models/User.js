const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: String },
  createdAt: { type: Date, default: Date.now },
  skillsHave: {
    type: [String],
    validate: [skillLimit, "You can list up to 3 skills you have."],
  },
  skillsWant: {
    type: [String],
    validate: [skillLimit, "You can list up to 3 skills you want to learn."],
  },
});

function skillLimit(val) {
  return val.length <= 3;
}

module.exports = mongoose.model("User", UserSchema);
