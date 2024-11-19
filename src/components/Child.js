import React from "react";

const Child = ({ setIsLoggedIn }) => {
  // onSubmit={(eve) => {
  //   //   eve.preventDefault();
  //   if (
  //     eve.target["userName"].value.length > 0 &&
  //     eve.target["userPassword"].value.length
  //   ) {

  //   }
  // }}
  return (
    <div>
      <form>
        <label htmlFor="userName">User Name</label>
        <input id="userName" type="text" /> <br />
        <label htmlFor="userPassword">User Password</label>
        <input id="userPassword" type="password" />
        <br />
        <button
          onClick={() => {
            setIsLoggedIn((isLoggedIn) => !isLoggedIn);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Child;
