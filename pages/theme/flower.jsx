import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "../../components/countdown/countdown";
import Loading from "../../components/loading/loading";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Flower = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeCopy, setTimeCopy] = useState(true);
  const page2 = useRef();
  const bniRef = useRef();
  const [copyMsg, setCopyMsg] = useState("");

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    // const time = () => {
    //   setTimeout(() => {
    //     setTimeCopy(false);
    //   }, 3000);
    // };
    // time();
    fakeDataFetch();
  }, []);

  const toggleOpen = () => {
    setOpen(true);
    // page2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSlide = () => {
    page2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const copyBni = (e) => {
    const str = document.getElementById("bni").innerText;
    const el = document.createElement("textarea");
    el.value = str;
    // el.setAttribute("readonly", "");
    // el.style.position = "absolute";
    // el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert(`${str} has been copied`);
  };

  const copyBca = () => {
    const str = document.getElementById("bca").innerText;
    const el = document.createElement("textarea");
    el.value = str;
    // el.setAttribute("readonly", "");
    // el.style.position = "absolute";
    // el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert(`${str} has been copied`);
  };

  const copyMandiri = () => {
    const str = document.getElementById("mandiri").innerText;
    const el = document.createElement("textarea");
    el.value = str;
    // el.setAttribute("readonly", "");
    // el.style.position = "absolute";
    // el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert(`${str} has been copied`);
  };

  const copyBsi = () => {
    const str = document.getElementById("bsi").innerText;
    const el = document.createElement("textarea");
    el.value = str;
    // el.setAttribute("readonly", "");
    // el.style.position = "absolute";
    // el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert(`${str} has been copied`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="ease-in duration-500 ">
          <div
            className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover "
            style={{
              backgroundImage: `url("/background/flower/pink.jpg")`,
            }}
          >
            <div className="">
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

            <div className="z-10 absolute text-center object9 object8 object7 object6 object5 object4 object3 object2 object">
              <p className="text-[0.9rem]">THE WEDDING OF</p>
              <div className="mt-5">
                <p className="text-[1.7rem] font-[julio]">Ferdi</p>
                <p className="text-[0.9rem] font-[million]">&</p>
                <p className="text-[1.7rem] font-[julio]">Elin</p>
              </div>
              <div className="mt-4">
                <p className="text-[0.7rem]">Kepada Yth</p>
                <p className="text-[0.7rem]">Bapak/Ibu/Saudara/i</p>
                <p className="text-[1.4.rem] mt-1">Nama Tamu</p>
                <button
                  onClick={toggleOpen}
                  className=" mt-4 text-[0.7rem] bg-[#e6b2b7] hover:bg-[#de919b] ease-in duration-200 rounded-full px-3 py-2"
                >
                  Open Invitation
                </button>
              </div>
              <button
                onClick={toggleSlide}
                className={open ? "w-[34px] relative top-5 " : "hidden"}
              >
                <img className="animate-bounce" src="/Image/panah.png" alt="" />
              </button>
            </div>
          </div>
          {/* Page Continues */}
          <div className={!open ? "hidden" : `overflow`}>
            {/* Page 2  */}
            <div
              ref={page2}
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
              <div className="relative z-10 text-center space-y-3 obj9-page2 obj8-page2 obj7-page2 obj6-page2 obj5-page2 obj4-page2 obj3-page2 obj2-page2 obj-page2">
                <p>
                  وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                  اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                  مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ
                  يَّتَفَكَّرُوْنَ
                </p>
                <p className="text-[0.8rem]">
                  Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                  menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                  agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                  menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir.
                </p>
                <p className="text-[0.8rem]">Qs. Ar-Ruum 30:21</p>
              </div>
            </div>
            {/* Page 2 End */}
            {/* Page 3 */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg5.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/flower2.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg4.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div className="">
                <div
                  className="relative z-50 box-content h-[12rem] w-[8rem]  shadow-lg overflow-hidden rounded-[10rem]
             obj-page3 obj2-page3 obj3-page3 obj4-page3 obj5-page3 obj6-page3 obj7-page3 obj8-page3 "
                >
                  <img
                    className="object-cover w-[100%] h-[100%] object-top"
                    src="/background/flower/coba.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="relative pt-[150px] text-center txt-page3 txt2-page3 txt3-page3 txt4-page3 
            txt5-page3 txt6-page3 txt7-page3 txt8-page3 z-50"
                >
                  <p className="font-[julio]">Elin</p>
                  <p className="font-[cambria] text-[1.2rem] font-semibold">
                    Eliana Adenin, S.Pd
                  </p>
                  <p className="font-[cambria] text-[1rem] mt-1 px-[4rem] mb-3">
                    Putri kedua dari Bapak Parihin dan Ibu Ruhiah
                  </p>
                  <Link
                    href={"https://www.instagram.com/"}
                    target="_blank"
                    className="text-[0.7rem] bg-[#e6b2b7] px-2 py-1 rounded-xl"
                  >
                    @elianaadenin
                  </Link>
                </div>
              </div>
            </div>
            {/* Page 3 End */}
            {/* Page 4  */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg5.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/flower2.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg4.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div className="">
                <div
                  className="relative z-50 box-content h-[12rem] w-[8rem] shadow-lg overflow-hidden rounded-[10rem]
             obj-page3 obj2-page3 obj3-page3 obj4-page3 obj5-page3 obj6-page3 obj7-page3 obj8-page3 "
                >
                  <img
                    className="object-cover w-[100%] h-[100%] object-top"
                    src="/background/flower/coba2.jpg"
                    alt=""
                  />
                </div>
                <div
                  className="relative pt-[150px] text-center txt-page3 txt2-page3 txt3-page3 txt4-page3 
            txt5-page3 txt6-page3 txt7-page3 txt8-page3 z-50"
                >
                  <p className="font-[julio]">Ferdi</p>
                  <p className="font-[cambria] text-[1.2rem] font-semibold">
                    Alferdian Hatami, S.Pi
                  </p>
                  <p className="font-[cambria] text-[1rem] mt-1 px-[4rem] mb-3">
                    Putra keempat dari Bapak H. Hulaimi dan Ibu Hj. Rauhun
                  </p>
                  <Link
                    href={"https://www.instagram.com/"}
                    target="_blank"
                    className="text-[0.7rem] bg-[#e6b2b7] px-2 py-1 rounded-xl"
                  >
                    @ferdi_hatami
                  </Link>
                </div>
              </div>
            </div>
            {/* Page 4 End */}
            {/* Page 5 */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg6.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/svg7.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/flower4.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div className="text-center relative z-20 pt-[120px] akadTemp7 akadTemp6 akadTemp5 akadTemp4 akadTemp3 akadTemp2">
                <p className="font-[julio] text-[1.5rem] font-regular text-[#de919b] font-medium">
                  Akad Nikah
                </p>

                <div className="grid grid-cols-3 mt-6 mx-auto w-[250px] font-[cambria]">
                  <div className="pl-2">
                    <p className="pt-4">Minggu</p>
                  </div>
                  <div className="border-x border-[#de919b] ">
                    <p className="text-[1.6rem]">16</p>
                    <p>2024</p>
                  </div>
                  <div className="pl-2">
                    <p className="pt-4">Desember</p>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="font-[calibri] text-[1.1rem]">
                    Pukul 10.00 WITA
                  </p>
                  <p className="pt-5 font-[calibri] text-[1.1rem] font-semibold text-[#de919b]">
                    Lokasi Acara
                  </p>
                  <p className="font-[calibri] font-semibold px-12">
                    Gedung Asrama Haji Embarkasi Provinsi Nusa Tenggara Barat
                  </p>
                  <p className="px-12 font-[calibri]">
                    Jalan Lingkar Selatan, Tanjung Karang, Jempong Baru, Kec.
                    Mataram, Kota Mataram, Nusa Tenggara Barat
                  </p>
                </div>

                {/* countdown */}
                <Countdown />
                {/* countdown End */}
              </div>
            </div>
            {/* Page 5 End */}

            {/* Page 6  */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg6.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/svg7.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/flower4.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div className="text-center relative z-20 pt-[120px] akadTemp7 akadTemp6 akadTemp5 akadTemp4 akadTemp3 akadTemp2">
                <p className="font-[julio] text-[1.5rem] font-regular text-[#de919b] font-medium">
                  Resepsi
                </p>

                <div className="grid grid-cols-3 mt-6 mx-auto w-[250px] font-[cambria]">
                  <div className="pl-2">
                    <p className="pt-4">Minggu</p>
                  </div>
                  <div className="border-x border-[#de919b] ">
                    <p className="text-[1.6rem]">16</p>
                    <p>2024</p>
                  </div>
                  <div className="pl-2">
                    <p className="pt-4">Desember</p>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="font-[calibri] text-[1.1rem]">
                    Pukul 10.00 WITA
                  </p>
                  <p className="pt-5 font-[calibri] text-[1.1rem] font-semibold text-[#de919b]">
                    Lokasi Acara
                  </p>
                  <p className="font-[calibri] font-semibold px-12">
                    Gedung Asrama Haji Embarkasi Provinsi Nusa Tenggara Barat
                  </p>
                  <p className="px-12 font-[calibri]">
                    Jalan Lingkar Selatan, Tanjung Karang, Jempong Baru, Kec.
                    Mataram, Kota Mataram, Nusa Tenggara Barat
                  </p>
                </div>

                {/* countdown */}
                <Countdown />
                {/* countdown End */}
              </div>
            </div>
            {/* Page 6 End */}
            {/* Page 7 */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/flower5.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/svg8.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg9.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div
                className="relative z-20 box-content border-2 border-black w-[250px]  shadow-lg overflow-hidden  rounded-[2rem]
            maps8-page8 maps7-page8 maps6-page8 maps5-page8 maps4-page8 maps3-page8 maps2-page8 maps-page8 
          "
              >
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCpV55KNPo55TuxnDFd_dR3MD0luBrN1Gc&zoom=17&q=-8.62158698349777, 116.08137929411494"
                  frameborder="0"
                  className="h-[200px] w-[250px] bg-cover bg-top"
                ></iframe>
              </div>
              <div className="relative z-20 text-center txt8-page8 txt7-page8 txt6-page8 txt5-page8 txt4-page8 txt3-page8 text2-page8 txt-page8">
                <p className="font-semibold font-[calibri] text-[1.2rem]">
                  Asrama Haji Embarkasi Prov. NTB
                </p>
                <p className="px-8 mt-4">
                  Jl. Lingkar Selatan, Jempong Baru, Sekarbela, Jempong Baru,
                  Kec. Mataram, Kota Mataram
                </p>
                <a
                  href="https://www.google.com/maps/place/?q=-8.62158698349777, 116.08137929411494"
                  className="relative top-7 bg-[#e6b2b7] hover:bg-[#de919b] px-3 py-1 rounded-2xl text-[0.8rem] ease-in duration-200"
                  target="_blank"
                >
                  Petunjuk Lokasi
                </a>
              </div>
            </div>
            {/* Page 7 End */}

            {/* Page 8 */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-30"
                  src="/background/flower/flower3.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/svg8.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/svg9.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div className="space-y-5 bottom-4 relative">
                <div
                  className="relative border-4 border-white h-[180px] w-[250px] em:w-[250px] em:h-[180px] rm:w-[200px] rm:h-[130px] z-50 hover:z-[100]
                rm:inset-10 rm:top-[120px] em:inset-[3.8rem] em:top-[70px] om:inset-[5rem] om:top-[180px] ym:inset-[4.3rem]
                ym:top-[150px] im:inset-[5.6rem] im:top-[180px] um:inset-[5rem] um:top-[180px] tm:inset-[5rem] tm:top-[160px]
                sm:inset-[4.2rem] sm:top-[70px]

                "
                >
                  <img
                    className="w-[100%] h-[100%] object-cover hover:scale-150 hover:duration-500 duration-500"
                    src="/background/flower/moment1.jpg"
                  />
                </div>
                <div
                  className="relative border-4 border-white h-[180px] w-[250px] em:w-[250px] em:h-[180px] rm:w-[200px] rm:h-[130px] z-50 hover:z-[100]
                rm:inset-10 rm:top-[120px] em:inset-[3.8rem] em:top-[70px] om:inset-[5rem] om:top-[180px] ym:inset-[4.3rem]
                ym:top-[150px] im:inset-[5.6rem] im:top-[180px] um:inset-[5rem] um:top-[180px] tm:inset-[5rem] tm:top-[160px]
                sm:inset-[4.2rem] sm:top-[70px]"
                >
                  <img
                    className="w-[100%] h-[100%] object-cover hover:scale-150 hover:duration-500 duration-500"
                    src="/background/flower/moment2.jpg"
                  />
                </div>
                <div
                  className="relative border-4 border-white h-[180px] w-[250px] em:w-[250px] em:h-[180px] rm:w-[200px] rm:h-[130px] z-50 hover:z-[100]
                rm:inset-10 rm:top-[120px] em:inset-[3.8rem] em:top-[70px] om:inset-[5rem] om:top-[180px] ym:inset-[4.3rem]
                ym:top-[150px] im:inset-[5.6rem] im:top-[180px] um:inset-[5rem] um:top-[180px] tm:inset-[5rem] tm:top-[160px]
                sm:inset-[4.2rem] sm:top-[70px]"
                >
                  <img
                    className="w-[100%] h-[100%] object-cover hover:scale-150 hover:duration-500 duration-500"
                    src="/background/flower/moment1.jpg"
                  />
                </div>
              </div>
            </div>
            {/* Page 8 End */}

            {/* Page 9  */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
                  src="/background/flower/svg6.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-10"
                  src="/background/flower/border.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-20"
                  src="/background/flower/svg8.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover "
                  src="/background/flower/svg9.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div className="relative text-center top-[140px] space-y-4">
                <p className="font-[hills] font-regular text-[#de919b]">
                  Tanda Kasih
                </p>
                <p className="font-[roboto] font-regular text-[0.8rem] px-16 opacity-90">
                  Terimakasih telah menambah kegembiraan pada pernikahan kami
                  dengan kehadiran dan hadiah yang indah dari anda
                </p>
                <div className="relative top-6">
                  <ul className="relative space-y-5">
                    <li className="">
                      <div
                        className="relative z-[20] 
                        flex flex-row justify-center item-center space-x-5 items-center "
                      >
                        <img
                          className="w-[90px] rounded-xl bg-white border-2 border-blue-400 hover:shadow-xl hover:ease-in hover:duration-500"
                          src="/Image/BNI.png"
                          alt="logo BNI"
                        />
                        <div className="text-left text-[0.85rem]">
                          <p>Alferdian Hatami</p>
                          <p id="bni">
                            002394034
                            <button
                              onClick={copyBni}
                              className="mx-[5px] bg-blue-400 w-[24px] rounded-md h-[20px] hover:bg-blue-500  ease-in duration-300"
                            >
                              <i className="bx bx-copy-alt items-center"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="">
                      <div
                        className="relative z-[20] 
                        flex flex-row justify-center item-center space-x-5 items-center"
                      >
                        <img
                          className="w-[90px] rounded-xl bg-white border-2 border-blue-400 hover:shadow-xl hover:ease-in hover:duration-500"
                          src="/Image/BCA.png"
                          alt="logo BCA"
                        />
                        <div className="text-left text-[0.85rem]">
                          <p>Alferdian Hatami</p>
                          <p id="bca">
                            001123543
                            <button
                              onClick={copyBca}
                              className="mx-[5px] bg-blue-400 w-[24px] rounded-md h-[20px] hover:bg-blue-500  ease-in duration-300"
                            >
                              <i className="bx bx-copy-alt items-center"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="">
                      <div
                        className="relative z-[20] 
                        flex flex-row justify-center item-center space-x-5 items-center"
                      >
                        <img
                          className="w-[90px] rounded-xl bg-white border-2 border-blue-400 hover:shadow-xl hover:ease-in hover:duration-500"
                          src="/Image/MANDIRI.png"
                          alt="logo Mandiri"
                        />
                        <div className="text-left text-[0.85rem]">
                          <p>Alferdian Hatami</p>
                          <p id="mandiri">
                            00332434
                            <button
                              onClick={copyMandiri}
                              className="mx-[5px] bg-blue-400 w-[24px] rounded-md h-[20px] hover:bg-blue-500  ease-in duration-300"
                            >
                              <i className="bx bx-copy-alt items-center"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="">
                      <div
                        className="relative z-[20] 
                        flex flex-row justify-center item-center space-x-5 items-center"
                      >
                        <img
                          className="w-[90px] rounded-xl bg-white border-2 border-blue-400 hover:shadow-xl hover:ease-in hover:duration-500"
                          src="/Image/BSI.png"
                          alt="logo Mandiri"
                        />
                        <div className="text-left text-[0.85rem]">
                          <p>Alferdian Hatami</p>
                          <p id="bsi">
                            012344523
                            <button
                              onClick={copyBsi}
                              className="mx-[5px] bg-blue-400 w-[24px] rounded-md h-[20px] hover:bg-blue-500  ease-in duration-300"
                            >
                              <i className="bx bx-copy-alt items-center"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Page 9 End */}

            {/* Page 10 Start */}
            <div
              className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover"
              style={{
                backgroundImage: `url("/background/flower/pink.jpg")`,
              }}
            >
              <div>
                <img
                  className="h-screen md:h-[680px] sm:max-w-sm w-full mx-auto bg-cover z-30"
                  src="/background/flower/svg3.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
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
                  src="/background/flower/flower1.png"
                  style={{ position: "absolute" }}
                  alt=""
                />
              </div>
              <div
                className="relative z-50 px-[40px] text-[2rem] text-center
               rm:top-[180px] tm:top-[220px] em:top-[220px] ym:top-[280px] um:top-[300px]
               im:top-[320px] sm:top-[230px]"
              >
                <p className="font-[hill] leading-[1.8rem] text-[#de919b] font-bold">
                  it's our hope and pleasure to have you on our big day
                </p>
                <p className="font-[hill] text-[1rem] mt-5 text-[#de919b] italic">
                  Kind Regards
                </p>

                <p className="font-[hill] leading-[1.8rem] text-[#de919b] font-bold">
                  Ferdi & Elin
                </p>
              </div>
            </div>
            {/* Page 10 End */}
          </div>
          {/* Page Continues End */}
        </div>
      )}
    </>
  );
};

export default Flower;
