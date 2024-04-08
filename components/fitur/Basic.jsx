import React from "react";
import IconSilang from "../svg/IconSilang";

const Basic = () => {
  return (
    <>
      <div className="flex  py-3 border-y">
        <svg
          width="24"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#00B1A9"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m9 12.375 2 2 4-4"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p className="pl-2">Amplop Digital</p>
      </div>
      <div className="flex py-3 border-b ">
        <svg
          width="24"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#00B1A9"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m9 12.375 2 2 4-4"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p className="pl-2">Hitung Mundur Acara</p>
      </div>
      <div className="flex py-3 border-b ">
        <svg
          width="24"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#00B1A9"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m9 12.375 2 2 4-4"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p className="pl-2">Kutipan Kata</p>
      </div>
      <div className="flex py-3 border-b ">
        <svg
          width="24"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#00B1A9"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m9 12.375 2 2 4-4"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p className="pl-2">Musik Latar</p>
      </div>
      <div className="flex py-3 border-b ">
        <svg
          width="24"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#00B1A9"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m9 12.375 2 2 4-4"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p className="pl-2">3 Foto dan 1 Video</p>
      </div>
      <div className="flex py-3 border-b ">
        <svg
          width="24"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M12 21.375a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="#00B1A9"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m9 12.375 2 2 4-4"
            stroke="#00B1A9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p className="pl-2">Masa Aktif 2 Hari</p>
      </div>

      {/* svg silang */}
      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Google Maps</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Ucapan dan Doa</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Unlimited Tamu</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Share Whatsapp</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">RSVP/Buku Tamu</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Tanpa Watermark</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Scan QR Code</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconSilang />
        <p className="pl-2">Download Amplop</p>
      </div>
      {/* svg silang end */}
    </>
  );
};

export default Basic;
