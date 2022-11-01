import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/Metadata";
import { useParams } from "react-router-dom";
import { getProductDetails, clearErrors } from "../../actions/productsAction";
import { useAlert } from "react-alert";

export const ProductDetails = () => {
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(getProductDetails(id));
    if (error) {
      /*alert.error(error);
      dispatch(clearErrors());*/
    }
  }, [dispatch, alert, error, id]);

  const aumentaQTY = () =>{
    const contador = document.querySelector('.count')
    if(contador.valueAsNumber>=product.stock) return;

    const cantidad = contador.valueAsNumber + 1
    setQuantity(cantidad)
  }

  const disminuyeQTY = () =>{
    const contador = document.querySelector('.count')
    if(contador.valueAsNumber<=1) return;

    const cantidad = contador.valueAsNumber - 1 
    setQuantity(cantidad)
  }

  return (
    <Fragment>
      {loading ? (
        <MetaData title="Es tu momento de inspirarte..."></MetaData>
      ) : (
        <Fragment>
          <MetaData title={product.nombre}></MetaData>
          <div className="row d-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid">
              <img
                id="imagen_producto"
                className="card-image-top mt-auto align-center"
                src={"../" + product.imagen}
                height="500"
                width="500"
                alt={product.nombre}
              ></img>
            </div>
            <div className="col-12 col-lg-5 mt-5">
              <h1>{product.nombre}</h1>
              <p id="product_id">Identificador {product._id}</p>
              <hr />
              <p id="precio_producto">Precio por Unidad: ${product.precio}</p>
              <hr />
              <h4 className="mt-2">Descripción:</h4>
              <p>{product.descripcion}</p>
              <hr />
              <h5 className="mt-2">Cantidad Disponible:</h5>
              <p>
                <span id="stock" className={product.stock>0 ? 'grayColor':'redColor'}>
                {product.stock} Unidades
                </span>
              </p>
              <hr />
              <p className="mt-2">Agregar unidades al carrito:</p>
              <div className="stockCounter d-inlin">
                <button type="button" className="btn btn-danger minus btn-lg" disabled={product.stock===0} onClick={disminuyeQTY}>-</button>&nbsp;&nbsp;
                <input type="number" className="form-control count d-inline" readOnly value={quantity }></input>&nbsp;&nbsp;
                <button type="button" className="btn btn-danger plus btn-lg" disabled={product.stock===0} onClick={aumentaQTY}>+</button>&nbsp;&nbsp;
                <button type="button" className="btn" id="añadir" disabled={product.stock===0}>
                <img
                    className="card-image-top mt-auto align-center"
                    width="50"
                    src="../images/car.png"
                    alt="Añadir"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
