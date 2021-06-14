import { useRef } from "react";

function NewUser(props) {
  const emailInputRef = useRef();
  const imageInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      email: enteredEmail,
      image: enteredImage,
      username: enteredUsername,
      password: enteredPassword,
    };
    props.onAddUser(userData);
  }

  return (
    <div className="flex justify-center  bg-blue-100 mt-52 w-2/3 mx-auto rounded-lg p-4 ">
      <form onSubmit={submitHandler}>
        <div className="p-2">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            required
            id="email"
            ref={emailInputRef}
            className="rounded"
          />
        </div>
        <div className="p-2">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            required
            id="username"
            ref={usernameInputRef}
            className="rounded"
          />
        </div>
        <div className="p-2">
          <label htmlFor="description">Password </label>

          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            className="rounded p-1"
          ></input>
        </div>
        <div className="p-2">
          <label htmlFor="image">Profile Image URL </label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="rounded"
          />
        </div>
        <div className="p-2">
          <button className="bg-gray-300 w-full " type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
