import React from "react";
import Head from "next/head";
import Layout from "../components/layoutHome/Layout";
import Basic from "../components/fitur/Basic";
import Link from "next/link";
import Premium from "../components/fitur/Premium";
import Platinum from "../components/fitur/Platinum";
import BreadCrumb from "../components/svg/BreadCrumb";

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
          <div className="justify-center items-center my-12 mt-24 text-center space-y-5">
            <div className="font-sans text-gray-500 font-semibold flex flex-row items-center justify-center gap-x-1">
              <Link href={"/"} className="hover:text-merah-maron">
                Home
              </Link>
              <BreadCrumb />
              <p>Harga</p>
            </div>
            <p className="text-[2rem] font-sans font-bold lg:mx-[21rem]">
              Akses Semua &nbsp;
              <span className="text-merah-gelap">Fitur Undangan Digital</span>
              &nbsp; Dengan Harga Terjangkau
            </p>
            <p>
              Jangan khawatir untuk coba gratis, kamu bisa merubah paket
              kapanpun.
            </p>
          </div>

          <div className="flex flex-wrap mt-[5rem] justify-center items-center gap-x-5 font-sans gap-y-10">
            {/* Card 1 */}

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-4 text-[2rem] font-bold tracking-tight text-gray-900 dark:text-white">
                  Basic
                </h5>
              </a>

              <p className="mb-3 mt-12 font-normal text-gray-700 dark:text-gray-400">
                Paket ini untuk kamu yang hanya ingin menyebarkan informasi
                undangan saja.
              </p>
              <p className="invisible text-merah-cerah line-through font-sans text-[1.2rem]">
                Rp. 79,000
              </p>
              <p className="font-bold text-[3rem]">Gratis</p>
              <div className="mb-5 mt-4 text-[1rem]">
                <Basic />
              </div>
              <div className="flex flex-col px-5">
                <Link
                  href="#"
                  className="inline-flex justify-center items-center px-3 py-[0.8rem] text-sm font-medium text-center text-white bg-merah-gelap rounded-lg hover:bg-merah-maron focus:ring-4 focus:outline-none focus:ring-merah-cerah dark:bg-merah-gelap dark:hover:bg-merah-maron dark:focus:ring-merah-bata"
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

              <p className="mb-3 mt-12 font-normal text-gray-700 dark:text-gray-400">
                Paket dengan beberapa fitur yang berguna untuk undangan digital
                kamu.
              </p>
              <p className="font-semibold text-merah-cerah line-through font-sans text-[1.2rem]">
                Rp. 79,000
              </p>
              <p className="font-bold text-[3rem]">Rp. 39,000</p>
              <div className="mb-5 mt-4 text-[1rem]">
                <Premium />
              </div>
              <div className="flex flex-col px-5">
                <Link
                  href="#"
                  className="inline-flex justify-center items-center px-3 py-[0.8rem] text-sm font-medium text-center text-white bg-merah-gelap rounded-lg hover:bg-merah-maron focus:ring-4 focus:outline-none focus:ring-merah-cerah dark:bg-merah-gelap dark:hover:bg-merah-maron dark:focus:ring-merah-bata"
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

            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative top-0 float-right">
                <span className="label-name">Recomended</span>
              </div>
              <div className="p-6">
                <Link href="#">
                  <h5 className="text-merah-cerah mb-4 text-[2rem] font-bold tracking-tight  dark:text-white">
                    Platinum
                  </h5>
                </Link>

                <p className="mb-3 mt-12 font-normal text-gray-700 dark:text-gray-400">
                  Paket rekomendasi dengan fitur paling lengkap untuk undangan
                  digital kamu.
                </p>
                <p className="font-semibold text-merah-cerah line-through font-sans text-[1.2rem]">
                  Rp. 150,000
                </p>
                <p className="font-bold text-[3rem]">Rp. 99,000</p>
                <div className="mb-5 mt-4 text-[1rem]">
                  <Platinum />
                </div>
                <div className="flex flex-col px-5">
                  <Link
                    href="#"
                    className="inline-flex justify-center items-center px-3 py-[0.8rem] text-sm font-medium text-center text-white bg-merah-gelap rounded-lg hover:bg-merah-maron focus:ring-4 focus:outline-none focus:ring-merah-cerah dark:bg-merah-gelap dark:hover:bg-merah-maron dark:focus:ring-merah-bata"
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
            </div>

            {/* Card 3 End */}
          </div>
        </div>
        {/* Faqs */}
        <div className="my-[6rem] container">
          <div className="md:mx-[3.1rem]">
            <p className="text-[2rem] font-sans font-bold">FAQs</p>
            <div className="md:grid md:grid-rows-4 grid-flow-col mt-6 md:gap-y-5 space-y-6 md:space-y-0 md:gap-x-10">
              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Apakah membuat undangan digital gratis?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Undangan digital zenavisual.id gratis selama 2 hari. Namun
                  fitur yang didapatkan terbatas.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Apakah masih bisa di edit setelah aktif?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Undangan digital di zenavisual masih bisa di edit sampai
                  kapanpun selama akun kamu masih aktif.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Apakah ada batasan revisi undangan?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Undangan digital zenavisual tidak adak ada batasan revisi,
                  kamu bisa revisi kapan saja selama akun kamu masih aktif
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Apakah tema undangan bisa disesuaikan dengan tema acara?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Tentu saja kamu bisa menyesuaikan desain undangan digital di
                  zenavisual, kamu juga bisa menambahkan gambar, video musik
                  sesuai keinginanmu.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Berapakah batas kirim undangan digital?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Tidak ada batasan kirim undangan digital dengan zenavisual.id,
                  cukup buat satu undangan untuk banyak tamu
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Apa itu masa aktif?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Masa aktif undangan digital yang dapat diakses. apabila masa
                  aktif sudah berakhir, maka undangan tidak dapat diakses.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Berapa banyak undangan bisa dibuat?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  Kamu hanya bisa membuat 1 undangan digital per hari. untuk
                  membuat undangan bisa dilain hari.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[1.3rem] font-sans font-semibold">
                  Bagaimana cara tahu undangan digital sampai ke tamu?
                </p>
                <p className="text-gray-600 font-sans text-[1.1rem] ">
                  undangan digital di zenavisual memiliki fitur RSVP, sehingga
                  tamu undangan dapat memberikan presensi kehadiran acara.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Faqs End */}
      </Layout>
    </>
  );
};

export default Harga;
