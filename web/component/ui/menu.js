import React from "react";

const Menu = () => {
  return (
    <div>
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
    </div>
  );
};

export default Menu;
