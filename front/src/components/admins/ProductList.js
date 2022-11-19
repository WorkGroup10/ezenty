import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import { useParams, Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";

export const ProductList = () => {
  const params = useParams();
  const keyword = params.keyword;
  const [precio] = useState([100, 1000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, productos, error, resPerPage, productsCount } = useSelector(
    (state) => state.products
  );
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts(currentPage, keyword, precio));
  }, [dispatch, alert, error, currentPage, keyword, precio]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Fragment>
      {loading ? (
        <h2>Inspirandonos...</h2>
      ) : (
        <Fragment>
          <MetaData title="Fragancias que inspiran"></MetaData>
          <h1 id="encabezado_productos" className="container mt-5 text-center">
            Nuestras Fragancias
          </h1>
          <section id="productos" className="container mt-5">
            <div className="row" style={{ color: "#771f6a " }}>
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
                        style={{ backgroundColor: "#771f6a", color: "white" }}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              style={{ backgroundColor: "#771f6a" }}
              class="pagination"
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={">"}
              prevPageText={"<"}
              firstPageText={"<<"}
              lastPageText={">>"}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductList;
