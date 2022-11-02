import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/Home";
import { Separator } from "./components/layout/Separator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/products/ProductDetails.js";
import {AdminButtons} from "./components/layout/AdminButtons.js"
import {ProductList} from "./components/admins/ProductList.js"
import {UsersButtons} from "./components/layout/UsersButtons"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Separator /> 
        <div className="container container-fluid">
          <Routes>
            <Route path={"/administracion"} element={<AdminButtons />} />
            <Route path={"/administracion/listadoproductos"} element={<AdminButtons />} />
            <Route path={"/usuario/"} element={<UsersButtons />} />
          </Routes>
        </div>
        <div className="container container-fluid">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/Home"} element={<Home />} />
            <Route path={"/productos/:id"} element={<ProductDetails />} />
            <Route path={"/administracion/listadoproductos"} element={<ProductList />} />
          </Routes>
        </div>
        <Separator />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
