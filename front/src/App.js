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
import {Cart} from "./components/users/Cart.js"
import AddProduct from "./components/products/AddProduct";
import Lista from "./components/admins/Lista";
import VentasRealizadas from "./components/admins/VentasRealizadas";

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
            <Route path={"/usuario/carrito"} element={<UsersButtons />} />
            <Route path={"/productos/agregar"} element={<AddProduct />} />
          </Routes>
        </div>
        <div className="container container-fluid">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/Home"} element={<Home />} />
            <Route path={"/productos/:id"} element={<ProductDetails />} />
            <Route path={"/administracion/listadoproductos"} element={<ProductList />} />
            <Route path={"/usuario/carrito"} element={<Cart />} />
            <Route path={"/productos/Lista"} element={<Lista />} />
            <Route path={"/productos/Ventas"} element={<VentasRealizadas />} />
          </Routes>
        </div>
        <Separator />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
