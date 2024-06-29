import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Book } from "./pages/Book";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Peminjaman from "./pages/Peminjaman";
import AddPeminjaman from "./pages/AddPeminjaman";
import Member from "./pages/Member";
import AddMember from "./pages/AddMember";
import Report from "./pages/Report";
import EditMember from "./pages/EditMember";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/book" element={<Book />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/peminjaman" element={<Peminjaman />} />
        <Route path="/add-peminjaman" element={<AddPeminjaman />} />
        <Route path="/member" element={<Member />} />
        <Route path="/edit-member/:id" element={<EditMember />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
