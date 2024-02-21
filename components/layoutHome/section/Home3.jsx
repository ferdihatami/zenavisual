import React from "react";
import Image from "next/image";

const Home3 = () => {
  return (
    <div className="bg-merah-cerah bg-opacity-70 py-10 md:py-0">
      <div className="md:grid md:grid-cols-2 space-x-3 lg:p-8 xl:mx-16 lg:mx-0 mx-5 text-white ">
        <div>
          <Image
            src="/Image/banner2.png"
            width={700}
            height={700}
            alt="Wedding invitation"
          />
        </div>
        <div className="">
          <div className="xl:mt-[130px] lg:mt-[110px] md:mt-[85px] ">
            <p className="font-black xl:text-[2.6rem] lg:text-[2.1rem] md:text-[1.5rem] text-[2rem] font-[roboto] tracking-[2px]">
              Bikin Undangan Online Dimanapun dan Kapanpun Cukup Dengan HP Kamu
            </p>
          </div>
          <div className="mt-10 mb-5">
            <p className="text-justify">
              Bikin undangan online praktis, kapanpun dan dimanapun. Tanpa harus
              menggunakan laptop berjam-jam. Cukup dengan hp kamu, pilih tema
              sesuai keinginanmu, edit detail acara, upload foto terbaikmu dan
              akan selesai dalam hitungan menit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
