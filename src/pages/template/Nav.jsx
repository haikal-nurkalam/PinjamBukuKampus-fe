import React from "react";

function Nav() {
  return (
    <div className="flex items-center justify-center gap-x-5 w-full p-5 bg-slate-900 text-white">
      <a href="/" className="p-nav">
        Dashboard
      </a>
      <a href="/book" className="p-nav">
        Book
      </a>
      <a href="/peminjaman" className="p-nav">
        Peminjaman
      </a>
      <a href="/member" className="p-nav">
        Member
      </a>
      <a href="/report" className="p-nav">
        Report
      </a>
    </div>
  );
}

export default Nav;
