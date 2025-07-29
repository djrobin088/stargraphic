import React from "react";
import Image from "next/image";

const BillHeader = () => {
  return (
    <header className=" md:flex  print:flex justify-between w-full ">
      <div className=" flex gap-2">
        <Image src="/logo.png" width={100} height={100} alt="logo"></Image>
        <div className=" flex  items-center flex-col">
          <div className=" flex gap-2">
            <h1 className="text-primary text-4xl font-Playfair">Star</h1>
            <h1 className=" text-4xl font-bold font-Lora text-primary">
              Graphic
            </h1>
          </div>
          <p className=" text-sm">All kind of printing Solution</p>
        </div>
      </div>
      <div>
        <h2 className=" font-medium print:text-[14px]">
          info.stargraphic6@gmail.com
        </h2>
        <h2 className=" font-medium print:text-[14px]">
          01571425352, 01724600410
        </h2>
        <h2 className=" font-medium print:text-[14px]">
          N.A Chowdhury Road Anderkilla,
          <br /> Chottagram
        </h2>
      </div>
    </header>
  );
};

export default BillHeader;
