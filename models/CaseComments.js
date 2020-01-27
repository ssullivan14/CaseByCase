const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CaseCommentsSchema = new Schema({
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CaseComments = mongoose.model(
  "casecomments",
  CaseCommentsSchema
);
