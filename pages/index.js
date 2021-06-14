import ChannelList from "../components/channel-page/channelList";
import { useEffect, useState } from "react";

function Home() {
  const [loadedChannels, setLoadedChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const response = await fetch("api/channels");
      const data = await response.json();
      setLoadedChannels(data.channels);
      return data;
    };
    fetchChannels();
  }, []);

  return (
    <div>
      <ChannelList channels={loadedChannels} />
    </div>
  );
}

export default Home;
