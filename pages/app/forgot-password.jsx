import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const forgotPassword = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Login|Undangan Digital Online Website</title>
        <link rel="icon" href="/Logo/zenalogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="text-gray-800 mb-10">
        <div className="shadow-md py-2 sticky z-50 top-0 bg-white">
          <img
            onClick={() => router.push("/")}
            className="w-[60vw]"
            src="/Logo/zenavisual.png"
            alt=""
          />
        </div>

        <div className="container mt-4 leading-[3.2rem]">
          <p className="text-[2.6rem] font-bold font-sans">Forgot</p>
          <p className="text-[2.6rem] font-bold font-sans">Password</p>
        </div>

        <div className="container mt-3 font-sans ">
          <p className="text-gray-500 text-[1.1rem]">
            Masukkan E-mail atau nomor Whatsapp yang kamu gunakan saat mendaftar
            dan kami akan memberikan langkah untuk mengatur ulang kata sandi
            kamu
          </p>
        </div>

        <div className="container mt-3">
          <img src="/Image/password.png" alt="vector password" />
        </div>

        <div className="container mt-4 flex flex-col space-y-3 ">
          <input
            type="text"
            className="focus:outline-merah-cerah border border-black p-3 rounded-lg"
            placeholder="E-mail/Whatsapp"
            required
          />
          <button
            type="submit"
            className="bg-merah-cerah flex flex-wrap items-center justify-center gap-x-2 text-white p-3 rounded-full hover:bg-merah-gelap ease-in duration-300"
          >
            Kirim
          </button>
        </div>
      </div>
    </>
  );
};

export default forgotPassword;
