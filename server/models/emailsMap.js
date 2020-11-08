const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const emailSchema = new Schema({
  emails: {
    type: Map,
    of: String,
    default: {}
  }
});
const emailsMap = mongoose.model("Email", emailSchema);
module.exports = emailsMap;
