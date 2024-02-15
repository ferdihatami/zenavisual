import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import navbar_items from "../assets/JsonData/navbar_items.json";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="flex xl:gap-x-[150px] md:gap-x-[20px] justify-between items-center bg-white py-4 px-5 font-[poppins] font-normal text-gray-800">
        <Link href={"/"}>
          <img
            className="cursor-pointer "
            src="/logo/zenavisual.png"
            alt="zenavisual"
            width="230"
            height="50"
          />
        </Link>

        <ul className="lg:flex hidden lg:items-center  bg-white w-auto lg:pl-0 pl-3">
          {navbar_items.map((item, index) => (
            <li key={index} className="mx-2">
              <Link
                href={item.route}
                className="text-gray-800 hover:bg-slate-50 px-2 py-2 hover:rounded-full duration-300"
              >
                {item.display_name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex hidden text-[0.9rem] space-x-2 text-white bg-merah-cerah hover:bg-merah-gelap ease-in duration-300 rounded-full px-4 py-2">
          <button className="">Daftar & Coba Gratis</button>
          <i className="bx bx-right-arrow-alt text-[1.5rem]"></i>
        </div>

        <div className="lg:hidden flex text-[0.8rem] space-x-2 text-white bg-merah-cerah hover:bg-merah-gelap ease-in duration-300 rounded-full px-2 py-1">
          <i className="bx bxs-offer text-[1rem]"></i>
          <button className="">Promo</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
