import { MongoClient } from "mongodb";

import connectDB from "../../middleware/mongodb";
import Channel from "../../models/channels";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const data = req.body;
//       console.log(data);

//       const client = await MongoClient.connect(
//         "mongodb+srv://sebasvivas:YHjPnYW3beZ0Fh4l@cluster0.ykleq.mongodb.net/channels?retryWrites=true&w=majority"
//       );
//       const db = client.db();
//       const channelsCollection = db.collection("channels");
//       const result = await channelsCollection.insertOne(data);
//       console.log(result);
//       client.close();

//       return res.status(201).json({ message: "Channel Created!" });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

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
