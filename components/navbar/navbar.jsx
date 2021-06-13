function Navbar(props) {
  return (
    <div className="relative w-full bg-custom h-14">
      <ul className="flex justify-around ">
        <li>
          <img
            className="h-5"
            src="https://image.flaticon.com/icons/png/512/69/69524.png"
            alt="Home image icon"
          />
        </li>
        <li>Create Post</li>
        <li>New Channel</li>

        <div className="">
          <li>
            <div className="flex">
              <img
                className="h-7"
                src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
                alt=""
              />
              <p className="px-1">{props.userName}</p>

              <li>
                <img
                  className="h-6"
                  src="https://icons-for-free.com/iconfiles/png/512/logout-1324760598547500271.png"
                  alt=""
                />
              </li>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
