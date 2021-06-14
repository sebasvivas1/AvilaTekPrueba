import ChannelHeader from "../channel-page/channel-header";
import Comment from "../channel-page/comment";
import OldComment from "../channel-page/old-comments";

function ChannelPage(props) {
  return (
    <div>
      <ChannelHeader
        channelBanner={props.channelBanner}
        altChannelBanner="Alt banner"
        channelProfileImg={props.channelProfileImg}
        altChannelProfileImg="Alt profile pic"
        channelTitle={props.title}
        channelDesc={props.channelDesc}
      />
      <br />
      <br />
      <Comment
        myProfileImg="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
        myAltProfileImg="Alt profile pic"
        myUserName="Mzterdox"
      />
      <br />
      <br />
      <OldComment
        profileImg="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
        altProfileImg="Alt profile pic"
        userName="DanielVillegas123"
        commentDate="02-02-2021"
        oldComment="I like cats"
      />
      <br />
      <br />
    </div>
  );
}

export default ChannelPage;
