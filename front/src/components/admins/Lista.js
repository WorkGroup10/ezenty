import React, { Fragment, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/Metadata'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productsAction'
import {Link } from "react-router-dom"

export const Lista = () => {
    const { loading, productos, error} = useSelector(state=> state.products)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getProducts());
    }, [dispatch])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'actions',
                },
            ],
            rows: []
        }

        productos.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                stock: product.stock,
                actions: <Fragment>
                    <Link to={`/productos/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-eye"></i>
                    </Link><Link to="/" className="btn btn-warning py-1 px-2">
                    <i class="fa fa-pencil"></i>
                    </Link>

                    <Link to="/" className="btn btn-danger py-1 px-2">
                        <i className="fa fa-trash"></i>
                    </Link>
                </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Lista de Ventas'}></MetaData>
            <div className="row">
                <div className="col-12 col-md-12">
                    <Fragment>
                        <h1 className="my-5">Lista de Ventas</h1>

                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}
export default Lista