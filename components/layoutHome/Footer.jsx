import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div>
      <ul className="flex lg:hidden items-center justify-center bg-white w-auto lg:pl-0 pl-3">
        <li className="mx-2 flex space-x-10">
          <Link href={"/"} className="">
            <div
              className={
                router.pathname == "/"
                  ? "text-merah-cerah text-center"
                  : "text-center"
              }
            >
              <i className="bx bx-home-alt text-[1.6rem]"></i>
              <p className="text-[0.7rem] text-center">Home</p>
            </div>
          </Link>

          <Link href={"/tema"}>
            <div
              className={
                router.pathname == "/tema"
                  ? "text-merah-cerah text-center"
                  : "text-center"
              }
            >
              <i className="bx bx-image-alt text-[1.6rem]"></i>
              <p className="text-[0.7rem] text-center">Tema</p>
            </div>
          </Link>

          <Link href={"/tutorial"}>
            <div
              className={
                router.pathname == "/tutorial"
                  ? "text-merah-cerah text-center"
                  : "text-center"
              }
            >
              <i className="bx bx-border-all text-[1.6rem]"></i>
              <p className="text-[0.7rem] text-center">Tutorial</p>
            </div>
          </Link>

          <Link href={"/harga"}>
            <div
              className={
                router.pathname == "/harga"
                  ? "text-merah-cerah text-center"
                  : "text-center"
              }
            >
              <i className="bx bx-cart text-[1.6rem]"></i>
              <p className="text-[0.7rem] text-center">Harga</p>
            </div>
          </Link>

          <Link href={"/login"}>
            <div
              className={
                router.pathname == "/login"
                  ? "text-merah-cerah text-center"
                  : "text-center"
              }
            >
              <i className="bx bx-user text-[1.6rem]"></i>
              <p className="text-[0.7rem] text-center">Login</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
