import React, { useState, useEffect } from "react";

const CouponBanner: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours < 10 ? "0" : ""}${hours} h ${minutes < 10 ? "0" : ""}${minutes} m ${seconds < 10 ? "0" : ""}${seconds} s`;
  };

  return (
    <div>
      <p>Ends in {formatTime(countdown)}</p>
    </div>
  );
};

export default CouponBanner;