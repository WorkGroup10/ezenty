import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const AdminButtons = () => {
  return (
    <Fragment>
      <hr></hr>
      <div className="btn-toolbar justify-content-between">
        <Link to="/administracion/agregar">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            style={{ backgroundColor: "#771f6a" }}
          >
            <h3>Ingresar Productos</h3>
          </button>
        </Link>
        <Link to="/administracion/listadoproductos">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            style={{ backgroundColor: "#771f6a" }}
          >
            <h3>Visualizar Productos</h3>
          </button>
        </Link>
        <Link to="/administracion/Ventas">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            style={{ backgroundColor: "#771f6a" }}
          >
            <h3>Visualizar Ventas</h3>
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
