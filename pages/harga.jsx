import React from "react";
import Head from "next/head";
import Layout from "../components/layoutHome/Layout";
import Basic from "../components/fitur/Basic";
import Link from "next/link";
import Premium from "../components/fitur/Premium";
import Platinum from "../components/fitur/Platinum";

const Harga = () => {
  return (
    <>
      <Head>
        <title>Login|Undangan Digital Online Website</title>
        <link rel="icon" href="/Logo/zenalogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <div className="container my-10">
          <div className="flex flex-wrap justify-center items-center gap-x-5 font-sans">
            {/* Card 1 */}

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-4 text-[2rem] font-bold tracking-tight text-gray-900 dark:text-white">
                  Basic
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Paket ini untuk kamu yang hanya ingin menyebarkan informasi
                undangan saja.
              </p>
              <p className="font-bold text-[3rem]">Gratis</p>
              <div className="mb-5 mt-4 text-[1rem]">
                <Basic />
              </div>
              <div className="flex flex-col ">
                <Link
                  href="#"
                  className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selanjutnya
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 1 End */}
            {/* Card 2  */}

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-4 text-[2rem] font-bold tracking-tight text-gray-900 dark:text-white">
                  Premium
                </h5>
              </a>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Paket dengan beberapa fitur yang berguna untuk undangan digital
                kamu.
              </p>
              <p className="font-bold text-[3rem]">Rp. 79,000</p>
              <div className="mb-5 mt-4 text-[1rem]">
                <Premium />
              </div>
              <div className="flex flex-col ">
                <Link
                  href="#"
                  className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selanjutnya
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 End */}
            {/* Card 3  */}

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href="#">
                <h5 className="mb-4 text-[2rem] font-bold tracking-tight text-gray-900 dark:text-white">
                  Platinum
                </h5>
              </Link>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Paket rekomendasi dengan fitur paling lengkap untuk undangan
                digital kamu.
              </p>
              <p className="font-bold text-[3rem]">Rp. 149,000</p>
              <div className="mb-5 mt-4 text-[1rem]">
                <Platinum />
              </div>
              <div className="flex flex-col ">
                <Link
                  href="#"
                  className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Selanjutnya
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 End */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Harga;
