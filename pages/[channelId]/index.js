import ChannelPage from "../../components/channel-page/channel-page";
import Comment from "../../components/channel-page/comment";
import OldComments from "../../components/channel-page/old-comments";
import { MongoClient, ObjectId } from "mongodb";

export function ChannelDesc(props) {
  return (
    <div>
      <ChannelPage
        title={props.channelsData.title}
        image={props.channelsData.image}
        banner={props.channelsData.banner}
        description={props.channelsData.description}
      />
      {/* <Comment /> */}

      <OldComments oldComment={props.channelsData.comments} />
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://sebasvivas:tApTBTtgua826iEm@cluster0.ykleq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const channelsCollection = db.collection("channels");
  const channels = await channelsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: channels.map((channel) => ({
      params: { channelId: channel._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data from a channel

  const channelId = context.params.channelId;

  const client = await MongoClient.connect(
    "mongodb+srv://sebasvivas:tApTBTtgua826iEm@cluster0.ykleq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();

  const channelsCollection = db.collection("channels");
  const selectedChannel = await channelsCollection.findOne({
    _id: ObjectId(channelId),
  });

  client.close();

  return {
    props: {
      channelsData: {
        id: selectedChannel._id.toString(),
        title: selectedChannel.title,
        description: selectedChannel.description,
        image: selectedChannel.image,
        banner: selectedChannel.banner,
        // comments: selectedChannel.comments,
      },
    },
  };
}
export default ChannelDesc;
