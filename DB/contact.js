const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  email: { type: String, require: true },
  message: { type: String, require: true },
});
module.exports = mongoose.model("contact", PostSchema);
