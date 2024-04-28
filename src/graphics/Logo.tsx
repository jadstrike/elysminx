import Image from "next/image";

import React from "react";
const Logo = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="../../public/thumbnail.jpg"
      width={200}
      height={200}
      alt=" Elysminx Logo"
    />
  );
};

export default Logo;
