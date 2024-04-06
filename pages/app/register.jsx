import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [value, setValue] = useState();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Register|Undangan Digital Online Website</title>
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
        <div className="container mt-4 leading-[3.8rem]">
          <div className="lg:mx-[2.4rem] mx-0 md:mx-0">
            <p className="text-[3rem] lg:mx-[21.1rem] md:mx-10 mx-0 font-bold font-sans">
              Register
            </p>
          </div>
        </div>

        <div className="container mt-5 font-sans text-[1.1rem]">
          <div className="md:mx-10 mx-0 ">
            <p className="lg:mx-[21.2rem]  text-gray-500 md:mx-10 mx-0">
              Untuk dapat menikmati layanan dari zenavisual silahkan membuat
              akun terlebih dahulu
            </p>
          </div>
          <div className="lg:mx-[23.8rem] mt-6 md:mx-10 mx-0 lg:text-[1rem]">
            <form>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="required">
                  Nama
                </label>
                <input
                  type="text"
                  className="focus:outline-merah-cerah border border-black p-3 rounded-lg"
                  placeholder="Nama Kamu"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="required">
                  Whatsapp Aktif
                </label>
                <PhoneInput
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  country={"id"}
                  value={value}
                  onChange={setValue}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "0.5rem",
                    borderColor: "black",
                    borderImage: "black",
                    padding: "1.5rem",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                  }}
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="required">
                  E-mail Aktif
                </label>
                <input
                  type="email"
                  className="focus:outline-merah-cerah border border-black p-3 rounded-lg"
                  placeholder="admin@gmail.com"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="required">
                  Password
                </label>
                <input
                  // type={visible ? "text" : "password"}
                  className="focus:outline-merah-cerah border border-black rounded-lg  p-3"
                  placeholder="Minimal 8 Karakter"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="required">
                  Konfirmasi Password
                </label>
                <input
                  // type={visible ? "text" : "password"}
                  className="focus:outline-merah-cerah border border-black rounded-lg  p-3"
                  placeholder="Konfirmasi Password"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="optional">
                  Kode Referral
                </label>
                <input
                  type="email"
                  className="focus:outline-merah-cerah border border-black p-3 rounded-lg"
                  placeholder="Cth. zenavisual"
                />
                <p className="text-gray-500 text-[0.9rem]">
                  Kosongkan jika tidak punya referral
                </p>
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <button
                  type="submit"
                  className="bg-merah-cerah flex flex-wrap items-center justify-center gap-x-2 text-white p-3 rounded-full hover:bg-merah-gelap ease-in duration-300"
                >
                  Register
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
                  Sudah punya akun?&nbsp;
                  <Link
                    href={"/app/login"}
                    className="text-merah-cerah hover:text-merah-gelap ease-in duration-500"
                  >
                    Login disini
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

export default Register;
