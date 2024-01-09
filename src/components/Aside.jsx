"use client";
import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaHouse,
  FaCode,
  FaNewspaper,
  FaPassport,
  FaBoltLightning,
  FaMusic,
} from "react-icons/fa6";
const Menus = [
  {
    name: "Home",
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
    name: "Music",
    link: "/category/music",
    icon: <FaMusic />,
  },
  {
    name: "Developers",
    link: "https://github.com/yayandev",
    icon: <FaGithub />,
  },
];

const Aside = () => {
  return (
    <div className="md:block hidden w-max md:w-64 h-screen border-r p-3 space-y-5 sticky left-0 top-0">
      <Link href={"/"} className="flex gap-3 items-center">
        <img src="/logo1.png" width={50} alt="" />
        <span className="font-bold text-xl md:block hidden">Youtube</span>
      </Link>

      <div className="w-full flex flex-col gap-3 items-center md:items-start">
        {Menus.map((menu, i) => (
          <Link
            key={i}
            href={menu.link}
            className="p-2 flex gap-3 items-center font-semibold text-lg rounded-md"
          >
            <span>{menu.icon}</span>{" "}
            <span className="md:block hidden">{menu.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Aside;
