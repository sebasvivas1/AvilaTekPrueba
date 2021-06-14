import ChannelCards from "../channel-cards/channel-cards";

function ChannelList(props) {
  return (
    <div>
      {props.channels.map((channel) => {
        return (
          <ChannelCards
            id={channel._id.toString()}
            channelBanner={channel.banner}
            channelProfileImg={channel.image}
            imageUrl={channel.banner}
            channelTitle={channel.title}
            channelDesc={channel.description}
            channelComments={channel.comments}
          />
        );
      })}
      ;
    </div>
  );
}

export default ChannelList;
