import React from "react";

const Child = ({ setIsLoggedIn }) => {
  return (
    <div>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
          if (
            eve.target["userName"].value.length > 0 &&
            eve.target["userPassword"].value.length
          ) {
            setIsLoggedIn((isLoggedIn) => !isLoggedIn);
          }
        }}
      >
        <label htmlFor="userName">User Name</label>
        <input id="userName" type="text" /> <br />
        <label htmlFor="userPassword">User Password</label>
        <input id="userPassword" type="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Child;
