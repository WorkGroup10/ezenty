import React, { Fragment, useEffect } from "react";



export const VentasRealizadas = () =>{
    return(
     <Fragment>
        
        <div class= "tex">
            <h1>VENTAS</h1>
        </div>
        <table className="tabl" align="center">
            <thead style={{ backgroundColor: "#771f6a", color: "white" }}>
               <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Id venta</th>
                  <th scope="col">Valor</th>
               </tr>
            </thead>
            <tbody style={{ backgroundColor: "#D888D2", color: "white" }}>
               <tr>
               <th style={{textAlign:'right'}}></th>
               <th style={{textAlign:'right'}}></th>
               <th style={{textAlign:'right'}}></th>
               </tr>
            <tr style={{textAlign:'right'}} type="money">
                  <th colSpan={2} >Total</th>
                  <th scope="col">$ 00</th>
                </tr>
            </tbody>
        </table>
       <br></br> 
     </Fragment>
    );
   }

   export default VentasRealizadas;