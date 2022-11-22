import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

function Countdown({ onHideCountdown }) {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [showCountDown, setShowCountDown] = useState(false);

  const startCountdown = () => {
    let interval = setInterval(() => {
      const endDate = new Date("Dec 25, 2022");
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      const daysCount = Math.floor(totalSeconds / 3600 / 24);
      const hoursCount = Math.floor(totalSeconds / 3600) % 24;
      const minutesCount = Math.floor(totalSeconds / 60) % 60;
      const secondsCount = Math.floor(totalSeconds) % 60;

      if (totalSeconds < 1) {
        setCountdownEnded(true);
        clearInterval(interval);
        // do something
      } else {
        setDays(`${format(daysCount)}`);
        setHours(`${format(hoursCount)}`);
        setMinutes(`${format(minutesCount)}`);
        setSeconds(`${format(secondsCount)}`);
      }
    }, 1000);
  };

  function format(t) {
    return t < 10 ? `0${t}` : t;
  }

  useEffect(() => {
    startCountdown();
  }, []);

  return (
    <>
      <div className="w-screen h-1/5 bg-yellow-400 p-1 ">
        <div className="countDown text-3xl flex justify-end ">
          <AiOutlineClose onClick={onHideCountdown} />
        </div>
        <div className=" w-4/5 h-20 m-auto">
          <div className=" flex sm:justify-between items-center justify-center">
            <h1 className="  text-purple-700 text-3xl text-center">
              {!countdownEnded ? "Christmas Sale!" : "Sale Ended!!!"}
            </h1>
            <div className="w-60 p-2 h-16 bg-purple-700 flex justify-between items-center">
              <span className="flex flex-col items-center">
                <p className="text-xl text-white">{days}</p>
                <small className="bg-red-600 text-white p-1 rounded-md">
                  Days
                </small>
              </span>
              <span className="flex flex-col items-center">
                <p className="text-xl text-white">{hours}</p>
                <small className="bg-red-600 text-white p-1 rounded-md">
                  Hours
                </small>
              </span>
              <span className="flex flex-col items-center">
                <p className="text-xl text-white">{minutes}</p>
                <small className="bg-red-600 text-white p-1 rounded-md">
                  Minutes
                </small>
              </span>
              <span className="flex flex-col items-center">
                <p className="text-xl text-white">{seconds}</p>
                <small className="bg-red-600 text-white p-1 rounded-md">
                  second
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countdown;
