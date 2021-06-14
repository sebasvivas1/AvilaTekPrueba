import mongoose from "mongoose";
var Schema = mongoose.Schema;

var channel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
});
mongoose.models = {};
var Channel = mongoose.model("Channel", channel);

export default Channel;
