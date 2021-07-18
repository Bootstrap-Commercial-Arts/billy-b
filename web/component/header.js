import React from "react";
import Image from "next/image";
import Logo from "../public/image/logo.png";
import PlayButtonIcon from "./ui/playbutton";
import ShoppingCartIcon from "./ui/shoppingcart";
import HamburgerIcon from "./ui/hamburger";

const Header = () => {
  return (
    <div className="flex flex-row flex-1 width-full">
      <div className="bg-darkblue">
        <Image src={Logo} width={72} height={72} />
      </div>
      <ul className="flex flex-row bg-lightblue">
        <li>
          <PlayButtonIcon />
          <span className="uppercase">videos</span>
        </li>
        <li>
          <ShoppingCartIcon />
          <span className="uppercase">store</span>
        </li>
        <li className="bg-darkblue">
          <HamburgerIcon />
        </li>
      </ul>
    </div>
  );
};

export default Header;
