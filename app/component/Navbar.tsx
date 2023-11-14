import { AlignJustify, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/util";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between border-b lg:px-24 py-2 p-4">
        <Link href='/'>
        <Image src={"/image/logo.png"} width={70} height={20} alt="logo" />
        </Link>

        <div
          className={`flex overflow-hidden lg:flex-row flex-col lg:static bg-white absolute top-[55px] left-0 w-screen lg:w-auto lg:space-y-0 px-4 ${
            openMenu ? "h-[900px] py-4" : "h-0"
          } lg:h-auto lg:space-x-8 transition-all ease-in-out duration-200`}
        >
            {
                links.map((link, index) => (
                    <Link href={link.linkto} className={`uppercase p-2 hover:text-primary ${currentPath === link.linkto && 'lg:text-primary bg-primary lg:font-extrabold lg:bg-transparent text-white'}`} key={index}>{link.title}</Link>
                ))
            }
          
        </div>

        <div className="flex items-center space-x-2" onClick={toggleMenu}>
          <Link href={"/contact"} className="bg-primary text-white p-2 rounded">
            Contact
          </Link>
          <div className="cursor-pointer lg:hidden p-2 rounded-full bg-white text-primary">
            {openMenu ? <X size={16} /> : <AlignJustify size={16} />}
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
