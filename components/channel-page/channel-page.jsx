import { Container } from "postcss";

function ChannelPage(props) {
  return (
    <container>
      <div className="w-auto h-40">
        <img src={props.bannerImage} alt={props.bannerAlt} />
      </div>
    </container>
  );
}

export default ChannelPage;
