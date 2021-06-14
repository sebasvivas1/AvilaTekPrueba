import Link from "next/link";
function Navbar(props) {
  return (
    <div className="relative w-full bg-custom h-14 ">
      <ul className="flex justify-around ">
        <li className="flex items-center justify-between flex-wrap mt-4 cursor-pointer">
          <Link href="/">
            <img
              className="h-5"
              src="https://image.flaticon.com/icons/png/512/69/69524.png"
              alt="Home image icon"
            />
          </Link>
        </li>

        {/* <li className="flex items-center justify-between flex-wrap mt-4 cursor-pointer">
          <Link href="/new-channel">New Channel</Link>
        </li> */}

        <div className="flex items-center justify-between flex-wrap mt-4 cursor-pointer">
          {/* Esto es la imagen del perfil del usuario y su username */}

          {/* <img
            className="h-7 flex items-center justify-between flex-wrap"
            src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            alt=""
          /> */}
          {/* <p className="px-1 flex items-center justify-between flex-wrap">
            {props.userName}
          </p> */}

          {/* <li className="flex items-center justify-between flex-wrap cursor-pointer">
            <img
              className="h-6 flex items-center justify-between flex-wrap"
              src="https://icons-for-free.com/iconfiles/png/512/logout-1324760598547500271.png"
              alt=""
            />
          </li> */}

          <li className="flex items-center justify-between flex-wrap cursor-pointer">
            <Link href="/auth/register">REGISTER</Link>
            <img
              className="h-6 flex items-center justify-between flex-wrap"
              src="https://svg-clipart.com/clipart/black/28kMjTe-login-icon-clipart.png"
              alt=""
            />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
