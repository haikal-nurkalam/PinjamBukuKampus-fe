import React from "react";
import Nav from "./template/Nav";

function Dashboard() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex mx-12 bg-slate-200 mt-4 h-56 items-center justify-center rounded-lg">
        <p className=" text-4xl font-medium">Welcome to Perpustakaan Admin</p>
      </div>
      <div className="flex flex-col mx-12 mt-4">
        <p className="text-xl text-gray-600">You're simple report</p>
        <div className="flex justify-items-stretch gap-x-8 mt-4">
          <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
            <p className="text-lg text-gray-500">Total Book</p>
            <p className="text-2xl font-bold text-gray-600">600</p>
          </div>
          <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
            <p className="text-lg text-gray-500">Total Book</p>
            <p className="text-2xl font-bold text-gray-600">600</p>
          </div>
          <div className="flex flex-col gap-8 items-center bg-slate-100 py-12 rounded-lg w-full">
            <p className="text-lg text-gray-500">Total Book</p>
            <p className="text-2xl font-bold text-gray-600">600</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
