import React from "react";
import Nav from "./template/Nav";
import { Add } from "./Book";
import http from "../http";

function Member() {
  const [data, setData] = React.useState([]);

  // Get data from backend
  React.useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    http.get("/members").then((response) => {
      // save data from backend to state variable
      setData(response?.data ?? []);
    });
  };

  // Handling if button delete clicked
  const handleDelete = async (id) => {
    try {
      // delete books by selected id
      await http.delete(`/members/${id}`);
      fetchingData();
    } catch (error) {
      // handle error
    }
  };

  return (
    <div>
      <Nav></Nav>
      <div className="basepage">
        <Add
          name="Tambah Member"
          buttonName="Tambah Member"
          link="add-member"
        ></Add>
        <table className="table-fixed border-solid border-2 mt-4">
          <thead>
            <tr className=" bg-slate-200">
              <th className="border-solid border-2 p">Name</th>
              <th className="border-solid border-2 p">Address</th>
              <th className="border-solid border-2 p">Phone</th>
              <th className="border-solid border-2 p">Email</th>
              <th className="border-solid border-2 p">Action</th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              data.map((item) => (
                <tr>
                  <td className="border-solid border-2 py-2 px-1 w-[200px]">
                    <p className=" line-clamp-1">{item?.name}</p>
                  </td>
                  <td className="border-solid border-2 py-2 px-1 w-[400px]">
                    <p className=" line-clamp-1">{item?.address}</p>
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    {item?.phone}
                  </td>
                  <td className="border-solid border-2 py-2 px-1 w-[250px]">
                    <p className=" line-clamp-1">{item?.email}</p>
                  </td>
                  <td className="border-solid border-2 py-2 px-1">
                    <div className="flex gap-2">
                      <a
                        href={`/edit-member/${item?.id}`}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => handleDelete(item?.id)}
                        className="px-4 py-2 border-solid border-red-500 border-2 text-red-500 rounded-lg"
                      >
                        Delete
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

export default Member;
