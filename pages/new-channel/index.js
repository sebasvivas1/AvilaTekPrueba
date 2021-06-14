import { useRouter } from "next/router";
import NewChannelForm from "../../components/create-channel/NewChannelForm";

function NewChannelPage() {
  const router = useRouter();
  async function addChannelHandler(enteredChannelData) {
    const response = await fetch("api/new-channel", {
      method: "POST",
      body: JSON.stringify(enteredChannelData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.replace("/");
  }

  return <NewChannelForm onAddChannel={addChannelHandler} />;
}

export default NewChannelPage;
