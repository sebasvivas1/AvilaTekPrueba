function Comment(props) {
  return (
    <div className="w-1/2  h-auto flex  bg-gray-100 rounded-lg mx-auto items-center p-5">
      <div className="p-2">
        <img
          className="w-20"
          src={props.myProfileImg}
          alt={props.myAltProfileImg}
        />
        <h5 className="text-xs text-center">{props.myUserName}</h5>
      </div>
      <div className="p-1 mx-1">
        <h4 className="italic">New Comment</h4>
        <div className="bg-gray-200 rounded-lg p-1">
          <textarea
            name="comment"
            id="commentId"
            cols="53"
            rows="3"
            className="rounded-md bg-gray-200 font-light"
          ></textarea>
        </div>
        <div className="bg-gray-200 rounded-md text-center my-2">
          <button className="hover:bg-gray-300 w-full font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
