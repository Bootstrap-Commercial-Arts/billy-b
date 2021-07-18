import React from "react";
import Image from "next/image";
import Logo from "../public/image/logo.png";
import PlayButtonIcon from "./ui/playbutton";
import ShoppingCartIcon from "./ui/shoppingcart";
import HamburgerIcon from "./ui/hamburger";

const Header = () => {
  return (
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
        <HamburgerIcon />
      </div>
    </div>
  );
};

export default Header;
