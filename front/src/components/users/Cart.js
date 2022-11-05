import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

export const Cart = () => {
  const { loading, productos, error } = useSelector(state => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
    alert.success("OK");
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <h2>Tu Eleccion te espera...</h2>
      ) : (
        <Fragment>
          <MetaData title="Tu inspiracion"></MetaData>
          <h1 id="encabezado_productos" className="container mt-5 text-center">
            Tu seleccion
          </h1>
          <section id="productos" className="container mt-5">
            <table class="table table-bordered">
              <thead style={{ backgroundColor: "#771f6a", color: "white" }}>
                <tr>
                  <th scope="col">Imagen</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#D888D2", color: "white" }}>
                {productos &&
                  productos.map((producto) => (
                    <tr>
                      <th>
                        <img
                          id="imagen_producto"
                          className="card-image-top mt-auto align-center"
                          src={"../" + producto.imagen}
                          alt={producto.nombre}
                          width="60"
                          style={{alignSelf:'bottom'}}
                        ></img>
                      </th>
                      <th>1</th>
                      <th>{producto.nombre}</th>
                      <th style={{textAlign:'right'}}>${producto.precio}</th>
                      <th style={{textAlign:'right'}}>${producto.precio}</th>
                    </tr>
                  ))}
                <tr style={{textAlign:'right'}} type="money">
                  <th colSpan={4} >Total</th>
                  <th scope="col">$1.000.000</th>
                </tr>
              </tbody>
            </table>
          </section>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <Link to='/'>
                <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
                <h3>Finalizar Compra</h3>
                </button>                                
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/usuario/'>
            <button type="button" class="btn btn-outline-secondary btn-lg" style={{backgroundColor:'#771f6a'}}>
                <h3>Cancelar</h3>
                </button>
            </Link>
            <hr></hr>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
