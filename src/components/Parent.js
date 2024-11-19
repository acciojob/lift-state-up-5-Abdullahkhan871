import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {!isLoggedIn ? (
        <Child setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <p>You are Logged In!</p>
      )}
    </div>
  );
};

export default Parent;
