"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="32"
      width="102"
      src="/images/logo.png"
    />
  );
};

export default Logo;
