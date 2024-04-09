import React from "react";
import IconCentang from "../svg/IconCentang";
import IconSilang from "../svg/IconSilang";

const Premium = () => {
  return (
    <>
      <div className="flex  py-3 border-y">
        <IconCentang />
        <p className="pl-2">Amplop Digital</p>
      </div>
      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Hitung Mundur Acara</p>
      </div>
      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Kutipan Kata</p>
      </div>
      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Musik Latar</p>
      </div>
      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">30 Foto dan 1 Video</p>
      </div>
      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Masa Aktif 1 Bulan</p>
      </div>

      {/* svg silang */}
      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Google Maps</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Ucapan dan Doa</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Unlimited Tamu</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconCentang />
        <p className="pl-2">Share Whatsapp</p>
      </div>

      <div className="flex py-3 border-b ">
        <IconCentang />
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

export default Premium;
