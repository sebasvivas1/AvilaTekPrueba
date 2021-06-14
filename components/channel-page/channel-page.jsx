import ChannelHeader from "../channel-page/channel-header";
import Comment from "../channel-page/comment";
import OldComment from "../channel-page/old-comments";

function ChannelPage(props) {
  return (
    <div>
      <ChannelHeader
        banner={props.banner}
        image={props.image}
        title={props.title}
        description={props.description}
      />
      <Comment />

      <OldComment oldComment={props.comments} />
    </div>
  );
}

export default ChannelPage;
