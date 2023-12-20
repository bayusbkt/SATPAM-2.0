import React, { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Mengatur interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(intervalId);
  }, []); // [] menyebabkan efek ini hanya dijalankan sekali saat komponen dipasang

  // Mendapatkan jam, menit, dan detik dari objek waktu
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Format waktu dengan menambahkan nol di depan jika kurang dari 10
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  return (
    <div className="bg-[#FFCD4B] hidden sm:h-16 md:h-20 ml-2 sm:flex items-center px-8 sm:px-10 md:px-12 rounded-xl text-xl md:text-2xl text-white font-bold font-manrope">
      <p>{formattedTime}</p>
    </div>
  );
};

export default Time;
