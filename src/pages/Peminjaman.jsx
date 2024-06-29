import React from "react";
import Nav from "./template/Nav";
import { Add } from "./Book";
import http from "../http";
import moment from "moment";

function Peminjaman() {
  const [data, setData] = React.useState([]);
  const [book, setBook] = React.useState([]);
  const [member, setMember] = React.useState([]);

  // Get data from backend
  React.useEffect(() => {
    fetchingData();

    http.get("/books").then((response) => {
      // save data from backend to state variable
      setBook(response?.data ?? []);
    });

    http.get("/members").then((response) => {
      // save data from backend to state variable
      setMember(response?.data ?? []);
    });
  }, []);

  const fetchingData = () => {
    http.get("/transactions").then((response) => {
      // save data from backend to state variable
      setData(response?.data ?? []);
    });
  };

  // Handling if button delete clicked
  const handleReturn = async (id) => {
    try {
      // delete books by selected id
      const {
        data: { id: selectedId },
        data: dataSelectedData,
      } = await http.get(`/transactions/${id}`);

      await http.patch(`/transactions/${selectedId}`, {
        ...dataSelectedData,
        statusId: 1,
        loanEndDate: moment().format("YYYY-MM-DD"),
      });
      fetchingData();
    } catch (error) {
      // handle error
    }
  };

  return (
    <div>
      <Nav />
      <div className="basepage">
        <Add
          link="add-peminjaman"
          name="Tambah Peminjaman"
          buttonName="Tambah Peminjaman"
        ></Add>
        <table className="table-fixed border-solid border-2 mt-4">
          <thead>
            <tr className=" bg-slate-200">
              <th className="border-solid border-2 p">Book</th>
              <th className="border-solid border-2 p">Member</th>
              <th className="border-solid border-2 p">Member ID</th>
              <th className="border-solid border-2 p">Tanggal Peminjaman</th>
              <th className="border-solid border-2 p">Tanggal Pengembalian</th>
              <th className="border-solid border-2 p">Status</th>
              <th className="border-solid border-2 p">Action</th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              data.map((item) => (
                <tr>
                  {console.log(item?.memberId)}
                  <td className="border-solid border-2 py-2 px-1 w-[300px]">
                    <p className=" line-clamp-1">
                      {book?.find((child) => child?.id === item?.bookId)?.name}
                    </p>
                  </td>
                  <td className="border-solid border-2 py-2 px-1 w-[200px]">
                    <p className=" line-clamp-1">
                      {
                        member?.find((child) => child?.id === item?.memberId)
                          ?.name
                      }
                    </p>
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    {item?.memberId}
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    {item?.loanStartDate}
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    {item?.loanEndDate}
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    {item?.statusId === 1 ? "Available" : "On Loan"}
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReturn(item?.id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                      >
                        Pengembalian
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Peminjaman;
