import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const ForgotPassword = () => {
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
          <div className="container">
            <div className="lg:mx-[1rem] md:mx-0 mx-0">
              <img
                width={190}
                height={190}
                onClick={() => router.push("/")}
                className="lg:mx-[21.4rem] md:mx-[2rem] mx-0"
                src="/Logo/zenavisual.png"
                alt="zenavisual logo"
              />
            </div>
          </div>
        </div>

        <div className="container mt-4 leading-[3.4rem]">
          <div className="lg:mx-[2.4rem] mx-0 md:mx-0">
            <p className="text-[2.6rem] lg:mx-[21.1rem] md:mx-10 mx-0 font-bold font-sans">
              Forgot
            </p>
            <p className="text-[2.6rem] lg:mx-[21.1rem] md:mx-10 mx-0 font-bold font-sans">
              Password
            </p>
          </div>
        </div>

        <div className="container mt-3 font-sans ">
          <div className="md:mx-10 mx-0 ">
            <p className="lg:mx-[21.1rem] text-gray-500 text-[1.1rem] md:mx-10 mx-0">
              Masukkan E-mail atau nomor Whatsapp yang kamu gunakan saat
              mendaftar dan kami akan memberikan langkah untuk mengatur ulang
              kata sandi kamu
            </p>
          </div>
        </div>

        <div className="container mt-3 md:mx-10 mx-0">
          <div className="lg:mx-[4rem] md:mx-0 mx-0">
            <img
              className=" md:w-[300px] lg:mx-[21.4rem] md:mx-[2rem] mx-0"
              src="/Image/password.png"
              alt="vector password"
            />
          </div>
        </div>

        <div className="lg:mx-[27rem] mt-4 md:mx-10 mx-0 lg:text-[1rem]">
          <form action="">
            <div className="container  flex flex-col space-y-3 ">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
