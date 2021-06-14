import NewChannelForm from "../../components/create-channel/NewChannelForm";

function NewChannelPage() {
  async function addChannelHandler(enteredChannelData) {
    try {
      const response = await fetch("api/new-channel", {
        method: "POST",
        body: JSON.stringify(enteredChannelData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return <NewChannelForm onAddChannel={addChannelHandler} />;
}

export default NewChannelPage;
