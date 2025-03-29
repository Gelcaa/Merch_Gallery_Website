import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/Products";
import About from "./pages/About";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
