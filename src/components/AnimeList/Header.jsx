import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex py-6 justify-between items-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {linkHref && linkTitle ? <Link href={linkHref} className="opacity-70 hover:underline">{linkTitle}</Link> : null}
    </div>
  );
};

export default Header;
