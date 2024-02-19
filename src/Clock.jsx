import React, { useState } from "react";

const Clock = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [ampm, setAmPm] = useState("");

  const updateClock = () => {
    const currentTime = new Date();
    let hoursValue = currentTime.getHours();
    setAmPm(hoursValue >= 12 ? "PM" : "AM");

    hoursValue = hoursValue % 12 || 12;

    setHours(hoursValue.toString().padStart(2, "0"));
    setMinutes(currentTime.getMinutes().toString().padStart(2, "0"));
    setSeconds(currentTime.getSeconds().toString().padStart(2, "0"));
  };

  setInterval(updateClock, 1000);

  return (
    <div className="clock">
      <div className="clockbox">{hours}</div>
      <div className="dots" >:</div>
      <div className="clockbox">{minutes}</div>
      <div className="dots">:</div>
      <div className="clockbox">{seconds}</div>
      <div className="clockbox">{ampm}</div>
    </div>
  );
};

export default Clock;

