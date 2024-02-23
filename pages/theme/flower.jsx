import React, { useState } from "react";
import Image from "next/image";

const Flower = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover "
        style={{
          backgroundImage: `url("/background/flower/pink.jpg")`,
        }}
      >
        <div>
          <img
            className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
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
          <img
            className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
            src="/background/flower/flower3.png"
            style={{ position: "absolute" }}
            alt=""
          />
        </div>

        <div className="z-10 absolute text-center object8 object7 object6 object5 object4 object3 object2 object">
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
              className=" mt-4 text-[0.7rem] bg-[#e6b2b7] hover:bg-[#de919b] ease-in duration-200 rounded-full px-3 py-2"
            >
              Open Invitation
            </button>
          </div>
        </div>
      </div>
      {/* Page Continues */}
      <div className={`${!open ? "hidden" : "show"}`}>
        {/* Page 2  */}
        <div
          className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
          style={{
            backgroundImage: `url("/background/flower/pink.jpg")`,
          }}
        >
          <div>
            <img
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
              src="/background/flower/border.png"
              style={{ position: "absolute" }}
              alt=""
            />
            <img
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              src="/background/flower/svg2.png"
              style={{ position: "absolute" }}
              alt=""
            />
            <img
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
              src="/background/flower/svg3.png"
              style={{ position: "absolute" }}
              alt=""
            />
            <img
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
              src="/background/flower/flower1.png"
              style={{ position: "absolute" }}
              alt=""
            />
          </div>
          <div className="text-center space-y-3 object7-page2">
            <p>
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
              لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
              وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
            <p className="text-[0.8rem]">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </p>
            <p className="text-[0.8rem]">Qs. Ar-Ruum 30:21</p>
          </div>
        </div>
        {/* Page 2 End */}
      </div>
      {/* Page Continues End */}
    </>
  );
};

export default Flower;
