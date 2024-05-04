import React from "react";
import { ClimbingBoxLoader, RingLoader, RiseLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <RingLoader color="#FC4100" />
    </div>
  );
};

export default loading;
