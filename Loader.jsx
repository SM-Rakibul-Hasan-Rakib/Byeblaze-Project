import React from "react";
import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min">
      <ClockLoader size={100}></ClockLoader>
    </div>
  );
};

export default Loader;
