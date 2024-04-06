import React from "react";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register|Undangan Digital Online Website</title>
        <link rel="icon" href="/Logo/zenalogo.png" />
        <meta name="viewport" content="width=500, initial-scale=1" />
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
          <p className="text-[3rem] font-semibold font-[roboto]">Register</p>
        </div>

        <div className="container mt-3 font-[roboto]">
          <p>
            Untuk dapat menikmati layanan dari zenavisual.id silahkan membuat
            akun terlebih dahulu
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
