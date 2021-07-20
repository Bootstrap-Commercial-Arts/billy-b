import React from "react";
import Link from "next/link";

const MenuItems = () => {
  return (
    <ul>
      <Link href="/">
        <li className="py-2">Home</li>
      </Link>
      <Link href="/lyrics">
        <li className="py-2">Lyrics</li>
      </Link>
      <Link href="/teacherguide">
        <li className="py-2">Teacher Guide</li>
      </Link>
      <Link href="/contact">
        <li className="py-2">Contact</li>
      </Link>
      <Link href="/about">
        <li className="py-2">About</li>
      </Link>
    </ul>
  );
};

export default MenuItems;
