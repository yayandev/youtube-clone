import Link from "next/link";
import React from "react";
import { FaGithub, FaHouse } from "react-icons/fa6";
const Menus = [
  {
    name: "Home",
    link: "/",
    icon: <FaHouse />,
  },
  {
    name: "Developers",
    link: "https://github.com/yayandev",
    icon: <FaGithub />,
  },
];

const NavBottom = () => {
  return (
    <nav className="w-full p-3 md:hidden shadow border-t fixed bottom-0 bg-white z-20 flex gap-3 items-center justify-around">
      {Menus.map((menu, i) => (
        <Link
          key={i}
          href={menu.link}
          className="p-2 flex gap-3 items-center font-semibold text-lg rounded-md"
        >
          <span>{menu.icon}</span> <span className="">{menu.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBottom;
