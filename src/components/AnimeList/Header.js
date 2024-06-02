import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex p-4 justify-between items-center">
      <h1>{title}</h1>
      {linkHref && linkTitle ? <Link href={linkHref}>{linkTitle}</Link> : null}
    </div>
  );
};

export default Header;
