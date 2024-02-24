import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinute, setTimerMinute] = useState("00");
  const [timerSecond, setTimerSecond] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Dec 16 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop the timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 text-center mt-10 mx-auto px-5">
        <div className="bg-[#de919b] shadow-2xl rounded-lg p-2">
          <p className="text-white text-[1.7rem]">{timerDays}</p>
          <p className="text-white text-[1rem]">Hari</p>
        </div>
        <div className="bg-[#de919b] shadow-2xl rounded-lg p-2">
          <p className="text-white text-[1.7rem]">{timerHours}</p>
          <p className="text-white text-[1rem]">Jam</p>
        </div>
        <div className="bg-[#de919b] shadow-2xl rounded-lg p-2">
          <p className="text-white text-[1.7rem]">{timerMinute}</p>
          <p className="text-white text-[1rem]">Menit</p>
        </div>
        <div className="bg-[#de919b] shadow-2xl rounded-lg p-2">
          <p className="text-white text-[1.7rem]">{timerSecond}</p>
          <p className="text-white text-[1rem]">Detik</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
