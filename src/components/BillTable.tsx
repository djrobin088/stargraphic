"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface BillItem {
  id: number;
  description: string;
  size: string;
  quantity: number;
  unitPrice: number;
}

const BillTable = () => {
  const [items, setItems] = useState<BillItem[]>([
    {
      id: 1,
      description: "",
      size: "",
      quantity: 0,
      unitPrice: 0,
    },
  ]);
  const [advancedAmount, setAdvancedAmount] = useState<number>(0);

  const addNewRow = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        description: "",
        size: "",
        quantity: 0,
        unitPrice: 0,
      },
    ]);
  };

  const handleInputChange = (
    id: number,
    field: keyof BillItem,
    value: string | number
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const calculateTotal = (quantity: number, unitPrice: number) => {
    return quantity * unitPrice;
  };

  const calculateGrandTotal = () => {
    return items.reduce(
      (total, item) => total + calculateTotal(item.quantity, item.unitPrice),
      0
    );
  };

  const calculateBalance = () => {
    return calculateGrandTotal() - advancedAmount;
  };

  return (
    <div className="bdr w-full mt-5">
      <Table className="border">
        <TableHeader className="bg-primary">
          <TableRow>
            <TableHead className="w-2/4 text-white print:text-black  border">
              Description
            </TableHead>
            <TableHead className="w-1/12 text-white print:text-black border">
              Size
            </TableHead>
            <TableHead className="w-1/12 text-white print:text-black border">
              Quantity
            </TableHead>
            <TableHead className="w-1/12 text-white print:text-black border">
              Unit Price
            </TableHead>
            <TableHead className="w-1/12 text-white print:text-black border text-left">
              Taka
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="w-2/4 border">
                <Input
                  type="text"
                  value={item.description}
                  onChange={(e) =>
                    handleInputChange(item.id, "description", e.target.value)
                  }
                  placeholder="Product name"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
                />
              </TableCell>
              <TableCell className="w-1/12 border">
                <Input
                  type="text"
                  value={item.size}
                  onChange={(e) =>
                    handleInputChange(item.id, "size", e.target.value)
                  }
                  placeholder="Size"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
                />
              </TableCell>
              <TableCell className="w-1/12 border">
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleInputChange(
                      item.id,
                      "quantity",
                      parseInt(e.target.value)
                    )
                  }
                  placeholder="0"
                  min="0"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
                />
              </TableCell>
              <TableCell className="w-1/12 border">
                <Input
                  type="number"
                  value={item.unitPrice}
                  onChange={(e) =>
                    handleInputChange(
                      item.id,
                      "unitPrice",
                      parseInt(e.target.value) || 0
                    )
                  }
                  placeholder="0"
                  min="0"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
                />
              </TableCell>
              <TableCell className="w-1/12 border text-left">
                {calculateTotal(item.quantity, item.unitPrice)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 w-full justify-center flex">
        <Button onClick={addNewRow} className={cn("no-print")}>
          Add Item
        </Button>
      </div>

      {/* Footer Section */}
      <div className="mt-4 bdr flex flex-col items-end">
        <div className="flex justify-end w-full  ">
          <div className="w-1/2  text-right pr-2 font-medium print:text-[14px]">
            Total:
          </div>
          <div className="w-1/6 text-center pr-4 font-medium print:text-[14px]">
            {calculateGrandTotal()}
          </div>
        </div>
        <div className="flex justify-end items-center w-full  ">
          <div className="w-1/2  text-right pr-2 font-medium print:text-[14px]">
            Advanced:
          </div>
          <div className="w-1/6 text-right pr-4">
            <Input
              type="number"
              value={advancedAmount}
              onChange={(e) => setAdvancedAmount(parseInt(e.target.value))}
              placeholder="0"
              min="0"
              className=" text-center font-medium print:text-[14px] focus-visible:ring-0 focus-visible:ring-offset-0 print:border-0 print:shadow-none print:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-end w-full  ">
          <div className="w-1/2  text-right pr-2 font-medium print:text-[14px]">
            Balance:
          </div>
          <div className="w-1/6 text-center pr-4 font-medium print:text-[14px]">
            {calculateBalance()}
          </div>
        </div>
      </div>
      <div className="signature-section mt-10">
        <div className="flex justify-between w-full px-4">
          <div className="text-center">
            <div className="border-t border-black w-full"></div>
            <h1 className="font-medium print:text-[14px]">For. Star Graphic</h1>
          </div>
          <div className="text-center">
            <div className="border-t border-black w-full"></div>
            <h1 className="font-medium print:text-[14px]">
              Customer Signature
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillTable;
