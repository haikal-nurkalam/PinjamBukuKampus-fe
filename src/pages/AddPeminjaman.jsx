import React from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";

function AddPeminjaman() {
  const navigate = useNavigate();
  const [idBook, setIdBook] = React.useState("");
  const [idMember, setIdMember] = React.useState("");
  const [startLoanDate, setStartLoanDate] = React.useState("");
  const [endLoanDate, setEndLoanDate] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle storing data to backend
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await http.post("/transactions", {
        bookId: parseInt(idBook),
        memberId: parseInt(idMember),
        statusId: 2,
        loanStartDate: startLoanDate,
        loanEndDate: endLoanDate,
      });

      navigate("/peminjaman");

      setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-x-5 w-full p-5 bg-slate-900 text-white">
        <a href="/peminjaman">Back</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column justify-center items-center ">
          <div className="flex flex-col my-10 w-[800px] gap-6">
            <p className="text-2xl">Add peminjaman</p>
            <div className="flex flex-col gap-2">
              <label for="idbuku" className="text-sm font-medium text-gray-900">
                Id Buku
              </label>
              <input
                type="number"
                className="border-solid border-2 py-2 px-4"
                placeholder="Input Id Buku"
                defaultValue={idBook}
                onChange={(e) => setIdBook(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="idmember"
                className="text-sm font-medium text-gray-900"
              >
                Id Member
              </label>
              <input
                type="number"
                className="border-solid border-2 py-2 px-4"
                placeholder="Input Id Member"
                defaultValue={idMember}
                onChange={(e) => setIdMember(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="tanggalPeminjaman"
                className="text-sm font-medium text-gray-900"
              >
                Tanggal Peminjaman
              </label>
              <input
                type="date"
                className="border-solid border-2 py-2 px-4"
                placeholder="Input Tanggal Peminjaman"
                defaultValue={startLoanDate}
                onChange={(e) => setStartLoanDate(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="tanggalPengembalian"
                className="text-sm font-medium text-gray-900"
              >
                Tanggal Pengembalian
              </label>
              <input
                type="date"
                className="border-solid border-2 py-2 px-4"
                placeholder="Input Tanggal Pengembalian"
                defaultValue={endLoanDate}
                onChange={(e) => setEndLoanDate(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-slate-800 rounded-lg text-white"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Save Peminjaman"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPeminjaman;
