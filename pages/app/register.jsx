import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [value, setValue] = useState();

  return (
    <>
      <Head>
        <title>Register|Undangan Digital Online Website</title>
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
        <div className="container mt-4 leading-[3.8rem]">
          <p className="text-[3rem] font-bold font-[roboto]">Register</p>
        </div>

        <div className="container mt-3 font-[roboto]">
          <p>
            Untuk dapat menikmati layanan dari zenavisual.id silahkan membuat
            akun terlebih dahulu
          </p>

          <div className="mt-6">
            <form>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="required">
                  Nama
                </label>
                <input
                  type="text"
                  className="focus:outline-merah-cerah border border-black p-2 rounded-lg"
                  placeholder="Nama Kamu"
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
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderRadius: "0.5rem",
                    borderColor: "black",
                  }}
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="required">
                  E-mail Aktif
                </label>
                <input
                  type="email"
                  className="focus:outline-merah-cerah border border-black p-2 rounded-lg"
                  placeholder="admin@gmail.com"
                />
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="" className="optional">
                  Kode Referral
                </label>
                <input
                  type="email"
                  className="focus:outline-merah-cerah border border-black p-2 rounded-lg"
                  placeholder="Cth. zenavisual"
                />
                <p className="text-gray-500 text-[0.9rem]">
                  Kosongkan jika tidak punya referral
                </p>
              </div>

              <div className="flex flex-col space-y-2 mt-5">
                <button
                  type="submit"
                  className="bg-merah-cerah flex flex-wrap items-center justify-center gap-x-2 text-white p-2 rounded-lg hover:bg-merah-gelap ease-in duration-300"
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
