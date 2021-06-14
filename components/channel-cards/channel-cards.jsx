import { useRouter } from "next/router";

function ChannelCards(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <div className="p-10 inline-block">
      <div className="bg-gray-200 rounded overflow-hidden w-60 h-auto shadow-md max-h-86">
        <img src={props.imageUrl} alt={props.channelTitle} />
        <div className="p-3">
          <h3>{props.channelTitle}</h3>
          <div>Channel Description: {props.channelDesc}</div>
          <div>{props.channelComments} comments.</div>
          <button
            className="bg-gray-400 p-2 rounded-md font-semibold hover:bg-gray-300"
            onClick={showDetailsHandler}
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
export default ChannelCards;
