import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import FavList from "./components/FavList/FavList.js";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/list" />
        <Route path="/favourite" />
        <Route path="/subsicripe" />


      </Routes>
    </>
  );
}