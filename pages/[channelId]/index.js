import ChannelPage from "../../components/channel-page/channel-page";

function ChannelDesc() {
  return (
    <div>
      <ChannelPage />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          channelId: "ch1",
        },
      },
      {
        params: {
          channelId: "ch2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data from a channel

  const channelId = context.params.channelId;
  console.log(channelId);

  return {
    props: {
      channels: {
        channelBanner: "",
        altChannelBanner: "Alt Channel banner",
        channelProfileImg: "",
        altProfileImg: "Alt profile Img",
        channelTitle: "All About Cats",
        channelDesc: "This is a channel to talk about cats",
        myProfileImg: "",
        myAltProfileImg: "My profile pic",
        myUserName: "Mzterdox",
        profileImg: "",
        userAltProfileImg: "your profile pic",
        userName: "your username",
        oldComment: "this will be your comment",
      },
    },
  };
}
export default ChannelDesc;
