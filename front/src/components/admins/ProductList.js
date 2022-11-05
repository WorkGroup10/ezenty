import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

export const ProductList = () => {
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
        <h2>Cargando Productos...</h2>
      ) : (
        <Fragment>
          <MetaData title="Lista de Productos"></MetaData>
          <h1 id="encabezado_productos" className="container mt-5 text-center">
            Productos Registrados
          </h1>
          <section
            id="productos"
            className="container mt-5"
            style={{ color: "#771f6a " }}
          >
            <div className="row" style={{ margin:'0 auto'}}>
              {productos &&
                productos.map((producto) => (
                  <div
                    key={producto._id}
                    className="col-sm-12 col-md-6 col-lg-3 my-3"
                  >
                    <div className="card rounded background-false">
                      <img
                        id="imagen_producto"
                        className="card-image-top mt-auto align-center"
                        src={"../" + producto.imagen}
                        alt={producto.nombre}
                        style={{ backgroundColor: "#771f6a" }}
                      ></img>
                      <div
                        className="card-body d-flex flex-column"
                        style={{ backgroundColor: "#fdb9ea" }}
                      >
                        <h5
                          className="card-text text-center"
                          id="titulo_producto"
                        >
                          <Link
                            to={`productos/${producto._id}`}
                            style={{ color: "#771f6a " }}
                          >
                            {producto.nombre}
                          </Link>
                        </h5>
                        <p
                          className="card-text text-center"
                          id="precio_producto"
                        >
                          ${producto.precio}
                        </p>
                        <p
                          className="card-text text-center"
                          id="precio_producto"
                        >
                          Stock: {producto.stock} Unidades
                        </p>
                      </div>
                        <button
                          type="button"
                          className="btn btn-light btn-block"
                          id="añadir"
                          style={{ backgroundColor: "#771f6a", color:'white'}}>
                          Editar
                        </button>
                    </div>

                  </div>
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductList;
