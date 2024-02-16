import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      {/* Footer PC */}
      <div className="md:flex bg-slate-600 pt-20 pb-5 justify-center text-white md:text-left text-center md:space-y-0 space-y-4">
        <div className="lg:w-[400px] md:w-[300px] md:mx-0 sm:mx-24 ">
          <Image
            src="/Logo/zenavisual-white.png"
            width={220}
            height={220}
            alt="zenavisual.id"
            className="mx-auto md:mx-0"
          />
          <p className="p-2 mt-5">
            Zenavisual.id memberikan anda sebuah solusi untuk membuat undangan
            online digital berbasis website. Membuat undangan sesuai dengan
            imajinasimu hanya menggunakan telpon pintar kamu.
          </p>
          <div className="flex mt-4 gap-x-3 md:mx-3 text-[1.8rem] mx-[114px]">
            <Link
              href={"https://www.facebook.com/zenavisual.id"}
              target="_blank"
            >
              <i className="bx bxl-facebook-circle   hover:text-red-500"></i>
            </Link>
            <Link
              href={"https://www.instagram.com/zenavisual.id"}
              target="_blank"
            >
              <i className="bx bxl-instagram   hover:text-red-500"></i>
            </Link>
            <Link href={"/"}>
              <i className="bx bxl-twitter   hover:text-red-500"></i>
            </Link>
            <Link href={"/"}>
              <i className="bx bxl-linkedin   hover:text-red-500"></i>
            </Link>
          </div>
        </div>
        <div className="py-2 lg:w-[400px] md:w-[290px] lg:mx-16 md:mx-5 sm:mx-24">
          <p className="font-bold uppercase">Alamat</p>
          <p className="md:mt-8 mt-3">
            Jl. Puring No.8, Mataram Barat., Kec. Selaparang, Kota Mataram, Nusa
            Tenggara Barat
          </p>
        </div>
        <div className="py-2 md:w-[150px]">
          <p className="font-bold uppercase">Informasi</p>
          <ul className="md:mt-8 mt-3 space-y-2">
            <li>
              <Link href="/tentang-kami">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/kontak">Kontak</Link>
            </li>
            <li>
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr width="30%" />
      <div className=" bg-slate-600 py-4 justify-center text-white text-center">
        <div className="text-[0.9rem]">
          © All rights reserved. PT. Zena Visual Project
        </div>
      </div>
      {/* Footer PC End */}

      {/* Footer Mobile */}
      <div className="sticky z-50 bottom-0">
        <ul className="flex lg:hidden items-center justify-center bg-white w-auto lg:pl-0 pl-3 p-3">
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
      {/* Footer Mobile End */}
    </>
  );
};

export default Footer;
