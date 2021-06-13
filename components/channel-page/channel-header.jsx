function ChannelHeader(props) {
  return (
    <div className="relative w-full h-80 bg-gray-400 rounded-md">
      <img
        className="block w-full h-full object-cover object-center"
        src={props.channelBanner}
        alt="Channel banner"
      />
      <div className="absolute top-0 left-0 w-4/5 h-full flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-40 flex items-center rounded-md overflow-auto">
          <img
            className="h-44 object-contain object-center rounded-r-md"
            src={props.channelProfileImg}
            alt="Profile Img"
          />
          <div className="p-3">
            <h1 className="text-4xl italic semibold">All About Cats</h1>
            <h3>
              Channel Description askdjdhf;askdfjka aksljddfh ashdkfljhaskjdf
              kjhflkwjehf kjahsl
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChannelHeader;
