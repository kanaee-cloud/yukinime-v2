import Link from "next/link";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const HeaderMenu = ({ title, from, href, next }) => {
  return (
    <div className="mb-10 p-2 flex justify-between items-center">
      <div>
        <Link href='/' className="flex gap-2 items-center transition-all hover:gap-5 hover:text-color-accent  relative">
          <MdNavigateBefore size={30}/>
          <h1 className="text-xs lg:text-md">Back</h1>
        </Link>   
      </div> 
      <div className="text-center">
        <h1 className="font-semibold text-color-accent text-sm lg:text-2xl">{title}</h1>
        <p className="text-sm opacity-30">{from}</p>
      </div>
      <div>
        <Link href={href} className="flex gap-2 items-center transition-all hover:gap-5 hover:text-color-accent  relative">
          <h1 className="text-xs lg:text-md">{next}</h1>
          <MdNavigateNext size={30}/>
        </Link>   
      </div> 
    </div>
  );
};

export default HeaderMenu;
