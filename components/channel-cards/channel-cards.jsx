function ChannelCards(props) {
  return (
    <container className="p-10 inline-block mx-auto">
      <div className="bg-gray-200 rounded overflow-hidden w-60 h-auto shadow-md">
        <img src={props.imageUrl} alt={props.imageAlt} />
        <div className="p-3">
          <h3>{props.channelTitle}</h3>
          <div>Channel Description: {props.channelDesc}</div>
          <div>{props.channelComments} comments.</div>
          <button className="bg-gray-400 p-2 rounded-md font-semibold hover:bg-gray-300">
            See more
          </button>
        </div>
      </div>
    </container>
  );
}
export default ChannelCards;
