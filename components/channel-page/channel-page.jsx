import ChannelHeader from "../channel-page/channel-header";
import Comment from "../channel-page/comment";
import OldComment from "../channel-page/old-comments";

function ChannelPage(props) {
  return (
    <div>
      <ChannelHeader
        banner={props.banner}
        altChannelBanner="Alt banner"
        image={props.image}
        altChannelProfileImg="Alt profile pic"
        title={props.title}
        description={props.description}
      />
      <Comment />

      <OldComment oldComment={props.comments} />
    </div>
  );
}

export default ChannelPage;
