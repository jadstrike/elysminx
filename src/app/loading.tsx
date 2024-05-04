import React from "react";
import { ClimbingBoxLoader, RingLoader, RiseLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <ClimbingBoxLoader color="#4B5563" size={20} />
      <p>Loading....</p>
    </div>
  );
};

export default loading;
