import React from "react";
import spinner from './spinner.gif'
const Loader = (props: any) => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
};

export default Loader;
