"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const BillDetails = () => {
  const [date] = useState(
    new Date().toLocaleString("en-GB", {
      day: "numeric",
      year: "numeric",
      month: "numeric",
    })
  );
  return (
    <>
      <h1 className=" text-5xl font-bold">BILL</h1>
      <h2 className=" flex items-end justify-end w-full px-12 font-medium print:text-[14px]">
        Date:-{date}
      </h2>
      <div className="w-full  px-2 justify-around flex flex-col md:flex-row print:flex-row gap-2 md:gap-0 print:flex">
        <div className="flex flex-col md:flex-row md:w-1/2 md:items-center print:items-center gap-2 print:flex-row">
          <h2 className="font-medium print:text-[14px]">Name:</h2>
          <Input
            type="text"
            placeholder="Customer Name"
            className="w-full md:w-auto focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
          />
        </div>
        <div className="flex print:flex-row flex-col md:flex-row md:w-1/2 md:items-center print:items-center gap-2">
          <h2 className="font-medium print:text-[14px]">Address:</h2>
          <Input
            type="text"
            placeholder="Customer Address"
            className="w-full md:w-auto focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default BillDetails;
