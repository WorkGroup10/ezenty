import { Fragment } from "react";


export function App() {
    return (
    <Fragment>
        <h1>Ezenty</h1>
        <h2>Tienda Virtual</h2>
        <button onClick={Activar}>Activar botón</button>
    </Fragment>
    )
}

function Activar(){
    alert("El boton ha sido activado");
}