function ChannelHeader(props) {
  return (
    <div className="relative w-full h-80 bg-gray-400 rounded-md">
      <img
        className="block w-full h-full object-cover object-center opacity-50"
        src={props.banner}
        alt="Channel banner"
      />
      <div className="absolute top-0 left-0 w-4/5 h-full flex items-center justify-center">
        <div className="bg-gray-300 bg-opacity-10 flex items-center rounded-md overflow-auto">
          <img
            className="h-44 object-contain object-center rounded-r-md"
            src={props.image}
            alt="Profile Img"
          />
          <div className="p-3">
            <h1 className="text-6xl italic font-bold ">{props.title}</h1>
            <h3 className="font-medium p-3">{props.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChannelHeader;
