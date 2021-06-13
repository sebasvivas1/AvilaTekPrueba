import ChannelHeader from "../channel-page/channel-header";
import Comment from "../channel-page/comment";
import OldComment from "../channel-page/old-comments";

function ChannelPage(props) {
  return (
    <div>
      <ChannelHeader
        channelBanner="https://image.shutterstock.com/image-photo/banner-kittens-cats-background-animals-260nw-731395711.jpg"
        altChannelBanner="Cats banner"
        channelProfileImg="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
        altChannelProfileImg="Cats profile pic"
        channelTitle="All About Cats"
        channelDesc="This channel is all about cats! Here you can talk about anything you want cat related."
      />
      <br />
      <br />
      <Comment
        profileImg="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
        altProfileImg="Alt profile pic"
        userName="Mzterdox"
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
