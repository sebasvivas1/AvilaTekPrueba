import ChannelCards from "../channel-cards/channel-cards";

function ChannelList(props) {
  return (
    <div>
      {props.channels.map((channel) => {
        return (
          <ChannelCards
            id={channel.id}
            channelBanner={channel.channelBanner}
            altChannelBanner={channel.altChannelt}
            channelProfileImg={channel.channelProfileImg}
            altChannelProfileImg={channel.altChannelProfileImg}
            imageUrl={channel.channelBanner}
            channelTitle={channel.title}
            channelDesc={channel.channelDesc}
            channelComments={channel.channelComments}
          />
        );
      })}
      ;
    </div>
  );
}

export default ChannelList;
