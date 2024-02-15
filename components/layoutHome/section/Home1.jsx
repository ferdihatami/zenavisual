import React from "react";
import Image from "next/image";

const Home1 = () => {
  return (
    <div className="bg-merah-cerah lg:grid lg:grid-cols-2 text-white xl:h-[620px] lg:h-[520px] md:h-full">
      <div className="xl:px-12 xl:py-20 px-5 pt-16">
        <p className="xl:text-[3.2rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2.8rem] text-[2rem] font-semibold">
          Platform Undangan
        </p>
        <p className="xl:text-[3.2rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2.8rem] text-[2rem]  font-semibold">
          Digital Online Website
        </p>
        <div className="xl:text-[3.2rem] lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2.8rem] text-[2rem] font-semibold">
          Untuk <tulisan></tulisan>
        </div>
        <p className="mt-5 text-[0.9rem] w-auto text-justify">
          Platform undangan digital online website, bikin undangan sesuai
          keinginanmu dengan zenavisual, walaupun kamu gaptek tetap bisa bikin
          undangan sendiri dari smartphone. Hanya pilih tema, edit detail acara,
          upload fotomu, semua bisa dilakukan hanya beberapa menit.
        </p>

        <div className="md:flex gap-x-3">
          <div className="mt-5 lg:w-[215px]  xl:text-[0.9rem] md:text-[0.8rem] md:space-x-2 space-x-5 text-white bg-merah-maron hover:bg-merah-bata ease-in duration-300 rounded-full px-4 py-2">
            <button className="text-center flex gap-x-2 items-center justify-center w-full">
              Daftar & Coba Gratis
              <i className="bx bx-right-arrow-alt lg:text-[1.3rem] text-[1.3rem]"></i>
            </button>
          </div>

          <div className="mt-5 lg:w-[185px] flex xl:text-[0.9rem] md:text-[0.75rem] md:space-x-2 text-black bg-slate-100 hover:bg-slate-300 ease-in duration-300 rounded-full px-4 py-2">
            <a
              href="https://wa.me/082340093463"
              target="_blank"
              className="flex gap-x-2 items-center justify-center text-center w-full"
            >
              <i className="bx bxl-whatsapp lg:text-[1.3rem] md:text-[0.9rem] text-[1.3rem]"></i>
              Konsultasi gratis
            </a>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <Image
          src="/Image/banner1.png"
          width={700}
          height={700}
          alt="Wedding invitation"
        />
      </div>
    </div>
  );
};

export default Home1;
