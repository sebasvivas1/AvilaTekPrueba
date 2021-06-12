import ChannelCards from "../components/channel-cards/channel-cards";
import Comment from "../components/channel-page/comment";
import OldComments from "../components/channel-page/old-comments";
import ChannelHeader from "../components/channel-page/channel-header";

export default function Home() {
  return (
    <div>
      {/* <ChannelCards
        imageUrl="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
        imageAlt="Banner del canal"
        channelTitle="Canal Gatuno"
        channelDesc="En este canal se habla de gatos"
        channelComments="12"
      /> */}

      <ChannelHeader />
    </div>
  );
}
