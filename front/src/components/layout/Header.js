import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () =>{
      dispatch(logout());
  }
  return (
    <Fragment>
      <nav className="navbar">
        <div className="col-12 col-md-2">
          <div className="navbar-brand">
            <img
              src="../images/ezenty.png"
              alt="Ezenty - Perfumeria"
              width="150"
            ></img>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-2 mt-md-0">
          <div>
            <h2>Perfumería</h2>
            <h1>EZENTY</h1>
            <h3>Tienda Virtual</h3>
          </div>
          {/*Aqui va buscar*/}
          <Search />
        </div>
        {user ? (
          <div className="col-12 col-md-4  mt-4 mt-md-0 text-center">
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-3"
                type="button"
                id="dropDownMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                color="#771f6a"
                style={{ backgroundColor: "#771f6a" }}
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.nombre}
                    className="rounded-circle"
                  ></img>
                </figure>
                <span>{user && user.nombre}</span>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenu"
                style={{ backgroundColor: "#771f6a", color: "white" }}
              >
                <Link
                  className="dropdown-item"
                  to="/userlogged"
                  style={{ color: "white" }}
                >
                  Mi Perfil
                </Link>
                {/*Preguntamos el rol de quien esta online*/}
                {user && user.role === "admin" && (
                  <Link
                    className="dropdown-item"
                    to="/administracion"
                    style={{ color: "white" }}
                  >
                    Administracion
                  </Link>
                )}
                {/*Preguntamos el rol de quien esta online*/}
                {user && user.role === "user" && (
                  <Link
                    className="dropdown-item"
                    to="/userlogged"
                    style={{ color: "white" }}
                  >
                    Pedidos
                  </Link>
                )}

                <Link
                  className="dropdown-item"
                  to="/"
                  style={{ color: "white" }}
                  onClick={logoutHandler}
                >
                  Cerrar Sesion
                </Link>
              </div>
            </div>
            &nbsp;
            <img
              className="card-image-top mt-auto align-center"
              width="45"
              src="../images/car.png"
              alt="Añadir"
            ></img>
            &nbsp;
            <span className="ml-1" id="cart_count">
              2
            </span>
          </div>
        ) : (
          <Link to="/login">
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg"
              style={{ backgroundColor: "#771f6a", border: "#771f6a" }}
            >
              <h3>Iniciar Sesion</h3>
            </button>
          </Link>
        )}
      </nav>
    </Fragment>
  );
};

export default Header;
