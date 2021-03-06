function OldComments(props) {
  return (
    <div className="w-1/2  h-auto flex  bg-gray-100 rounded-lg mx-auto items-center">
      <div className="p-2">
        <img
          className="w-20"
          src={props.profileImg}
          alt={props.altProfileImg}
        />
        <h5 className="text-xs text-center font-semibold">{props.userName}</h5>
        <h5 className="text-xs text-center italic">{props.commentDate}</h5>
      </div>
      <div className="p-2 mx-1 w-full">
        <div className="bg-gray-200 rounded-lg p-1 text-md">
          {props.oldComment}
        </div>
      </div>
    </div>
  );
}

export default OldComments;
