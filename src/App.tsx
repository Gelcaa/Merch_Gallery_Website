import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
