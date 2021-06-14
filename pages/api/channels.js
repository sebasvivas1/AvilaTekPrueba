import connectDB from "../../middleware/mongodb";
import Channel from "../../models/channels";

const handler = async (req, res) => {
  const channels = await Channel.find({});
  return res.json({ channels });
};

export default connectDB(handler);
