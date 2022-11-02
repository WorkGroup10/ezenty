import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src="../images/ezenty.png"
              alt="Ezenty - Perfumeria"
              width="150"
            ></img>
          </div>
        </div>
        <div className="col-12 col-md-5 mt-2 mt-md-0">
          <div>
            <h2>Perfumería</h2>
            <h1>EZENTY</h1>
            <h3>Tienda Virtual</h3>
          </div>
          <div class="input-group">
            <input
              type="text"
              id="campo_busqueda"
              class="form-control"
              placeholder="¿Que aroma te inspira hoy?"
            ></input>
            <div class="input-group-append">
              <button id="search-btn" class="btn">
                <i
                  class="fa fa-search-plus fa-2x text-white"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center" >
          <div className="ml-4 dropdown d-inline">
            <Link
              to="#!"
              className="btn dropdown-toggle text-white mr-4"
              type="button"
              id="dropDownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={ {backgroundColor:'#771f6a'}}  
            >
            <span>Usuario</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropDownMenu" style={{backgroundColor:'#771f6a'}}>
              <Link className="dropdown-item" to="/usuario">
                Mi Perfil
              </Link>
              <Link className="dropdown-item" to="/administracion">
                Administracion                
              </Link>
              <Link className="dropdown-item" to="/">
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
      </nav>
    </Fragment>
  );
};

export default Header;
