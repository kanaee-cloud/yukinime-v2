import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle}) => {
  return (
    <div className="flex p-4 justify-between items-center">
      <h1>{title}</h1>
      <Link href={linkHref}>{linkTitle}</Link>
    </div>
  );
};

export default Header;
