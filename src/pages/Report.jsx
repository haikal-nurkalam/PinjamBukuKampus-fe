import React from "react";
import Nav from "./template/Nav";

function Report() {
  return (
    <div>
      <Nav></Nav>
      <div className="basepage mb-6">
        <div className="flex mx-12 bg-slate-200 mt-4 h-56 items-center justify-center rounded-lg">
          <p className=" text-4xl font-medium">Welcome to Report</p>
        </div>
        <div className="flex flex-col mx-12 mt-4">
          <p className="text-xl">Laporan Peminjaman Buku</p>
          <div className="flex justify-items-stretch gap-x-8 mt-4">
            <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
              <p className="text-lg text-gray-500">Total Peminjaman Buku</p>
              <p className="text-2xl font-bold text-gray-600">600</p>
            </div>
            <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
              <p className="text-lg text-gray-500">Total Pengembalian Buku</p>
              <p className="text-2xl font-bold text-gray-600">600</p>
            </div>
            <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
              <p className="text-lg text-gray-500">
                Buku Paling Banyak Dipinjam
              </p>
              <p className="text-2xl font-bold text-gray-600">600</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-12 mt-4">
          <p className="text-xl">Laporan Buku</p>
          <div className="flex justify-items-stretch gap-x-8 mt-4">
            <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
              <p className="text-lg text-gray-500">Total Buku</p>
              <p className="text-2xl font-bold text-gray-600">600</p>
            </div>
            <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
              <p className="text-lg text-gray-500">Total Available Buku</p>
              <p className="text-2xl font-bold text-gray-600">600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
