"use client";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface CardProps {
    number: string;
    title: React.ReactNode;
    sub: string;
    align: string;
}

const ThirdCard: React.FC<CardProps> = ({ number, title, sub, align}) => {
  const isMobile = useMediaQuery("(max-width:995px)");
  return (
    <>
      <div className={`flex justify-center ${isMobile? '' : align} h-[405px] w-[250px]`}>
        <div className={`flex flex-col rounded-cardBorderRadius bg-white shadow-lg px-[24px] py-[48px] `}>
          <h1 className="text-left font-extrabold text-5xl mb-5 text-gradient">{number}</h1>
          <h1 className="text-left text-wrap font-bold text-3xl mb-5 line-clamp-2 ">{title}</h1>
          <h5 className="text-left text-base text-[#8F8A96] mb-1">{sub}</h5>
        </div>
      </div>
    </>
  );
};

export default ThirdCard;
