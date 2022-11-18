import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const AdminButtons = () => {
  return (
    <Fragment>
      <hr></hr> 
      <Link to='/productos/agregar'>
      <button type="button" class="btn btn-outline-secondary btn-lg" style={ {backgroundColor:'#771f6a'}}>
            <h3>Ingresar Productos</h3>
      </button>                             
      </Link>
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/administracion/listadoproductos'>
        <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
          <h3>Visualizar Productos</h3>
        </button>                                
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/productos/Ventas'>
        <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
          <h3>Visualizar Ventas</h3>
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/administracion'>
        <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
          <h3>Volver</h3>
        </button>                                
      </Link>

      <hr></hr>
    </Fragment>
  );
};
