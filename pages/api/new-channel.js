import connectDB from "../../middleware/mongodb";
import Channel from "../../models/channels";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, description, image, banner } = req.body;
    if (title && description && banner && image) {
      try {
        var channel = new Channel({
          title,
          description,
          image,
          banner,
        });
        var channelcreated = await channel.save();
        return res.status(200).send(channelcreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
