import React, { useState } from "react";
import Image from "next/image";

const Flower = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        id="pink-back"
        className={`${
          open ? "block" : "overflow-hidden"
        } sm:max-w-sm h-screen  mx-auto border-black`}
      >
        <div className="flower ">
          <div className="svg-flow">
            <div className="border-2 border-white inline-block m-8 h-[577px] w-[320px]">
              <div className="text-center">
                <p className="mt-[120px] font-[poppins] tracking-wider text-[0.9rem] font-normal">
                  THE WEDDING OF
                </p>
                <p className="mt-[40px] text-[2rem] font-[hills]">
                  Ferdi <br /> & <br /> Elin
                </p>
                <p className="z-100 mt-[40px] font-[poppins] tracking-wider text-[0.7rem] font-normal">
                  Kepada Yth, <br /> Bapak/Ibu/Saudara/i
                </p>
                <p className="mt-[10px] font-semibold">Nama Tamu</p>
                <div className="mt-[20px] ">
                  <button
                    onClick={(e) => setOpen(true)}
                    className="text-center text-[0.8rem] bg-yellow-400 px-3 py-2 rounded-full hover:bg-yellow-600 ease-in duration-200"
                  >
                    Open Invitation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pink-back">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          esse labore doloribus facilis, numquam placeat dolorem voluptatem,
          eius aut fugit ullam. Magni atque dicta laborum sapiente, reiciendis
          doloremque! Temporibus, quisquam?
        </div>
      </div>
    </>
  );
};

export default Flower;
