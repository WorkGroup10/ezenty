const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

//Uso de constantes Importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
    

//Importar rutas

const productos = require("./routes/productosRoutes");
const usuarios = require("./routes/authRoutes");
const ordenes = require("./routes/ordersRoutes");

app.use("/api", productos);
app.use("/api", usuarios);
app.use("/api", ordenes);

//MiddleWares para manejar errores
app.use(errorMiddleware);
module.exports = app;
