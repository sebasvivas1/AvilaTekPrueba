import connectDB from "../../middleware/mongodb";
import Comment from "../../models/comments";

const handler = async (req, res) => {
  if (req.method === "UPDATE") {
    const { content, date } = req.body;
    if (content && date) {
      try {
        var comment = new Comment({
          content,
          date,
        });
        var commentCreated = await comment.save();
        return res.status(200).send(commentCreated);
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
