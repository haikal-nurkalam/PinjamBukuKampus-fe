import React from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";

function AddMember() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle storing data to backend
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await http.post("/members", {
        code: new Date().getTime(),
        name: name,
        email: email,
        phone: phone,
        address: address,
      });

      navigate("/member");

      setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-x-5 w-full p-5 bg-slate-900 text-white">
        <a href="/member">Back</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column justify-center items-center ">
          <div className="flex flex-col my-10 w-[800px] gap-6">
            <p className="text-2xl">Add member</p>
            <div className="flex flex-col gap-2">
              <label for="name" className="text-sm font-medium text-gray-900">
                Nama
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tambah nama"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="address"
                className="text-sm font-medium text-gray-900"
              >
                Alamat
              </label>
              <input
                type="text"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tambah alamat"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={address}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label for="phone" className="text-sm font-medium text-gray-900">
                Nomor Telepon
              </label>
              <input
                type="number"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tambah Nomor Telepon"
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={phone}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label for="email" className="text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                className="border-solid border-2 py-2 px-4"
                placeholder="Tambah Email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={email}
              ></input>
            </div>
            <button
              className="w-full py-4 bg-slate-800 rounded-lg text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Save Member"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
