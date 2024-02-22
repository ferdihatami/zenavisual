import React, { useState } from "react";
import Image from "next/image";

const Flower = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id="container" className={`${open ? "" : "overflow-hidden"}`}>
        <div id="pink-back" className="h-screen md:h-[680px] max-w-sm mx-auto ">
          <div id="zena-border" className="h-screen md:h-[648px] mb-20 ">
            <div className="flower z-[100]">
              <div className="svg-flow md:h-[680px] h-screen">
                <div className="text-center items-center py-[290px]">
                  <p className="text-[0.9rem]">THE WEDDING OF</p>
                  <div className="gap-y-[10px] mt-6">
                    <p className="text-[2rem] font-[million]">FERDI</p>
                    <p className="text-[0.8rem] font-[million]">&</p>
                    <p className="text-[2rem] font-[million]">ELIANA</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-[0.7rem] font-normal">Kepada Yth,</p>
                    <p className="text-[0.7rem] font-normal">
                      Bapal/Ibu/Saudara/i,
                    </p>
                    <p className="text-[1rem] mt-2">Nama Tamu</p>
                    <button
                      onClick={(e) => setOpen(true)}
                      className="mt-4 text-[0.7rem] bg-[#e6b2b7] hover:bg-[#de919b] ease-in duration-200 rounded-full px-3 py-2"
                    >
                      Open Invitation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="pink-back"
              className="h-screen md:h-[680px] max-w-sm mx-auto "
            >
              <div id="zena-border" className="h-screen md:h-[648px] mb-20">
                <div className="svg-flow2 md:h-[680px] h-screen">
                  <div className="svg-flow3">
                    <div className="svg-flower1">
                      <div className="py-[200px] space-y-5">
                        <p className="text-center px-12">
                          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                          اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ
                          بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ
                          لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                        </p>
                        <p className="text-center px-12 text-[0.7rem]">
                          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                          menciptakan pasangan-pasangan untukmu dari jenismu
                          sendiri, agar kamu cenderung dan merasa tenteram
                          kepadanya, dan Dia menjadikan di antaramu rasa kasih
                          dan sayang. Sungguh, pada yang demikian itu
                          benar-benar terdapat tanda-tanda (kebesaran Allah)
                          bagi kaum yang berpikir.
                        </p>
                        <p className="text-center px-12 text-[0.7rem]">
                          Qs. AR-Ruum 30 : 21
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flower;
