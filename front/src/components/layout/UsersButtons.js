import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const UsersButtons = () => {
  return (
    <Fragment>
      <hr></hr> 
      <div className="btn-toolbar justify-content-between">
      <Link to='/'>
            <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
              <h3>Visualizar Productos</h3>
            </button>                                
          </Link>
          <Link to='/usuario/carrito'>
          <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
              <h3>Carrito de Compras &nbsp;<img
                className="card-image-top mt-auto align-center"
                width="20"
                src="../images/car.png"
                alt="Añadir"
              ></img></h3>
            </button>
          </Link>
          <Link to="/userlogged">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            style={{ backgroundColor: "#771f6a" }}
          >
            <h3>Volver</h3>
          </button>
        </Link>
      </div>
      <hr></hr>
    </Fragment>
  );
};
