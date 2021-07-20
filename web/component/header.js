import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/image/logo.png";
import PlayButtonIcon from "./ui/playbutton";
import ShoppingCartIcon from "./ui/shoppingcart";
import HamburgerIcon from "./ui/hamburger";
import MenuIcon from "./menu";
import MenuItems from "./ui/menuitems";

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
          <Link href="/store">
            <a href="/store">
              <PlayButtonIcon />
            </a>
          </Link>
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
          {/* <button
            onClick={menuToggleHandler}
            className="absolute right-0 mr-8 -mt-8 lg:hidden"
          >
            <HamburgerIcon />
          </button> */}
        </div>
      </div>
      <MenuIcon>
        <MenuItems />
      </MenuIcon>
    </>
  );
};

export default Header;
