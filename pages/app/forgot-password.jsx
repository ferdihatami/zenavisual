import React from "react";
import Head from "next/head";

const forgotPassword = () => {
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
      </div>
    </>
  );
};

export default forgotPassword;
