import React, { useState } from "react";
import Image from "next/image";

const Flower = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className={`${open ? "" : "overflow-hidden"}`}>
          <div
            className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
            style={{
              backgroundImage: `url("/background/flower/pink.jpg")`,
            }}
          >
            <div>
              <img
                className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
                src="/background/flower/border.png"
                style={{ position: "absolute" }}
                alt=""
              />
              <img
                className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
                src="/background/flower/svg.png"
                style={{ position: "absolute" }}
                alt=""
              />
            </div>
            <div className="absolute">
              <img
                className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
                src="/background/flower/flower3.png"
                alt=""
              />
            </div>
            <div className="text-center object object2 object3 object4 object5  py-[480px] sm:py-[325px] sm:px-[130px] px-[100px]">
              <p className="text-[0.9rem]">THE WEDDING OF</p>
              <div className="mt-5">
                <p className="text-[1.7rem] font-[million]">FERDI</p>
                <p className="text-[0.9rem] font-[million]">&</p>
                <p className="text-[1.7rem] font-[million]">ELIN</p>
              </div>
              <div className="mt-4">
                <p className="text-[0.7rem]">Kepada Yth</p>
                <p className="text-[0.7rem]">Bapak/Ibu/Saudara/i</p>
                <p className="text-[1.4.rem] mt-1">Nama Tamu</p>
                <button
                  onClick={(e) => setOpen(true)}
                  className="relative mt-4 text-[0.7rem] bg-[#e6b2b7] hover:bg-[#de919b] ease-in duration-200 rounded-full px-3 py-2"
                >
                  Open Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flower;
