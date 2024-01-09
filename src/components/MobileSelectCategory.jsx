"use client";
import React from "react";
import Link from "next/link";
import {
  FaCode,
  FaNewspaper,
  FaPassport,
  FaBoltLightning,
  FaHouse,
  FaMusic,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
const Menus = [
  {
    name: "Foryou",
    link: "/",
    icon: <FaHouse />,
  },
  {
    name: "Coding",
    link: "/category/coding",
    icon: <FaCode />,
  },
  {
    name: "News",
    link: "/category/news",
    icon: <FaNewspaper />,
  },
  {
    name: "Sports",
    link: "/category/sports",
    icon: <FaPassport />,
  },
  {
    name: "Disaster",
    link: "/category/disaster",
    icon: <FaBoltLightning />,
  },
  {
    name: "Entertainment",
    link: "/category/entertainment",
    icon: <FaHouse />,
  },
  {
    name: "Music",
    link: "/category/music",
    icon: <FaMusic />,
  },
];
const MobileSelectCategory = () => {
  const pathname = usePathname();
  return (
    <div className="w-full my-3 md:hidden flex gap-2 p-3 overflow-x-auto">
      {Menus.map((menu, i) => (
        <Link
          key={i}
          href={menu.link}
          className={`p-2 flex gap-3 items-center font-semibold text-sm rounded-md border hover:bg-gray-100 ${
            pathname === menu.link ? "bg-gray-100" : ""
          }`}
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileSelectCategory;
