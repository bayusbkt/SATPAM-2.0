import React from "react";

const Datetime = () => {
  const showdate = new Date();
  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const monthsOfYear = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayOfWeek = daysOfWeek[showdate.getDay()];
  const dayOfMonth = showdate.getDate();
  const month = monthsOfYear[showdate.getMonth()];
  const year = showdate.getFullYear();

  const todayDate = `${dayOfWeek}`;
  const displayDate = `${dayOfMonth} ${month} ${year}`;

  return (
    <div className="flex flex-col font-manrope">
      <div className="text-lg sm:text-xl md:text-2xl font-bold md:pb-2">{todayDate}</div>
      <div className="text-sm">{displayDate}</div>
    </div>
  );
};

export default Datetime;
