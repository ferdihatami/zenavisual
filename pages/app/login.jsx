import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layoutHome/Layout";

const Login = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Login|Undangan Digital Online Website</title>
        <link rel="icon" href="/Logo/zenalogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="text-gray-800 mb-10">
        <div className="shadow-md py-2 sticky z-50 top-0 bg-white ">
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
        {/* <hr className="border-2 border-t" /> */}
        <div className="container  mt-4 leading-[3.4rem]">
          <div className="lg:mx-[2.4rem] mx-0 md:mx-0">
            <p className="text-[3rem] lg:mx-[21.4rem] md:mx-10 mx-0 font-bold font-sans">
              Welcome
            </p>
            <p className="text-[3rem] lg:mx-[21.4rem] md:mx-10 mx-0 font-bold font-sans">
              Back
            </p>
          </div>
        </div>
        <div className=" container mt-5 font-sans text-[1.1rem]">
          <div className="md:mx-10 mx-0 ">
            <p className="lg:mx-[21.5rem] md:mx-0 mx-0 text-gray-500 ">
              Masukan E-mail beserta kata sandi kamu yang sudah terdaftar di
              zenavisual.id
            </p>
          </div>

          <div className="lg:mx-[24rem] mt-6 md:mx-10 mx-0 lg:text-[1rem]">
            <form>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="required">
                  E-mail
                </label>
                <input
                  type="email"
                  className="focus:outline-merah-cerah border border-black p-3  rounded-lg"
                  placeholder="Masukkan E-mail Kamu"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="required">
                  Password
                </label>
                <div className="relative flex flex-wrap items-center">
                  <input
                    type={visible ? "text" : "password"}
                    className="focus:outline-merah-cerah w-[1%] border-l border-t border-b border-black rounded-l-lg rounded-r-none p-3 flex flex-auto"
                    placeholder="Minimal 8 Karakter"
                    required
                  />
                  <div className="relative">
                    <div
                      onClick={() => setVisible(!visible)}
                      className="bg-white border-r border-t border-b border-black rounded-r-lg"
                    >
                      {visible ? (
                        <i className="bx bxs-low-vision text-[2rem] lg:text-[1.8rem] p-[0.575rem] right-5 "></i>
                      ) : (
                        <i className="bx bxs-show text-[2rem] lg:text-[1.8rem] p-[0.575rem] right-5 "></i>
                      )}
                    </div>
                  </div>
                </div>
                <Link href={"/app/forgot-password"} className="">
                  <p className="mt-2 hover:underline">Lupa Password ?</p>
                </Link>
              </div>
              <div className="mt-5 flex flex-col space-y-5">
                <button
                  type="submit"
                  className="bg-merah-cerah flex flex-wrap items-center justify-center gap-x-2 text-white p-3 rounded-full hover:bg-merah-gelap ease-in duration-300"
                >
                  Login{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </button>

                <div className="text-center">
                  Belum punya akun?&nbsp;
                  <Link
                    href={"/app/register"}
                    className="text-merah-cerah hover:text-merah-gelap ease-in duration-500"
                  >
                    Daftar disini
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
