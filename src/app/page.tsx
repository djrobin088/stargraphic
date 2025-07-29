"use client";
import BillDetails from "@/components/BillDetails";
import BillHeader from "@/components/BillHeader";
import BillTable from "@/components/BillTable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { startTransition, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "Bill",
    pageStyle: `
        @page {
          size: A4 portrait;
          margin: 0;
        }
        
        @media print {
          body {
            font-size: 10px;
            margin: 0;
            padding: 0;
          }
          
          .print-content {
            width: 100vw;
            height: 100vh;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 20px 0 20px;
            
            padding: 0;
          }
          
          .rotated-table {
            transform: rotate(90deg);
            transform-origin: center center;
            width: 11.7in;
            height: 8.3in;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0.1in;
            
          }
          
          .rotated-table > * {
            max-width: 100%;
            flex-shrink: 0;
          }
          
          .rotated-table .title-section {
            margin-bottom: 0.1in;
            font-size: 16px;
          }
          
          .details-section {
            left: 0;
            font-size: 16px;
            width: 100%;
            }
            
            .table-section {
            margin-bottom: 1in; 
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .rotated-table .signature-section {
            margin-top: 0.1in;
            width: 100%;
          }
          
          .rotated-table .signature-section h1 {
            font-size: 10px;
          }
          
          .no-print {
            display: none !important;
          }
          
          /* Remove page breaks to fit on one page */
          * {
            page-break-before: auto;
            page-break-after: auto;
            page-break-inside: auto;
          }
        }
      `,
    onBeforePrint: async () => {
      console.log("Preparing to print...");
    },
    onAfterPrint: () => {
      console.log("Print completed");
    },
  });
  const handleprinterequest = () => {
    startTransition(() => {
      return handlePrint();
    });
  };
  return (
    <div
      ref={contentRef}
      className=" m-2  bdr flex flex-col items-center justify-center bdr h-screen"
    >
      <BillHeader></BillHeader>
      <BillDetails></BillDetails>
      <BillTable></BillTable>
      <Button
        className="no-print"
        onClick={handleprinterequest}
        size={"lg"}
        variant={"destructive"}
      >
        Print Bill
      </Button>
    </div>
  );
}
