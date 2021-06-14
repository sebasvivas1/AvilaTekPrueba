import { useRef } from "react";

function NewChannelForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const bannerInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredBanner = bannerInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const channelData = {
      title: enteredTitle,
      image: enteredImage,
      banner: enteredBanner,
      description: enteredDescription,
    };
    props.onAddChannel(channelData);
  }

  return (
    <div className="flex justify-center  bg-blue-100 mt-52 w-2/3 mx-auto rounded-lg p-4 ">
      <form onSubmit={submitHandler}>
        <div className="p-2">
          <label htmlFor="title">Channel Title </label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="rounded"
          />
        </div>
        <div className="p-2">
          <label htmlFor="image">Channel's Profile Image </label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="rounded"
          />
        </div>
        <div className="p-2">
          <label htmlFor="banner">Channel's Banner Image </label>
          <input
            type="url"
            required
            id="banner"
            ref={bannerInputRef}
            className="rounded"
          />
        </div>
        <div className="p-2">
          <label htmlFor="description">Channel Description </label>

          <textarea
            id="description"
            required
            rows="2"
            cols="20"
            ref={descriptionInputRef}
            className="rounded p-1"
          ></textarea>
        </div>
        <div className="p-2">
          <button className="bg-gray-300 w-full ">Create Channel</button>
        </div>
      </form>
    </div>
  );
}

export default NewChannelForm;
