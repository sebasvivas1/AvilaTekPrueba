import mongoose from "mongoose";
var Schema = mongoose.Schema;

var comment = new Schema({
  // author: {
  //   type: String,
  //   required: true,
  // },
  // profileImg: {
  //   type: String,
  //   required: true,
  // },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
mongoose.models = {};
var Channel = mongoose.model("Channel", channel);

export default Channel;
