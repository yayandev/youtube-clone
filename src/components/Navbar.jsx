"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const [q, setQ] = useState("");
  return (
    <nav className="w-full p-2 shadow border-b flex justify-around items-center">
      <form action="/search" className="flex-2 flex gap-2 ">
        <input
          type="search"
          className="w-full p-2 border rounded flex-1"
          placeholder="Search.."
          required
          name="q"
          // value={q}
          defaultValue={useSearchParams().get("q")}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit" className="p-2">
          <BsSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
