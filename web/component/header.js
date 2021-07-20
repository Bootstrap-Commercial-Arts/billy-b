import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/image/logo.png";
import PlayButtonIcon from "./ui/playbutton";
import ShoppingCartIcon from "./ui/shoppingcart";
import HamburgerIcon from "./ui/hamburger";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuToggleHandler = (e) => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex flex-row bg-lightblue">
        <div className="bg-darkblue flex-1 pl-4 pt-2">
          <Image src={Logo} width={72} height={72} />
        </div>
        <div className="flex-1 pl-2">
          {/* <PlayButtonIcon />
          <span className="uppercase">videos</span> */}
          <PlayButtonIcon />
          <button className="uppercase mt-1 border-white px-2  border-2 text-white">
            videos
          </button>
        </div>
        <div className=" flex-1">
          {/* <ShoppingCartIcon />
          <span className="uppercase">store</span> */}
          <ShoppingCartIcon />
          <button className="uppercase  mt-1 border-white px-2 border-2 text-white">
            store
          </button>
        </div>
        <div className="bg-darkblue flex-1">
          <button
            onClick={menuToggleHandler}
            className="absolute right-0 mr-8 -mt-8 lg:hidden"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>
      <ul
        className={`
            flex flex-col w-4/5 ml-auto mr-auto text-center mt-4 lg:flex lg:flex-row lg:absolute lg:w-2/3 lg:right-0 lg:justify-around lg:mr-14 lg: -mt-8
            lg:flex ${open ? "block" : "hidden"}
          `}
      >
        <li>Home</li>
        <li>Lyrics</li>
        <li>Teacher Guide</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </>
  );
};

export default Header;
