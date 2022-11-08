import React, { Fragment } from "react";
import MetaData from "../layout/Metadata";

const AddProduct = () => {
  return (
    <Fragment>
      <MetaData title="Esto es una prueba"></MetaData>
      <div className="cajadiv">
        <div className="col-12 col-md-2"></div>
        <Fragment>
          <div className="h1">
            <h1>Nuevo Producto</h1>
          </div>

          <table>
            <div>
              <label htmlFor="name_field">Nombre</label>
              <input type="text" id="name_field" className="form-control" />
            </div>

            <div>
              <label htmlFor="price_field">Precio</label>
              <input type="text" id="price_field" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="description_field">Descripción</label>
              <textarea
                className="form-control"
                id="description_field"
                rows="8"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="stock_field">Inventario</label>
              <input type="number" id="stock_field" className="form-control" />
            </div>
            <Fragment>
              <div className="div2">
                <label>Imagenes</label>

                <div className="custom-file">
                  <input
                    type="file"
                    name="product_images"
                    className="custom-file-input"
                    id="customFile"
                    multiple
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Seleccione Imagen
                  </label>
                </div>
              </div>
            </Fragment>
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              CREAR
            </button>
          </table>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default AddProduct;
