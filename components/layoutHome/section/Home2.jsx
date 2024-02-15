import React from "react";
import Image from "next/image";

const Home2 = () => {
  return (
    <div className="p-8">
      <div className="text-center  mt-8">
        <p className="font-medium text-[1.5rem]">
          Mengapa memilih zenavisual.id?
        </p>
        <p className="mt-5">
          Kami hadir menjadi sebuah solusi untuk mewujudkan momen
        </p>
        <p>impian dengan semua yang kamu butuhkan</p>
      </div>

      <div className="relative mt-10">
        <div className="md:flex lg:space-y-0 space-y-10 md:justify-center gap-x-5">
          <div className="rounded-lg shadow-lg bg-white max-w-sm min-h-[40vh] md:max-w-[250px] ">
            <a href="#!">
              <img className="rounded-t-lg" src="/image/undangan.jpg" alt="" />
            </a>
            <div className="px-5 py-5">
              <button className="text-gray-900 font-medium mb-3 flex gap-x-3 lg:text-[1.2rem] text-[1.2rem]">
                Undangan Digital
                <i className="bx bx-right-arrow-alt lg:text-[1.5rem] text-[1.5rem]"></i>
              </button>
              <p className="space-x-40 md:space-x-36 lg:space-x-56 font-regular">
                Buat undangan dengan hanya satu klik, kamu bisa custome template
                sesuka hati
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg bg-white max-w-sm min-h-[40vh] md:max-w-[250px]">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="/image/scan.jpg"
                alt="Scan Undangan"
              />
            </a>
            <div className="px-5 py-5">
              <button className="text-gray-900 font-medium mb-3 flex gap-x-3 lg:text-[1.2rem] text-[1.2rem]">
                Check-in System
                <i className="bx bx-right-arrow-alt lg:text-[1.5rem] text-[1.5rem]"></i>
              </button>
              <p className="space-x-40 md:space-x-36 lg:space-x-56 font-regular">
                Kelola daftar tamu dengan mudah menggunakan system RSVP yang
                dilengkapi dengan QR-Code
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg bg-white max-w-sm min-h-[40vh] md:max-w-[250px]">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="/image/instagram.jpg"
                alt="Scan Undangan"
              />
            </a>
            <div className="px-5 py-5">
              <button className="text-gray-900 font-medium mb-3 flex gap-x-3 lg:text-[1.2rem] text-[1.2rem]">
                Filter Instagram
                <i className="bx bx-right-arrow-alt lg:text-[1.5rem] text-[1.5rem]"></i>
              </button>
              <p className="space-x-40 md:space-x-36 lg:space-x-56 font-regular">
                Request desain filter instagram untuk acaramu dengan sesuka hati
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
