import connectDB from "../../middleware/mongodb";
import User from "../../models/users";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password, username, image } = req.body;
    if (email && password && username && image) {
      try {
        var user = new User({
          email,
          password,
          username,
          image,
        });
        var usercreated = await user.save();
        return res.status(200).send(usercreated);
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
