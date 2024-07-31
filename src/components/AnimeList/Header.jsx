import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex py-6 justify-between items-center">
      <h1 className="underline font-semibold decoration-[#3ABEF9] decoration-5 hover:decoration-2 px-2 text-2xl ">{title}</h1>
      {linkHref && linkTitle ? <Link href={linkHref}>{linkTitle}</Link> : null}
    </div>
  );
};

export default Header;
