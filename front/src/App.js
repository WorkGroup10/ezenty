import "./App.css";
import React , {useEffect } from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/Home";
import { Separator } from "./components/layout/Separator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/products/ProductDetails.js";
import { AdminButtons } from "./components/layout/AdminButtons.js";
import { ProductList } from "./components/admins/ProductList.js";
import { UsersButtons } from "./components/layout/UsersButtons";
import { Cart } from "./components/users/Cart.js";
import AddProduct from "./components/products/AddProduct";
import Lista from "./components/admins/Lista";
import VentasRealizadas from "./components/admins/VentasRealizadas";
import { Login } from "./components/users/Login";
import { Register } from "./components/users/Register";
import { loadUser } from './actions/userActions';
import store from "./store"
import { useSelector } from 'react-redux';
import { Profile } from "./components/users/Profile";
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        <Header />
        <Separator />
        <div className="container container-fluid">
          <Routes>
            <Route path={"/usuario/"} element={<UsersButtons />} />
            <Route path={"/usuario/carrito"} element={<UsersButtons />} />

            {user && user.role === "admin" && (<Route path={"/userlogged"} element={<AdminButtons />} />)}
            {user && user.role === "user" && (<Route path={"/userlogged"} element={<UsersButtons />} />)}

            
            {/*Ruta protegida*/}
            <Route path={"/administracion"} element={<ProtectedRoute isAdmin={true}><AdminButtons /></ProtectedRoute>} />
            <Route path={"/administracion/listadoproductos"} element={<ProtectedRoute isAdmin={true}><AdminButtons /></ProtectedRoute>} />
            <Route path={"/administracion/agregar"} element={<ProtectedRoute isAdmin={true}><AdminButtons /></ProtectedRoute>} />
            <Route path={"/administracion/Ventas"} element={<ProtectedRoute isAdmin={true}><AdminButtons /></ProtectedRoute>} />            

          </Routes>
        </div>
        <div className="container container-fluid">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/Home"} element={<Home />} />
            <Route path={"/search/:keyword"} element={<Home />} />
            <Route path={"/productos/:id"} element={<ProductDetails />} />
            <Route path={"/usuario/carrito"} element={<Cart />} />
            <Route path={"/productos/Lista"} element={<Lista />} />
 
            <Route path={"/login"} element={<Login />} />
            <Route path={"/logup"} element={<Register />} />
            <Route path={"/userlogged"} element={<Profile />} />

            {/*Ruta protegida*/}
            
            <Route path={"/administracion/listadoproductos"} element={<ProtectedRoute isAdmin={true}><ProductList /></ProtectedRoute>} />
            <Route path={"/administracion/Ventas"} element={<ProtectedRoute isAdmin={true}><VentasRealizadas /></ProtectedRoute>} />
            <Route path={"/administracion/agregar"} element={<ProtectedRoute isAdmin={true}><AddProduct /></ProtectedRoute>} />

          </Routes>
        </div>
        <Separator />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
