import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const UsersButtons = () => {
  return (
    <Fragment>
      <hr></hr> 
          <Link to='/'>
            <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
              <h3>Visualizar Productos</h3>
            </button>                                
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
            <h3>Carrito de Compras</h3>
          </button>
      <hr></hr>
    </Fragment>
  );
};
