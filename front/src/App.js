import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/Home";
import { Separator } from "./components/layout/Separator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/products/ProductDetails.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Separator />
        <Separator />
        <div className="container container-fluid">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/Home"} element={<Home />} />
            <Route path={"/productos/:id"} element={<ProductDetails />} />
          </Routes>
        </div>
        <Separator />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
